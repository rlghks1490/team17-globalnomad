const ActivityEditFormSkeleton = () => {
  return (
    <div className="flex w-[792px] flex-col gap-6">
      <div className="flex justify-between">
        <div className="skeleton h-9 w-40 rounded-md"></div>
        <div className="skeleton h-12 w-32 rounded-md"></div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="skeleton h-14 w-[792px] rounded-md"></div>
        <div className="skeleton h-14 w-[792px] rounded-md"></div>
        <div className="skeleton h-96 w-[792px] rounded-md"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-7 w-11 rounded-md"></div>
          <div className="skeleton h-14 w-[792px] rounded-md"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-7 w-11 rounded-md"></div>
          <div className="skeleton h-14 w-[792px] rounded-md"></div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="skeleton h-7 w-44 rounded-md"></div>
        <div className="flex flex-col">
          <div className="flex gap-5">
            <div className="flex flex-col gap-2.5">
              <div className="skeleton h-7 w-9 rounded-md"></div>
              <div className="skeleton h-14 w-96 rounded-md"></div>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="skeleton h-7 w-20 rounded-md"></div>
              <div className="skeleton h-14 w-36 rounded-md"></div>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="skeleton h-7 w-20 rounded-md"></div>
              <div className="skeleton h-14 w-36 rounded-md"></div>
            </div>
            <div className="flex items-end">
              <div className="skeleton h-14 w-14 rounded-md"></div>
            </div>
          </div>
        </div>
        <div className="border border-gnGray300"></div>
        <div className="flex flex-col gap-[21px]">
          <div className="flex gap-5">
            <div className="skeleton h-14 w-96 rounded-md"></div>
            <div className="skeleton h-14 w-36 rounded-md"></div>
            <div className="skeleton h-14 w-36 rounded-md"></div>
            <div className="skeleton h-14 w-14 rounded-md"></div>
          </div>
        </div>
        <div className="flex flex-col gap-[21px]">
          <div className="flex gap-5">
            <div className="skeleton h-14 w-96 rounded-md"></div>
            <div className="skeleton h-14 w-36 rounded-md"></div>
            <div className="skeleton h-14 w-36 rounded-md"></div>
            <div className="skeleton h-14 w-14 rounded-md"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="skeleton h-7 w-28 rounded-md"></div>
          <div className="flex gap-6">
            <div className="skeleton h-44 w-44 rounded-md"></div>
            <div className="skeleton h-44 w-44 rounded-md"></div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="skeleton h-7 w-28 rounded-md"></div>
          <div className="flex flex-wrap gap-6">
            <div className="skeleton h-44 w-44 rounded-md"></div>
            <div className="skeleton h-44 w-44 rounded-md"></div>
            <div className="skeleton h-44 w-44 rounded-md"></div>
            <div className="skeleton h-44 w-44 rounded-md"></div>
            <div className="skeleton h-44 w-44 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityEditFormSkeleton;
