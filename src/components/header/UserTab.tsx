import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";
import UserDropDown from "./userDropDown";

const UserTab = () => {
  return (
    <div className="flex items-center justify-between  bg-slate-600 rounded-xl">
      <UserDropDown />
      <div className="bg-sky-500 hover:bg-sky-700 text-white font-bold p-2 m-1 rounded-xl">
        <ShoppingCartIcon className="h-6 w-6" />
      </div>
      <div className="bg-sky-500 hover:bg-sky-700 text-white font-bold p-2 m-1 rounded-xl">
        <HeartIcon className="h-6 w-6" />
      </div>
    </div>
  );
};

export default UserTab;
