const StatusCalendarSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="skeleton h-10 w-10 rounded-md"></div>
        <div className="skeleton h-10 w-36 rounded-md"></div>
        <div className="skeleton h-10 w-10 rounded-md"></div>
      </div>
      <div className="skeleton h-[792px] w-[792px] rounded-md"></div>
    </div>
  );
};

export default StatusCalendarSkeleton;
