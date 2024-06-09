import { ReservationStatus } from "@/apis/myReservation/myReservation.type";
import { ReservationStatueList } from "@/constants/reservation";
import React, { Dispatch, SetStateAction } from "react";

interface ReservationFilterProps {
  value: ReservationStatus;
  setValue: Dispatch<SetStateAction<ReservationStatus>>;
}

const ReservationFilter = ({ value, setValue }: ReservationFilterProps) => {
  return (
    <div>
      <button>{ReservationStatueList[value]}</button>
    </div>
  );
};

export default ReservationFilter;
