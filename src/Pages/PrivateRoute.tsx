import { Outlet, useLocation, Navigate } from "react-router";
import { useLoginState } from "../util/Auth/loginState";

function PrivateRoute() {
  const location = useLocation();
  const { loggedInState } = useLoginState();

  return !loggedInState.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace></Navigate>
  );
}

export default PrivateRoute;
