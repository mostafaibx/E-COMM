import { Link } from "react-router-dom";
import ProfileImg from "../ProfileImg/ProfileImg";
import "./Tabs.css";

const Tabs = () => {
  return (
    <div className="lg:w-1/4 flex flex-col justify-center m-4 border-2 border-separate rounded-xl shadow-md">
      <ProfileImg />

      <ul className="flex lg:flex-col my-6">
        <li className="tab">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="tab">
          <Link to="/orders">Orders </Link>
        </li>
        <li className="tab">
          <Link to="/wishlist">Wishlist </Link>
        </li>
        <li className="tab">
          <Link to="/cart"> Your Cart </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
