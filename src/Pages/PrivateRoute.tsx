import { Outlet, useLocation, Navigate } from "react-router";

function PrivateRoute() {
  const location = useLocation();
  const isLoging = false;
  return !isLoging ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace></Navigate>
  );
}

export default PrivateRoute;
