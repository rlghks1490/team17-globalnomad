import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import Image from "next/image";
import CalendarIcon from "../../../public/icons/calendarIcon.svg";

interface RegistCalendarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const RegistCalendar = ({
  selectedDate,
  setSelectedDate,
}: RegistCalendarProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  const CustomInput = forwardRef<
    HTMLButtonElement,
    { value: string; onClick: () => void }
  >(({ value, onClick }, ref) => (
    <button
      className="flex h-14 w-[377px] cursor-pointer flex-row items-center gap-3 rounded-md border border-gnGray700 px-4 py-2 tablet:w-[149px] mobile:h-11 mobile:w-[130px] mobile:gap-0.5 mobile:gap-[7px] mobile:px-2.5 mobile:text-sm"
      onClick={onClick}
      ref={ref}
    >
      <div className="mobile:h-7 mobile:w-7">
        <Image src={CalendarIcon} alt="달력 아이콘" width={32} height={32} />
      </div>
      {value}
    </button>
  ));

  const handleCalendarToggle = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  return (
    <div>
      <DatePicker
        dateFormat="yyyy/MM/dd" // 날짜 형태
        toggleCalendarOnIconClick
        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
        minDate={new Date()} // minDate 이전 날짜 선택 불가
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date!)}
        locale={ko}
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

export default RegistCalendar;
