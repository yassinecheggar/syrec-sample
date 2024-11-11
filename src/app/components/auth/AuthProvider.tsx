import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
  useLayoutEffect,
} from "react";
import { isPublicUrl, redirectToKeycloak } from "@utils/helpers";
import { AuthContextType, User, UserRole } from "@/types/auth/auth";
import { getToken, logout, refreshToken } from "@/apis";
import api from "@/utils/api";

const redirectUri = import.meta.env.VITE_REACT_APP_REDIRECT_URI;
type AxiosRequestConfig = Axios.AxiosXHRConfig<any>;

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error("useAuth must be used with auth provider");
  return authContext;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const [keycloakToken, setKeycloakToken] = useState<string | null>();
  const [authError, setAuthError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchToken();
  }, []);

  useLayoutEffect(() => {
    const authInterceptor = api.interceptors.request.use(function (
      config: AxiosRequestConfig & { _retry?: boolean }
    ) {
      if (config.url && isPublicUrl(config.url)) {
        return config;
      }

      if (keycloakToken && config && config.headers && !config._retry) {
        config.headers.Authorization = `Bearer ${keycloakToken}`;
      }
      return config;
    });

    return () => {
      api.interceptors.request.eject(authInterceptor);
    };
  }, [keycloakToken]);

  useLayoutEffect(() => {
    const refreshInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error?.response?.status === 401 && !originalRequest._retry) {
          try {
            const response: any = await refreshToken();
            const newToken = response?.data?.accessToken;

            if (newToken) {
              setKeycloakToken(newToken);
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
              originalRequest._retry = true;
              return api(originalRequest);
            } else {
              throw new Error(
                "Refresh token response does not contain an access token"
              );
            }
          } catch (refreshError) {
            console.error("Token refresh failed", refreshError);
            setKeycloakToken(null);
            setAuthenticated(false);
            setAuthError("Session expired. Redirecting to login...");
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(refreshInterceptor);
    };
  }, []);

  useEffect(() => {
    if (authError) {
      const timer = setTimeout(() => {
        redirectToKeycloak();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [authError]);

  const fetchToken = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (!code) {
      redirectToKeycloak();
    } else {
      try {
        const response: any = await getToken(code, redirectUri);
        const accessToken = response?.data?.access_token;
        if (accessToken) {
          setKeycloakToken(accessToken);
          setUser(response?.data);
          setAuthenticated(true);
          setAuthError(null);
        } else {
          throw new Error("No access token found in response");
        }
      } catch (error) {
        console.error("Authentication failed", error);
        handlogout();
        setAuthError("Authentication failed");
      }
    }
  };

  const hasRole = (requiredRoles: UserRole[]): boolean => {
    if (!user || !user.roles) return false;
    return requiredRoles.some((role) => user.roles.includes(role));
  };

  const handlogout = (redirect: boolean = false) => {
    logout();
    setAuthenticated(false);
    setKeycloakToken(null);
    setLoading(false);
    setUser(null);
    if (redirect) redirectToKeycloak();
  };

  if (authError) {
    return <div>{authError}</div>;
  }

  if (!authenticated && loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        authenticated,
        keycloakToken,
        user,
        hasRole,
        handlogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
