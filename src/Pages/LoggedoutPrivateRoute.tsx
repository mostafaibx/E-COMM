import { Outlet, useLocation, Navigate } from "react-router";
import { useLoginState } from "../util/Auth/loginState";

function LoggedoutPrivateRoute() {
  const location = useLocation();
  const { loggedInState } = useLoginState();

  if (loggedInState.isLoading) {
    return null;
  }

  return loggedInState.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace></Navigate>
  );
}

export default LoggedoutPrivateRoute;
