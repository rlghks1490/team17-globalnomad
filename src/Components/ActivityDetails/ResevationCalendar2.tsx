import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/locale';

const ReservationCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date|null>(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);


  const CustomInput = forwardRef<HTMLButtonElement, {value: string, onClick: () => void}>(
    ({ value, onClick }, ref) => (
      <button className='flex flex-row py-2 px-4 border rounded-md border-black items-center cursor-pointer' onClick={onClick} ref={ref}>
        {value}
      </button>
    )
  );

  const handleCalendarToggle = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  return (
    <div>
      <DatePicker 
      dateFormat='yyyy-MM-dd' // 날짜 형태
      toggleCalendarOnIconClick
      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
      minDate={new Date()} // minDate 이전 날짜 선택 불가
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      locale={ko}
      customInput={<CustomInput value={selectedDate ? selectedDate.toLocaleDateString() : ''} onClick={handleCalendarToggle}/>}
    />
    </div>
  )
}

export default ReservationCalendar;