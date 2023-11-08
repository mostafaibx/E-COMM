import { Outlet, useLocation, Navigate } from "react-router";

function PrivateRoute() {
  const location = useLocation();
  const isLoging = true;
  return isLoging ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace></Navigate>
  );
}

export default PrivateRoute;
