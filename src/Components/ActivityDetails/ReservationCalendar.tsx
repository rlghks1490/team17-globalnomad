import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

interface Schedule {
  id: number;
  date: string;
  times: {
    id: number;
    startTime: string;
    endTime: string;
  }[];
}

interface ReservationCalendarProps {
  schedule: Schedule[];
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const ReservationCalendar = ({
  schedule,
  selectedDate,
  setSelectedDate,
}: ReservationCalendarProps) => {
  return (
    <div>
      <DatePicker
        className="flex cursor-pointer flex-row items-center rounded-md border border-black"
        dateFormat="yyyy-MM-dd" // 날짜 형태
        showIcon
        toggleCalendarOnIconClick
        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
        minDate={new Date()} // minDate 이전 날짜 선택 불가
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        locale={ko}
        includeDates={[new Date(schedule[1].date)]}
      />
    </div>
  );
};

export default ReservationCalendar;
