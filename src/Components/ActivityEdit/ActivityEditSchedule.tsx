import Image from "next/image";
import { useState } from "react";
import PlusButton from "../../../public/icons/plus_button.svg";
import MinusButton from "../../../public/icons/minus_button.svg";
import EditCalendar from "./EditCalendar";

interface Schedules {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
}

interface newSchedule {
  date: string;
  startTime: string;
  endTime: string;
}

interface ActivityEditScheduleProps {
  schedules: Schedules[];
  handleAddSchedule: (newSchedule: newSchedule[]) => void;
  handleRemoveSchedule: (ids: number[]) => void;
  handleSchedulesToAdd: (newSchedule: newSchedule[]) => void;
}

const ActivityEditSchedule = ({
  schedules,
  handleAddSchedule,
  handleRemoveSchedule,
  handleSchedulesToAdd,
}: ActivityEditScheduleProps) => {
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

  const [defaultSchedules, setDefaultSchedules] =
    useState<Schedules[]>(schedules);
  const [newSchedule, setNewSchedule] = useState<newSchedule>({
    date: new Date().toISOString().split("T")[0],
    startTime: "09:00",
    endTime: "09:00",
  });
  const [addedSchedule, setAddedSchedule] = useState<newSchedule[]>([]);

  const startTimeIndex = timeTable.indexOf(newSchedule.startTime);
  const availableTimeTable = timeTable.slice(startTimeIndex);

  //새로운 일정 추가를 위해 state를 조작하는 함수
  const handleNewScheduleChange = (name: string, value: string) => {
    setNewSchedule({
      ...newSchedule,
      [name]: value,
    });
  };

  // 새로운 일정을 추가하는 함수
  const handleAddNewSchedule = () => {
    if (newSchedule.date && newSchedule.startTime && newSchedule.endTime) {
      handleAddSchedule([newSchedule]);
      setAddedSchedule([...addedSchedule, newSchedule]);
      setNewSchedule({ date: "", startTime: "09:00", endTime: "09:00" });
      setSelectedDate(new Date());
    }
  };

  // 디폴트 일정을 제거하는 함수
  const handleRemoveDefaultSchedule = (id: number) => {
    handleRemoveSchedule([id]);
    setDefaultSchedules(
      defaultSchedules.filter((schedule) => schedule.id !== id),
    );
  };

  // 추가하려 했던 일정을 다시 삭제하는 함수
  const handleRemoveNewSchedule = (index: number) => {
    const newSchedules = addedSchedule.filter((_, i) => i !== index);
    setAddedSchedule(newSchedules);
    handleSchedulesToAdd(newSchedules);
  };

  return (
    <div className="flex flex-col gap-6">
      <label className="text-2xl font-bold text-gnDarkBlack">
        예약 가능한 시간대
      </label>
      {/* 스케쥴 추가 하기 */}
      <div className="flex flex-col">
        <div className="flex gap-5 tablet:gap-1 mobile:gap-1">
          <div className="flex flex-col gap-3.5">
            <label className="text-xl font-medium text-gnGray800">날짜</label>
            <EditCalendar
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
              className="w-[140px] rounded border border-gnGray700 px-4 py-[15px] text-base font-normal tablet:w-[104px] mobile:h-11 mobile:w-[79px] mobile:px-3 mobile:py-[9px] mobile:text-sm"
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
              className="w-[140px] rounded border border-gnGray700 px-4 py-[15px] text-base font-normal tablet:w-[104px] mobile:h-11 mobile:w-[79px] mobile:px-3 mobile:py-[9px] mobile:text-sm"
              value={newSchedule.endTime}
              onChange={(e) => {
                handleNewScheduleChange("endTime", e.target.value);
              }}
            >
              {availableTimeTable.map((time, index) => (
                <option key={index} value={time}>
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
      {/* 디폴트 스케쥴 */}
      <div className="flex flex-col gap-[21px]">
        {defaultSchedules.map((defaultSchedule, id) => (
          <div key={id} className="flex gap-[21px] tablet:gap-1 mobile:gap-2">
            <div className="w-[379px] whitespace-nowrap rounded border border-gnGray700 px-4 py-[15px] text-center text-base font-normal text-gnDarkBlack tablet:w-[149px] mobile:h-10 mobile:w-[130px] mobile:px-2.5 mobile:py-[9px]">
              {defaultSchedule.date}
            </div>
            <div className="w-[140px] whitespace-nowrap rounded border border-gnGray700 px-4 py-[15px] text-center text-base font-normal text-gnDarkBlack tablet:w-[104px] mobile:h-10 mobile:w-[79px] mobile:px-3 mobile:py-[9px] mobile:text-sm">
              {defaultSchedule.startTime}
            </div>
            <div className="w-[140px] whitespace-nowrap rounded border border-gnGray700 px-4 py-[15px] text-center text-base font-normal text-gnDarkBlack tablet:w-[104px] mobile:h-10 mobile:w-[79px] mobile:px-3 mobile:py-[9px] mobile:text-sm">
              {defaultSchedule.endTime}
            </div>
            <button
              onClick={() => handleRemoveDefaultSchedule(defaultSchedule.id)}
            >
              <div className="mobile:h-11 mobile:w-11">
                <Image src={MinusButton} alt="addTime" width={56} height={56} />
              </div>
            </button>
          </div>
        ))}
      </div>
      {/* 추가한 새로운 스케쥴 */}
      <div className="flex flex-col gap-[21px]">
        {addedSchedule.map((newSchedule, index) => (
          <div key={index} className="flex gap-5 tablet:gap-1 mobile:gap-1">
            <div className="w-[379px] whitespace-nowrap rounded border border-gnGray700 px-4 py-[15px] text-center text-base font-normal text-gnDarkBlack tablet:w-[149px] mobile:h-10 mobile:w-[130px] mobile:px-2.5 mobile:py-[9px]">
              {newSchedule.date}
            </div>
            <div className="w-[140px] whitespace-nowrap rounded border border-gnGray700 px-4 py-[15px] text-center text-base font-normal text-gnDarkBlack tablet:w-[104px] mobile:h-10 mobile:w-[79px] mobile:px-3 mobile:py-[9px] mobile:text-sm">
              {newSchedule.startTime}
            </div>
            <div className="w-[140px] whitespace-nowrap rounded border border-gnGray700 px-4 py-[15px] text-center text-base font-normal text-gnDarkBlack tablet:w-[104px] mobile:h-10 mobile:w-[79px] mobile:px-3 mobile:py-[9px] mobile:text-sm">
              {newSchedule.endTime}
            </div>
            <button onClick={() => handleRemoveNewSchedule(index)}>
              <div className="mobile:h-11 mobile:w-11">
                <Image src={MinusButton} alt="addTime" width={56} height={56} />
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityEditSchedule;
