import React from "react";

const MyPageSkeleton = () => {
  return (
    <div className="w-myInfoBoxWidth tablet:w-[30.75rem] mobile:w-[21.438rem]">
      <div className="flex flex-col gap-8 tablet:gap-4 mobile:gap-4">
        <div className="flex justify-between">
          <div className="skeleton h-[40px] w-[85px] rounded-xl"></div>
          <div className="skeleton h-[40px] w-[85px] rounded-xl"></div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="skeleton h-[20px] w-[40px] rounded-md"></div>
            <div className="skeleton h-[56px] w-[792px] rounded-md tablet:w-[492px]"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="skeleton h-[20px] w-[40px] rounded-md"></div>
            <div className="skeleton h-[56px] w-[792px] rounded-md tablet:w-[492px]"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="skeleton h-[20px] w-[40px] rounded-md"></div>
            <div className="skeleton h-[56px] w-[792px] rounded-md tablet:w-[492px]"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="skeleton h-[20px] w-[40px] rounded-md"></div>
            <div className="skeleton h-[56px] w-[792px] rounded-md tablet:w-[492px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageSkeleton;
