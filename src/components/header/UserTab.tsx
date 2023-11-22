import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";
import UserDropDown from "./userDropDown";
import { Link } from "react-router-dom";

const UserTab = () => {
  return (
    <div className="flex items-center justify-between  bg-slate-600 rounded-xl">
      <UserDropDown />
      <div className="bg-sky-500 hover:bg-sky-700 text-white font-bold p-2 m-1 rounded-xl">
        <Link to="/cart">
          <ShoppingCartIcon className="h-6 w-6" />
        </Link>
      </div>
      <div className="bg-sky-500 hover:bg-sky-700 text-white font-bold p-2 m-1 rounded-xl">
        <Link to="/wishlist">
          <HeartIcon className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default UserTab;
