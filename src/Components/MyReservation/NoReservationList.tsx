import React from "react";
import NoReservation from "../../../public/icons/noReservation.svg";
import Image from "next/image";

const NoReservationList = () => {
  return (
    <div className="mt-20 flex justify-center bg-white">
      <div className="flex flex-col items-center justify-center gap-5">
        <Image
          src={NoReservation}
          alt="NoReservation 이미지"
          width={130}
          height={177}
          priority
        />
        <p>아직 등록된 체험이 없어요.</p>
      </div>
    </div>
  );
};

export default NoReservationList;
