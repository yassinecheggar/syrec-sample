import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Layout from "./components/layout";
import { getdetails, logout } from "./apis";
import { AuthProvider } from "./components/auth/AuthProvider";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/theme/GlobalStyle";
import { StyleProvider } from "@ant-design/cssinjs";
import { theme } from "./assets/theme/theme";
import { Button } from "antd";
import { redirectToKeycloak } from "./utils/helpers";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Navigate to="/dashboard" replace />,
        },
        {
          path: "/dashboard",
          element: (
            <Button
              type="primary"
              onClick={async () => {
                await logout();
                redirectToKeycloak();
              }}
            >
              Logout
            </Button>
          ),
        },
        {
          path: "/lola",
          element: (
            <ProtectedRoute allowedRoles={["admin", "user"]}>
              <div>Protected content</div>
            </ProtectedRoute>
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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyleProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </StyleProvider>
    </ThemeProvider>
  );
}

export default App;
