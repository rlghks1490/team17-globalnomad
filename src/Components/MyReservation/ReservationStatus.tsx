import { ReservationStatus } from "@/apis/myReservation/myReservation.type";
import { ReservationStatueList } from "@/constants/reservation";
import React from "react";

interface ReservationStatusProps {
  status: ReservationStatus;
}

const ReservationStatue = ({ status }: ReservationStatusProps) => {
  return (
    <div className="mb-2 tablet:m-0">
      {status === "pending" ? (
        <p className="text-base font-bold text-gnBlue">
          {ReservationStatueList[status]}
        </p>
      ) : status === "confirmed" ? (
        <p className="text-base font-bold text-gnGreen">
          {ReservationStatueList[status]}
        </p>
      ) : status === "declined" ? (
        <p className="text-base font-bold text-gnDarkRed">
          {ReservationStatueList[status]}
        </p>
      ) : status === "canceled" ? (
        <p className="text-base font-bold text-gnGray700">
          {ReservationStatueList[status]}
        </p>
      ) : (
        <p className="text-base font-bold text-gnGray700">
          {ReservationStatueList[status]}
        </p>
      )}
    </div>
  );
};

export default ReservationStatue;
