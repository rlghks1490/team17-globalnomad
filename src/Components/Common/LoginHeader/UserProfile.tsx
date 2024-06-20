import React, { useState } from "react";
import LoginHeaderDropdown from "./LoginHeaderDropdown";
import NotificationBox from "./NotificationBox";

const UserProfile = () => {
  const [openNotification, setOpenNotification] = useState(false);
  const handleNotificationToggle = () => {
    setOpenNotification(!openNotification);
  };

  return (
    <div className="relative flex items-center justify-center text-gnDarkBlack">
      <button onClick={handleNotificationToggle}>
        <img src="/icons/alarmIcon.svg" alt="alarmIcon.svg" />
      </button>
      {openNotification && (
        <NotificationBox onClose={handleNotificationToggle} />
      )}
      <div className="mx-4 h-6 w-px bg-gnGray300"></div>
      <LoginHeaderDropdown />
    </div>
  );
};
export default UserProfile;
