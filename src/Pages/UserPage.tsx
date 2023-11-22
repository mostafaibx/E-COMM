import ProfileTab from "../components/Profile/ProfileTab";
import Tabs from "../components/Profile/Tabs";

const UserPage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center m-4">
      <Tabs />
      <ProfileTab />
    </div>
  );
};

export default UserPage;
