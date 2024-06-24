const ActivityContentSkeleton = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-20 flex w-[1200px] flex-col">
        <div className="my-10 flex items-center justify-between">
          <div className="flex flex-col gap-y-2.5">
            <div className="skeleton h-4 w-14  rounded-md"></div>
            <div className="skeleton h-9 w-96 rounded-md"></div>
            <div className="flex items-center gap-3">
              <div className="skeleton h-4 w-4 rounded-md"></div>
              <div className="skeleton h-4 w-48 rounded-md"></div>
            </div>
          </div>
          <div className="skeleton h-10 w-10 rounded-md"></div>
        </div>
        <div>
          <div className="skeleton grid-row-4 grid h-[534px] w-[1200px] grid-cols-4 justify-items-center gap-2 rounded-md"></div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="mb-10 flex w-[790px] flex-col gap-10 border-y border-[#112211] border-opacity-25 pb-20 pt-10">
          <div className="border-b border-[#112211] border-opacity-25 pb-10">
            <div className="flex flex-col gap-8">
              <div className="skeleton h-7 w-20 rounded-md"></div>
              <div className="skeleton h-44 w-[790px] rounded-md"></div>
            </div>
          </div>
          <div className="skeleton h-[400px] w-full rounded-md"></div>
        </div>
        <div className="flex w-[384px] flex-col gap-4 rounded-md border border-gnGray300 bg-white p-6">
          <div className="border-b border-gnGray300 pb-4">
            <div className="skeleton h-8 w-36 rounded-md"></div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-7 w-32 rounded-md"></div>
            <div className="skeleton h-60 w-80 rounded-md"></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="border-b border-gnGray300">
                  <div className="flex flex-col gap-3.5 pb-4">
                    <div className="skeleton h-7 w-32 rounded-md"></div>
                    <div className="flex flex gap-3">
                      <div className="skeleton h-12 w-28 rounded-md"></div>
                      <div className="skeleton h-12 w-28 rounded-md"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex w-[120px] flex-col gap-2">
                    <div className="skeleton h-7 w-32 rounded-md"></div>
                    <div className="skeleton h-10 w-32 rounded-md"></div>
                  </div>
                </div>
              </div>
              <div className="skeleton h-14 w-full rounded-md"></div>
            </div>
            <div className="flex flex-row justify-between border-t border-gnGray300 pt-4">
              <div className="skeleton h-7 w-14 rounded-md"></div>
              <div className="skeleton h-7 w-24 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityContentSkeleton;

// skeleton rounded-md
