import React from "react";
import NoReservation from "../../../public/icons/noReservation.svg";
import Image from "next/image";

const NoReservationList = () => {
  return (
    <div className="mx-[17.5rem] mt-[5.625rem] flex h-72 w-[16.375rem] flex-col items-center gap-5 tablet:mx-[5.875rem] tablet:mt-[3.75rem] tablet:w-[18.063rem] mobile:mx-[3.125rem] mobile:mt-16 mobile:h-[15.063rem]">
      <Image
        src={NoReservation}
        alt="no-reservation"
        width={130}
        height={177}
        priority
        className="tablet:h-[9.313rem] tablet:w-[6.813rem] mobile:h-[9.313rem] mobile:w-[6.813rem]"
      />
      <p className="text-2xl font-medium leading-normal text-gnGray700">
        아직 등록한 체험이 없어요.
      </p>
    </div>
  );
};

export default NoReservationList;
