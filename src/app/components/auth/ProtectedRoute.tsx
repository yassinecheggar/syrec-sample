import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { UserRole } from "../../types/auth/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}
function ProtectedRoute({ children, allowedRoles = [] }: ProtectedRouteProps) {
  const { authenticated, hasRole, loading, handlogout } = useAuth();
  const location = useLocation();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles.length > 0 && !hasRole(allowedRoles)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children} </>;
}

export default ProtectedRoute;
