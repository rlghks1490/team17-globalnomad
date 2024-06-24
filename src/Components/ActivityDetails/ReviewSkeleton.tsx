const ReviewSkeleton = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex w-[1200px] flex-col gap-6">
          <div className="skeleton h-7 w-9 rounded-md"></div>
          <div className="flex flex-row gap-4">
            <div className="skeleton h-16 w-20 rounded-md"></div>
            <div className="flex flex-col gap-2">
              <div className="skeleton h-6 w-16 rounded-md"></div>
              <div className="flex flex-row gap-1.5">
                <div className="skeleton h-4 w-4 rounded-md"></div>
                <div className="skeleton h-4 w-20 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[1200px] flex-row gap-4">
          <div className="skeleton h-11 w-11 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <div className="skeleton h-7 w-11 rounded-md"></div>
              <div className="text-gnGray300">|</div>
              <div className="skeleton h-7 w-20 rounded-md"></div>
            </div>
            <div className="skeleton h-28 w-[729px] rounded-md"></div>
          </div>
        </div>
        <div className="flex w-[1200px] flex-row gap-4">
          <div className="skeleton h-11 w-11 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <div className="skeleton h-7 w-11 rounded-md"></div>
              <div className="text-gnGray300">|</div>
              <div className="skeleton h-7 w-20 rounded-md"></div>
            </div>
            <div className="skeleton h-28 w-[729px] rounded-md"></div>
          </div>
        </div>
        <div className="flex w-[1200px] flex-row gap-4">
          <div className="skeleton h-11 w-11 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <div className="skeleton h-7 w-11 rounded-md"></div>
              <div className="text-gnGray300">|</div>
              <div className="skeleton h-7 w-20 rounded-md"></div>
            </div>
            <div className="skeleton h-28 w-[729px] rounded-md"></div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="skeleton h-14 w-14 rounded-md"></div>
          <div className="skeleton h-14 w-14 rounded-md"></div>
          <div className="skeleton h-14 w-14 rounded-md"></div>
          <div className="skeleton h-14 w-14 rounded-md"></div>
          <div className="skeleton h-14 w-14 rounded-md"></div>
          <div className="skeleton h-14 w-14 rounded-md"></div>
          <div className="skeleton h-14 w-14 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;
