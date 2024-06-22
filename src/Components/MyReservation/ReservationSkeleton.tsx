import React from "react";

export const ReservationSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-6 mobile:gap-3">
        <div className="flex justify-between">
          <div className="skeleton h-9 w-28 rounded-md"></div>
          <div className="skeleton h-9 w-28 rounded-md"></div>
        </div>
        <div className="bg-gnGray100"></div>
      </div>
      <div className="mb-6 flex h-reservationBoxHeight w-reservationBoxWidth shrink-0 gap-6 rounded-3xl shadow-reservationBox tablet:h-TabletCardList tablet:w-reservationTablet mobile:h-32 mobile:w-width344px">
        <div className="skeleton h-reservationImage w-reservationImage rounded-md tablet:h-reservationImageTablet tablet:w-reservationImageTablet mobile:h-32 mobile:w-32"></div>
        <div className="my-6 flex flex-col justify-between tablet:my-3.5 tablet:w-60 mobile:my-margin9px mobile:w-48">
          <div>
            <div className="skeleton mb-2 h-5 w-16 tablet:h-3 tablet:w-12 mobile:h-3 mobile:w-10"></div>
            <div className="skeleton mb-3 h-5 w-56 tablet:mb-margin5px tablet:h-3 tablet:w-36 mobile:h-3 mobile:w-28 "></div>
            <div className="skeleton mb-4 h-5 w-20 tablet:h-3 tablet:w-24 mobile:h-3 mobile:w-20"></div>
          </div>
          <div className="flex w-reservationButtonWidth justify-between tablet:w-width245px mobile:w-width190px">
            <div className="skeleton h-9 w-32 tablet:h-7 tablet:w-20"></div>
          </div>
        </div>
      </div>
    </>
  );
};
