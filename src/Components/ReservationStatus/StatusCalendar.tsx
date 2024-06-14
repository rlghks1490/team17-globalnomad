import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
import { DayHeaderContentArg } from "@fullcalendar/core/index.js";

const StatusCalendar = () => {
  const events = [
    { title: "Meeting1", start: new Date("2024-6-17") },
    { title: "Meeting2", start: new Date("2024-6-18") },
  ];

  const renderDayHeaderContent = (args: DayHeaderContentArg) => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[args.date.getUTCDay()];
  };

  const renderDayCellContent = (dayCell: { dayNumberText: string }) => {
    return <div>{dayCell.dayNumberText.replace("일", "")}</div>;
  };

  return (
    <div>
      <FullCalendar
        locale={"kr"}
        plugins={[dayGridPlugin]}
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
      />
    </div>
  );
};

export default StatusCalendar;
