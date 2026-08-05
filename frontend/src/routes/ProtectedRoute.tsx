import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/store/authStore";

export default function ProtectedRoute() {
  const { token } = useAuth();
  if (!token) return <Navigate to="/admin/login" replace />;
  return <Outlet />;
}
