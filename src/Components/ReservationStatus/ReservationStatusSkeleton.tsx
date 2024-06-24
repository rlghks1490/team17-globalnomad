const ReservationStatusSkeleton = () => {
  return (
    <div className="flex w-[792px] flex-col gap-[30px]">
      <div className="flex flex-col gap-6">
        <div className="flex w-full flex-col gap-[42px]">
          <div className="skeleton h-10 w-28 rounded-md"></div>
          <div className="skeleton h-14 w-[792px] rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ReservationStatusSkeleton;
