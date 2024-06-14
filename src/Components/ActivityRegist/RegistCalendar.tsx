import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

interface RegistCalendarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const RegistCalendar = ({
  selectedDate,
  setSelectedDate,
}: RegistCalendarProps) => {
  return (
    <div>
      <DatePicker
        className="flex w-[377px] cursor-pointer flex-row items-center justify-center rounded-md border border-black"
        dateFormat="yyyy-MM-dd" // 날짜 형태
        showIcon
        toggleCalendarOnIconClick
        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
        minDate={new Date()} // minDate 이전 날짜 선택 불가
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date!)}
        locale={ko}
      />
    </div>
  );
};

export default RegistCalendar;
