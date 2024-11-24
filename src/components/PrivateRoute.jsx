import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ isProtectedRoute, to }) {
  return isProtectedRoute ? <Outlet /> : <Navigate to={to} />;
}
