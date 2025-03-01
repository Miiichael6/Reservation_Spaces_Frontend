import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  user: unknown;
  redirectTo?: string;
}

export function ProtectedRoute({ user, redirectTo = "/login" }: ProtectedRouteProps) {
  return user ? <Outlet /> : <Navigate to={redirectTo} replace />;
}

export function PublicRoute({ user, redirectTo = "/" }: ProtectedRouteProps) {
  return !user ? <Outlet /> : <Navigate to={redirectTo} replace />;
}