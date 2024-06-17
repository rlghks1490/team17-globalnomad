import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {
  DateClickArg,
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
import { DatesSetArg, DayHeaderContentArg } from "@fullcalendar/core/index.js";
import { useEffect, useState } from "react";
import {
  useMyActivitiesRegistrationDashboard,
  useMyActivitiesRegistrationSchedule,
} from "@/service/myActivities/useMyActiviesService";
import StatusBox from "./StausBox";

const StatusCalendar = () => {
  const [currentYear, setCurrentYear] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const { data: monthlyStatus, refetch } = useMyActivitiesRegistrationDashboard(
    currentYear,
    currentMonth,
    1148,
  );

  const events = [
    { title: "Meeting1", start: new Date("2024-6-17") },
    { title: "Meeting2", start: new Date("2024-6-18") },
  ];

  const renderDayHeaderContent = (args: DayHeaderContentArg) => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[args.date.getDay()];
  };

  const renderDayCellContent = (dayCell: { dayNumberText: string }) => {
    return <div>{dayCell.dayNumberText.replace("일", "")}</div>;
  };

  const handleDatesSet = (dateInfo: DatesSetArg) => {
    const yearOfFirstDay = dateInfo.start.getFullYear();
    const yearOfLastDay = dateInfo.end.getFullYear();
    const monthOfFirstDay = dateInfo.start.getMonth() + 1;
    const monthOfLastDay = dateInfo.end.getMonth() + 1;

    let year;
    let month;
    if (dateInfo.start.getDate() >= 23) {
      month = dateInfo.start.getMonth() + 2;
      if (month > 12) {
        month = 1;
      }
    } else {
      month = dateInfo.start.getMonth() + 1;
    }
    if (yearOfFirstDay !== yearOfLastDay) {
      if (monthOfFirstDay <= 12 && monthOfLastDay === 1) {
        year = yearOfFirstDay;
      } else {
        year = yearOfLastDay;
      }
    } else {
      year = yearOfFirstDay;
    }

    setCurrentMonth(month.toString().padStart(2, "0"));
    setCurrentYear(year.toString());
  };

  const handleDateClick = (info: DateClickArg) => {
    const clickedDay = info.date.getDate().toString().padStart(2, "0");
    const clickedDate = info.date.toISOString().split("T")[0];
    setSelectedDay(clickedDay);
    setSelectedDate(clickedDate);
  };

  useEffect(() => {
    // 최초 렌더링 시 또는 currentYear, currentMonth이 변경될 때 데이터 다시 불러오기
    if (currentYear && currentMonth) {
      refetch();
    }
  }, [currentYear, currentMonth, refetch]);

  return (
    <div>
      <FullCalendar
        locale={"kr"}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        timeZone="KST"
        fixedWeekCount={false}
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        dayHeaderContent={renderDayHeaderContent}
        dayCellContent={renderDayCellContent}
        datesSet={handleDatesSet}
        dateClick={handleDateClick}
      />
      <StatusBox selectedDay={selectedDay} selectedDate={selectedDate} />
    </div>
  );
};

export default StatusCalendar;
