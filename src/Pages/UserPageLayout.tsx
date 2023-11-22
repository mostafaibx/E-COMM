import { Outlet } from "react-router-dom";
import Tabs from "../components/Profile/Tabs/Tabs";

const UserPageLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center m-4">
      <Tabs />
      <Outlet />
    </div>
  );
};

export default UserPageLayout;
