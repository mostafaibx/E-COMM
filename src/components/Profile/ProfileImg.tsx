import { useLoginState } from "../../util/Auth/loginState";
import "./ProfileImg.css";

const defImg =
  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";

const ProfileImg = () => {
  const { loggedInState } = useLoginState();

  return (
    <div className="flex flex-col items-center">
      <div className="mx-8 mt-6 mb-1 ">
        <img
          className={
            loggedInState.userDetails?.photoURL
              ? "profile-img"
              : "profile-img-missing"
          }
          src={loggedInState.userDetails?.photoURL || defImg}
        />
      </div>
      <div className="m-8 text-2xl lg:text-xl font-medium">
        <h1>Welcome {loggedInState.userDetails?.displayName} </h1>
      </div>
      <button className=" text-md font-medium text-white bg-green-500 hover:bg-green-800 transition-all py-4 px-6 rounded-full">
        Upload your profile picture
      </button>
    </div>
  );
};

export default ProfileImg;
