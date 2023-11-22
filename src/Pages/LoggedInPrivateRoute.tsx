import { Outlet, useLocation, Navigate } from "react-router";
import { useLoginState } from "../util/Auth/loginState";

function LoggedInPrivateRoute() {
  const location = useLocation();
  const { loggedInState } = useLoginState();
  console.log(loggedInState.isLoggedIn);

  return !loggedInState.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace></Navigate>
  );
}

export default LoggedInPrivateRoute;
