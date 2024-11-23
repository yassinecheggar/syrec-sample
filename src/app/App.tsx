import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Layout from "./components/layout";
import { getdetails, logout } from "./services/apis/auth";
import { AuthProvider } from "./components/auth/AuthProvider";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/theme/GlobalStyle";
import { StyleProvider } from "@ant-design/cssinjs";
import { antComponent, antToken, theme } from "./assets/theme/theme";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { store } from "./store/store";
import Dashboard from "./pages/dashboard";
import { ConfigProvider } from "antd";
import { useStyle } from "./hooks/theme/useStyle";
import Claims from "./pages/claims";

function App() {
  const { styles } = useStyle();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <Layout />
        // </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Navigate to="/dashboard" replace />,
        },

        {
          path: "/dashboard",
          element: <Dashboard />,
        },

        {
          path: "/claims",
          element: <Claims />,
        },
        {
          path: "/lola",
          element: (
            // <ProtectedRoute allowedRoles={["admin", "user"]}>
            <div>Protected content</div>
            // </ProtectedRoute>
          ),
        },
        {
          path: "/unauthorized",
          element: <div>unauthorized path</div>,
        },
      ],
    },

    {
      path: "/nonprotected",
      element: <div>Non ProtectedPage </div>,
    },
  ]);

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ConfigProvider
            theme={{ token: antToken(theme), components: antComponent(theme) }}
            button={{ className: styles.linearGradientButton }}
            menu={{ className: styles.menu }}
          >
            <StyleProvider>
              {/* <AuthProvider> */}
              <RouterProvider router={router} />
              {/* </AuthProvider> */}
            </StyleProvider>
          </ConfigProvider>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
