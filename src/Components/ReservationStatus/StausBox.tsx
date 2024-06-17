import { useMyActivitiesRegistrationSchedule } from "@/service/myActivities/useMyActiviesService";
import CloseBtn from "../../../public/icons/x_button.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import StatusHistory from "./StatusHistory";

interface StatusBoxProps {
  selectedDay: string;
  selectedDate: string;
}

const StatusBox = ({ selectedDay, selectedDate }: StatusBoxProps) => {
  const [reservationStatus, setReservationStatus] = useState<string>("pending");
  const [selectedScheduleId, setSelectedScheduleId] = useState<number>(0);

  const { data: dailyStatus, refetch } = useMyActivitiesRegistrationSchedule(
    selectedDate,
    1148,
  );

  const handleReservationStatus = (status: string) => {
    setReservationStatus(status);
  };

  const handleScheduleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const scheduleId = Number(event.target.value);
    setSelectedScheduleId(scheduleId);
  };

  const formatSelectedDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}년 ${month}월 ${day}일`;
  };

  useEffect(() => {
    if (selectedDate) {
      refetch();
    }
  }, [selectedDate, refetch]);

  useEffect(() => {
    if (dailyStatus && dailyStatus.data.length > 0) {
      setSelectedScheduleId(dailyStatus.data[0].scheduleId);
    }
  }, [dailyStatus]);

  console.log(selectedScheduleId, reservationStatus);

  return (
    <div className="flex h-[697px] w-[429px] flex-col gap-7 rounded-3xl border border-gnGray300 bg-white p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">예약 정보</h1>
        <button>
          <Image src={CloseBtn} alt="CloseBtn" width={40} height={40} />
        </button>
      </div>
      <div className="flex border-b border-gnGray300">
        <div
          className={`flex gap-1 px-2.5 pb-4 text-xl font-semibold ${reservationStatus === "pending" ? "border-b-4 border-gnDarkGreen" : ""}`}
          onClick={() => handleReservationStatus("pending")}
        >
          <p>신청</p>
          <p>2</p>
        </div>
        <div
          className={`flex gap-1 px-2.5 pb-4 text-xl font-semibold ${reservationStatus === "confirmed" ? "border-b-4 border-gnDarkGreen" : ""}`}
          onClick={() => handleReservationStatus("confirmed")}
        >
          <p>승인</p>
          <p>0</p>
        </div>
        <div
          className={`flex gap-1 px-2.5 pb-4 text-xl font-semibold ${reservationStatus === "declined" ? "border-b-4 border-gnDarkGreen" : ""}`}
          onClick={() => handleReservationStatus("declined")}
        >
          <p>거절</p>
          <p>0</p>
        </div>
      </div>
      <div className="flex flex-col gap-3.5">
        <p className="text-xl font-semibold">예약 날짜</p>
        <div className="flex flex-col gap-2.5">
          <div className="text-xl font-normal">
            {formatSelectedDate(selectedDate)}
          </div>
          <select
            className="rounded border border-gnGray700 p-4 text-base font-normal"
            onChange={handleScheduleChange}
          >
            {dailyStatus?.data.map((item) => (
              <option key={item.scheduleId} value={item.scheduleId}>
                {item.startTime} ~ {item.endTime}
              </option>
            ))}
          </select>
        </div>
      </div>
      <StatusHistory
        reservationStatus={reservationStatus}
        selectedScheduleId={selectedScheduleId}
      />
    </div>
  );
};

export default StatusBox;
