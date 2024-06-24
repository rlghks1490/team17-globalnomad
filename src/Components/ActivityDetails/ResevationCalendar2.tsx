import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import Image from "next/image";
import CalendarIcon from "../../../public/icons/calendarIcon.svg";

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
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

const ReservationCalendar2 = ({
  schedule,
  selectedDate,
  setSelectedDate,
}: ReservationCalendarProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const dates = schedule.map((item) => new Date(item.date));
  const uniqueDates = Array.from(new Set(dates));

  const CustomInput = forwardRef<
    HTMLButtonElement,
    { value: string; onClick: () => void }
  >(({ value, onClick }, ref) => (
    <button
      className="flex w-64 cursor-pointer flex-row items-center gap-3 rounded-md border border-black px-4 py-2 text-xl font-semibold tablet:w-[200px]"
      onClick={onClick}
      ref={ref}
    >
      <Image src={CalendarIcon} alt="달력 아이콘" width={32} height={32} />
      {value}
    </button>
  ));

  const handleCalendarToggle = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  return (
    <div>
      <DatePicker
        dateFormat="yyyy-MM-dd" // 날짜 형태
        toggleCalendarOnIconClick
        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date!)}
        locale={ko}
        includeDates={uniqueDates}
        customInput={
          <CustomInput
            value={selectedDate ? selectedDate.toLocaleDateString() : ""}
            onClick={handleCalendarToggle}
          />
        }
      />
    </div>
  );
};

export default ReservationCalendar2;
