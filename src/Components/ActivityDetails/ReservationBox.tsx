import Image from "next/image";
import IncreaseButton from "../../../public/icons/IncreaseButton.svg";
import DecreaseButton from "../../../public/icons/DecreaseButton.svg";
import ReservationCalendar from "./ReservationCalendar";
import ReservationCalendar2 from "./ResevationCalendar2";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AvailableSchedule } from "@/apis/activityDetails/activityDetails.type";
import { getAvaulableSchedule } from "@/apis/activityDetails/activityDetails";

interface Schedule {
  id: number;
  date: string;
  times: {
    id: number;
    startTime: string;
    endTime: string;
  }[];
}

interface ReservationBoxProps {
  price: number;
  schedule: Schedule[];
}

const ReservationBox = ({ price, schedule }: ReservationBoxProps) => {
  // const { data } = useQuery<AvailableSchedule>({
  //   queryKey: ["datas"],
  //   queryFn: getAvaulableSchedule,
  // });

  const [counter, setCounter] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const getAvailableTime = () => {
    return schedule.filter(
      (schedule) => schedule.date === selectedDate?.toISOString().split("T")[0],
    );
  };

  const availableTimes = getAvailableTime() || [];

  console.log(schedule[1]);
  console.log(selectedDate?.toISOString().split("T")[0]);
  console.log(schedule[1].date);
  console.log(typeof schedule[1].date);
  console.log(getAvailableTime());

  return (
    <div className="flex flex-col gap-4 rounded-md border border-gnGray300 bg-white p-6">
      <div className="border-b border-gnGray300 pb-4 text-[28px] font-bold">
        ￦ {price} / 인
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold">날짜</p>
        {/* <Image src="/images/CalendarSample.png" alt='calendar' width={305} height={241} /> */}
        <ReservationCalendar
          schedule={schedule}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        {/* <ReservationCalendar2 /> */}
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col gap-4">
            <div className="border-b border-gnGray300">
              <div className="flex flex-col gap-3.5 pb-4 ">
                <p className="text-lg font-bold">예약 가능한 시간</p>
                <div className="flex flex-row gap-3">
                  {/* <button className="rounded-md border border-[#112111] px-3 py-2.5 text-base font-medium">
                    {schedule[1].times[1]} ~ {schedule[1].times[2]}
                  </button> */}
                  {/* <button className="rounded-md border border-[#112111] px-3 py-2.5 text-base font-medium">
                    15:00 ~ 16:00
                  </button> */}
                  {/* {availableTimes.length > 0 ? (
                    availableTimes.map((time) => (
                      <button
                        key={time.id}
                        className="rounded-md border border-[#112111] px-3 py-2.5 text-base font-medium"
                      >
                        {time.startTime} ~ {time.endTime}
                      </button>
                    ))
                  ) : (
                    <p>예약 가능한 시간이 없습니다.</p>
                  )} */}
                </div>
              </div>
            </div>

            <div>
              <div className="flex w-[120px] flex-col gap-2">
                <p className="text-xl font-bold">참여 인원 수</p>
                <div className="flex flex-row items-center justify-center gap-2 rounded-md border border-[#CDD0DC]">
                  <button onClick={() => setCounter(counter - 1)}>
                    <Image
                      src={DecreaseButton}
                      alt="decreaseButton"
                      width={40}
                      height={40}
                    />
                  </button>
                  {counter}
                  <button onClick={() => setCounter(counter + 1)}>
                    <Image
                      src={IncreaseButton}
                      alt="increaseButton"
                      width={40}
                      height={40}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="w-full rounded border bg-[#112211] px-10 py-2 text-base font-bold text-white">
              예약하기
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-between border-t border-gnGray300 pt-4 text-xl font-bold">
          <p>총 합계</p>
          <div>￦ {price * counter}</div>
        </div>
      </div>
    </div>
  );
};

export default ReservationBox;
