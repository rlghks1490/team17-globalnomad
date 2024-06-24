import React from "react";

export const ProfileModifySkeleton = () => {
  return (
    <>
      <div className="flex h-[400px] max-w-4xl tablet:w-[250px] ">
        <div className="g-10 flex w-[380px] flex-col items-center justify-center rounded-lg border bg-white p-6">
          <div className="skeleton flex h-[160px] w-[160px] items-center justify-center space-x-3 rounded-full"></div>
          <div className="mt-6 flex flex-col gap-1 space-y-1">
            <div className="skeleton h-[35px] w-[250px] rounded-xl px-3 py-2 tablet:w-[200px]"></div>
            <div className="skeleton h-[35px] w-[250px] rounded-xl px-3 py-2 tablet:w-[200px]"></div>
            <div className="skeleton h-[35px] w-[250px] rounded-xl px-3 py-2 tablet:w-[200px]"></div>
            <div className="skeleton h-[35px] w-[250px] rounded-xl px-3 py-2 tablet:w-[200px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};
