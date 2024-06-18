import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {
  DateClickArg,
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
import {
  DatesSetArg,
  DayHeaderContentArg,
  EventClickArg,
} from "@fullcalendar/core/index.js";
import { useEffect, useState } from "react";
import {
  useMyActivitiesRegistrationDashboard,
  useMyActivitiesRegistrationSchedule,
} from "@/service/myActivities/useMyActiviesService";
import StatusBox from "./StausBox";

interface Reservation {
  completed: number;
  confirmed: number;
  pending: number;
}

interface EventData {
  date: string;
  reservations: Reservation;
}

const StatusCalendar = () => {
  const [currentYear, setCurrentYear] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [events, setEvents] = useState<{ title: string; start: string }[]>([]);
  const [clickPosition, setClickPosition] = useState<{
    x: number;
    y: number;
  } | null>(null); // 추가

  const { data: monthlyStatus, refetch } = useMyActivitiesRegistrationDashboard(
    currentYear,
    currentMonth,
    1148,
  );

  const transformEvents = (data: EventData[]) => {
    const events: { title: string; start: string; className: string }[] = [];
    data.forEach((item) => {
      events.push({
        title: `예약: ${item.reservations.pending}`,
        start: item.date,
        className: "event-pending",
      });
      events.push({
        title: `승인: ${item.reservations.confirmed}`,
        start: item.date,
        className: "event-confirmed",
      });
      events.push({
        title: `완료: ${item.reservations.completed}`,
        start: item.date,
        className: "event-completed",
      });
    });
    return events;
  };

  const renderDayHeaderContent = (args: DayHeaderContentArg) => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[args.date.getDay()];
  };

  const renderDayCellContent = (dayCell: {
    dayNumberText: string;
    date: Date;
  }) => {
    const cellDate = dayCell.date.toISOString().split("T")[0];
    const hasEvents = events.some((event) => event.start === cellDate);

    return (
      <div className={`${hasEvents ? "cursor-pointer" : "disabled"}`}>
        {dayCell.dayNumberText.replace("일", "")}
      </div>
    );
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

    const cellDate = clickedDate;
    const hasEvents = events.some((event) => event.start === cellDate);

    if (hasEvents) {
      const rect = info.dayEl.getBoundingClientRect();
      setClickPosition({
        y: rect.top - 500,
        x: rect.right + 10,
      });
    } else {
      setSelectedDay("");
      setSelectedDate("");
    }
  };

  const handleEventClick = (info: EventClickArg) => {
    const clickedDay = info.event.start!.getDate().toString().padStart(2, "0");
    const clickedDate = info.event.start!.toISOString().split("T")[0];
    setSelectedDay(clickedDay);
    setSelectedDate(clickedDate);

    const rect = info.el.getBoundingClientRect();
    setClickPosition({
      y: rect.top - 500,
      x: rect.right + 10,
    });
  };

  const handleCloseStatusBox = () => {
    setClickPosition(null);
    setSelectedDay("");
    setSelectedDate("");
  };

  useEffect(() => {
    if (monthlyStatus) {
      const newEvents = transformEvents(monthlyStatus.data);
      setEvents(newEvents);
    }
  }, [monthlyStatus]);

  useEffect(() => {
    if (currentYear && currentMonth) {
      refetch();
    }
  }, [currentYear, currentMonth, refetch]);

  return (
    <div className="relative">
      <FullCalendar
        locale={"kr"}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={(eventInfo) => (
          <div
            className={`${
              eventInfo.event.classNames.includes("event-pending")
                ? "w-full border-gnDarkBlue bg-gnDarkBlue text-white"
                : eventInfo.event.classNames.includes("event-confirmed")
                  ? "text-gnDarkOrange w-full border-gnLightOrange bg-gnLightOrange"
                  : "border-gnGray300 bg-gnGray300 text-gnGray800"
            } bottom-0 rounded px-1 py-[3px]`}
          >
            {eventInfo.event.title}
          </div>
        )}
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
        eventClick={handleEventClick}
      />
      {clickPosition && (
        <StatusBox
          selectedDay={selectedDay}
          selectedDate={selectedDate}
          x={clickPosition.x}
          y={clickPosition.y}
          onClose={handleCloseStatusBox}
        />
      )}
    </div>
  );
};

export default StatusCalendar;
