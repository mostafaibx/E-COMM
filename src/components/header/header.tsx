import { useNavigate } from "react-router";
import Button from "../../UI/Button";
import DropDown from "../../UI/DropDown";
import { Link } from "react-router-dom";
import UserTab from "./UserTab";
import { useLoginState } from "../../util/Auth/loginState";

const Header = () => {
  const navigate = useNavigate();
  const openLogin = () => {
    navigate("/login");
  };

  const openSignup = () => {
    navigate("/signup");
  };
  const { loggedInState } = useLoginState();
  console.log(loggedInState.isLoggedIn);

  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold font-serif">
        <Link to="/">E-Shop</Link>
      </h1>
      <div className="md:flex items-center hidden ">
        <DropDown />
        <DropDown />
        <DropDown />
      </div>
      {!loggedInState.isLoggedIn && (
        <div className="flex">
          <Button color="primary" onClick={openLogin}>
            Login
          </Button>
          <Button color="secondary" onClick={openSignup}>
            Signup
          </Button>
        </div>
      )}
      {loggedInState.isLoggedIn && <UserTab />}
    </div>
  );
};

export default Header;
