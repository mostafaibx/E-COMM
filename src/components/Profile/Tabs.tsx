import ProfileImg from "./ProfileImg";
import "./Tabs.css";

const Tabs = () => {
  return (
    <div className="lg:w-1/4 flex flex-col justify-center m-4 border-2 border-separate rounded-xl shadow-md">
      <ProfileImg />

      <ul className="flex lg:flex-col my-6">
        <li className="tab">Profile</li>
        <li className="tab">Orders</li>
        <li className="tab">Wishlist</li>
        <li className="tab">Your Cart</li>
      </ul>
    </div>
  );
};

export default Tabs;
