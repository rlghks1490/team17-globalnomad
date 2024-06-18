import { useMyActivitiesCheck } from "@/service/myActivities/useMyActiviesService";
import StatusCalendar from "./StatusCalendar";
import { useState } from "react";

const ReservationStatus = () => {
  const { data: list } = useMyActivitiesCheck();

  if (!list) return null;

  return (
    <div className="flex w-[792px] flex-col gap-[30px] ">
      <div className="flex w-full flex-col gap-[42px]">
        <h1 className="text-[32px] font-bold">예약 현황</h1>
        <div className="relative">
          <label
            htmlFor="activity-select"
            className="absolute -top-2 left-3 bg-white px-1 text-sm font-normal"
          >
            체험명
          </label>
          <select
            id="activity-select"
            className="h-14 w-full rounded border border-gnGray700"
          >
            {list.data.activities.map((activity) => (
              <option key={activity.id} value={activity.id}>
                {activity.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <StatusCalendar />
    </div>
  );
};

export default ReservationStatus;
