import Image from "next/image";
import PlusButton from "../../../public/icons/plus_button.svg";
import MinusButton from "../../../public/icons/minus_button.svg";
import RegistCalendar from "./RegistCalendar";
import { useState } from "react";

interface Schedule {
  date: string;
  startTime: string;
  endTime: string;
}

interface ActivityRegistScheduleProps {
  handleAddSchedule: (newSchedule: Schedule[]) => void;
  handleCancelAddedSchedules: (newSchedule: Schedule[]) => void;
}

const ActivityRegistSchedule = ({
  handleAddSchedule,
  handleCancelAddedSchedules,
}: ActivityRegistScheduleProps) => {
  const timeTable = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const [newSchedule, setNewSchedule] = useState<Schedule>({
    date: "",
    startTime: "",
    endTime: "",
  });
  const [addedSchedule, setAddedSchedule] = useState<Schedule[]>([]);

  const startTimeIndex = timeTable.indexOf(newSchedule.startTime);
  const availableTimeTable = timeTable.slice(startTimeIndex);

  const handleNewScheduleChange = (name: string, value: string) => {
    setNewSchedule({
      ...newSchedule,
      [name]: value,
    });
  };

  const handleAddNewSchedule = () => {
    if (newSchedule.date && newSchedule.startTime && newSchedule.endTime) {
      handleAddSchedule([newSchedule]);
      setAddedSchedule([...addedSchedule, newSchedule]);
      setNewSchedule({ date: "", startTime: "09:00", endTime: "09:00" });
      setSelectedDate(new Date());
    }
  };

  const handleRemoveNewSchedule = (index: number) => {
    const newSchedules = addedSchedule.filter((_, i) => i !== index);
    setAddedSchedule(newSchedules);
    handleCancelAddedSchedules(newSchedules);
  };

  return (
    <div className="flex flex-col gap-6">
      <label className="text-2xl font-bold text-gnDarkBlack">
        예약 가능한 시간대
      </label>
      <div className="flex flex-col">
        <div className="flex gap-5">
          <div className="flex flex-col gap-2.5">
            <label className="text-xl font-medium text-gnGray800">날짜</label>
            <RegistCalendar
              selectedDate={selectedDate}
              setSelectedDate={(date: Date) => {
                setSelectedDate(date);
                handleNewScheduleChange(
                  "date",
                  date.toISOString().split("T")[0],
                );
              }}
            />
          </div>
          <div className="flex flex-col gap-3.5">
            <label className="text-xl font-medium text-gnGray800">
              시작 시간
            </label>
            <select
              className="w-[140px] rounded border border-gnGray700 px-4 py-[15px]"
              value={newSchedule.startTime}
              onChange={(e) => {
                handleNewScheduleChange("startTime", e.target.value);
              }}
            >
              {timeTable.map((time, i) => (
                <option key={i} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-3.5">
            <label className="text-xl font-medium text-gnGray800">
              종료 시간
            </label>
            <select
              className="w-[140px] rounded border border-gnGray700 px-4 py-[15px]"
              value={newSchedule.endTime}
              onChange={(e) => {
                handleNewScheduleChange("endTime", e.target.value);
              }}
            >
              {availableTimeTable.map((time, i) => (
                <option key={i} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button onClick={handleAddNewSchedule}>
              <Image src={PlusButton} alt="addTime" width={56} height={56} />
            </button>
          </div>
        </div>
      </div>
      <div className="border border-gnGray300"></div>
      <div className="flex flex-col gap-[21px]">
        {addedSchedule.map((newSchedule, index) => (
          <div key={index} className="flex gap-5">
            <div className="text-gnDarkBalck w-[379px] rounded border border-gnGray700 px-4 py-[15px] text-base font-normal">
              {newSchedule.date}
            </div>
            <div className="text-gnDarkBalck w-[140px] rounded border border-gnGray700 px-4 py-[15px] text-base font-normal">
              {newSchedule.startTime}
            </div>
            <div className="text-gnDarkBalck w-[140px] rounded border border-gnGray700 px-4 py-[15px] text-base font-normal">
              {newSchedule.endTime}
            </div>
            <button onClick={() => handleRemoveNewSchedule(index)}>
              <Image src={MinusButton} alt="addTime" width={56} height={56} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityRegistSchedule;
