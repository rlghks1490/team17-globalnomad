import React from "react";

const LoginHeaderDropdownSkeleton = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="skeleton flex h-9 w-9 items-center justify-center rounded-full"></div>
      <div className="skeleton w-18 flex h-5 items-center justify-center "></div>
    </div>
  );
};

export default LoginHeaderDropdownSkeleton;
