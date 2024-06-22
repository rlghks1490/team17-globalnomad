import React from "react";
import NoReservation from "../../../public/icons/noReservation.svg";
import Image from "next/image";

const NoReservationList = (props: any) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[32px] font-bold">{props.children}</h1>
      <div className="flex flex-col items-center gap-5 p-10">
        <Image
          src={NoReservation}
          alt="no-reservation"
          width={240}
          height={240}
          priority
        />
        <p className="text-2xl font-medium text-gnGray700">
          아직 등록한 체험이 없어요.
        </p>
      </div>
    </div>
  );
};

export default NoReservationList;
