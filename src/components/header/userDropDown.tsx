import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { signout } from "../../util/Auth/signout";
import { useLoginState } from "../../util/Auth/loginState";
import { Link } from "react-router-dom";

const UserDropDown = () => {
  const signoutHandler = () => {
    signout();
  };

  const { loggedInState } = useLoginState();

  return (
    <Menu as="div" className="relative inline-block text-left mx-5">
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
        {loggedInState.userDetails?.displayName}
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute flex flex-col right-[-33%] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <Menu.Item
            as="button"
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black p-4 text-lg font-medium hover:bg-gray-300 transation-all duration-150"
          >
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item
            onClick={signoutHandler}
            as="button"
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black p-4 text-lg font-medium hover:bg-gray-300 transation-all duration-150"
          >
            Sign Out
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserDropDown;
