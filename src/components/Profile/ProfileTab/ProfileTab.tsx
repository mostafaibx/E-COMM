import { useLoginState } from "../../../util/Auth/loginState";
import "./ProfileTab.css";

const ProfileTab = () => {
  const { loggedInState } = useLoginState();
  const { userDetails } = loggedInState;
  const address = false;

  return (
    <div className="lg:w-3/4 m-4 border-2 border-separate rounded-xl shadow-md">
      <div className="m-8 text-md lg:text-xl font-medium flex flex-col">
        <h1 className="m-8 text-4xl ">Personal Details</h1>

        <div className="input-container">
          <h1
            className={
              userDetails?.emailVerified ? "input-valid" : "input-invalid"
            }
          >
            Email : {userDetails?.email}
          </h1>

          {!userDetails?.phoneNumber && (
            <button className="update-btn">Verify Email</button>
          )}
        </div>

        <div className="input-container">
          <h1
            className={
              userDetails?.phoneNumber ? "input-valid" : "input-invalid"
            }
          >
            Phone : {userDetails?.phoneNumber}
          </h1>
          {!userDetails?.phoneNumber && (
            <button className="update-btn">Add Phone number</button>
          )}
        </div>

        <div className="input-container">
          <h1 className={address ? "input-valid" : "input-invalid"}>
            Address : {address}
          </h1>
          {!address && <button className="update-btn">Add your Address</button>}
        </div>
        <button className="update-btn">Change your passowrd</button>
      </div>

      <div>
        <button className="m-8 text-xl font-medium text-white bg-red-500 hover:bg-red-800 transition-all py-4 px-6 rounded-full">
          Delete your account
        </button>
        <button className="m-8 text-xl font-medium text-white bg-gray-500 hover:bg-gray-800 transition-all py-4 px-6 rounded-full">
          Log out
        </button>
      </div>
    </div>
  );
};

export default ProfileTab;
