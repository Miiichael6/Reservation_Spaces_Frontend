import { IUser } from "@/pages/Dashboard/domain/User.entity";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  user: IUser | null;
  redirectTo?: string;
}

export function ProtectedRoute({ user, redirectTo = "/login" }: ProtectedRouteProps) {
  return user ? <Outlet /> : <Navigate to={redirectTo} replace />;
}

export function PublicRoute({ user, redirectTo = "/" }: ProtectedRouteProps) {
  return !user ? <Outlet /> : <Navigate to={redirectTo} replace />;
}

export function PrivateRoute({ user, redirectTo = "/" }: ProtectedRouteProps) {
  const isAdmin = (user?.role.includes("admin"));
  return isAdmin ? <Outlet /> : <Navigate to={redirectTo} replace />;
}