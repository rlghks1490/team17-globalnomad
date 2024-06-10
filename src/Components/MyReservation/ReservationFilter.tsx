import { ReservationStatus } from "@/apis/myReservation/myReservation.type";
import { ReservationStatueList } from "@/constants/reservation";
import React, { Dispatch, SetStateAction, useState } from "react";
import ArrowDown from "../../../public/icons/ArrowDown.svg";
import Image from "next/image";

interface ReservationFilterProps {
  value: ReservationStatus;
  setValue: Dispatch<SetStateAction<ReservationStatus>>;
}

const filterList: ReservationStatus[] = [
  "all",
  "pending",
  "confirmed",
  "declined",
  "canceled",
  "completed",
];

const ReservationFilter = ({ value, setValue }: ReservationFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = (item: any) => {
    setValue(item);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleDropdown}
        className="radius flex h-14 w-40 items-center justify-between rounded-2xl border px-5 py-4"
      >
        {ReservationStatueList[value]}
        {<Image alt="필터 이미지" src={ArrowDown} width={22} height={22} />}
      </button>
      {isOpen && (
        <div className="relative z-10 flex flex-col items-center justify-center">
          {filterList.map((item) => (
            <button onClick={() => handleDropdownClick(item)}>
              {ReservationStatueList[item]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReservationFilter;
