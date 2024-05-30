import React from "react";
import LoginHeaderDropdown from "./LoginHeaderDropdown";

const UserProfile = () => {
  return (
    <div className="flex items-center justify-center text-gnDarkBlack">
      <button>
        <img src="/icons/alarmIcon.svg" alt="alarmIcon.svg" />
      </button>
      <div className="mx-4 h-6 w-px bg-gnGray300"></div>
      <LoginHeaderDropdown />
    </div>
  );
};
export default UserProfile;
