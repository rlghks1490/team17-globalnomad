import Image from "next/image";
import IncreaseButton from "../../../public/icons/IncreaseButton.svg";
import DecreaseButton from "../../../public/icons/DecreaseButton.svg";
import ReservationCalendar from "./ReservationCalendar";
import ReservationCalendar2 from "./ResevationCalendar2";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  AvailableSchedule,
  ResevationRequestData,
} from "@/apis/activityDetails/activityDetails.type";
import {
  ReservationRequest,
  getSchedule,
} from "@/apis/activityDetails/activityDetails";
import { AxiosError } from "axios";

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
  activityId: number;
  price: number;
  schedule: Schedule[];
}

const ReservationBox = ({
  activityId,
  price,
  schedule,
}: ReservationBoxProps) => {
  const [counter, setCounter] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const stringYear = selectedDate.getFullYear().toString();
  const stringMonth = (selectedDate.getMonth() + 1).toString().padStart(2, "0");

  const { data, isError } = useQuery<AvailableSchedule[]>({
    queryKey: ["availableSchedules", selectedDate],
    queryFn: () => getSchedule(stringYear, stringMonth, activityId),
    enabled: !!selectedDate,
  });

  if (isError) <>console.log("에러가 발생했습니다.")</>;

  const nineHours = 9 * 60 * 60 * 1000;
  const koreanSelectedDate = new Date(selectedDate.getTime() + nineHours);

  const getAvailableTime = data?.filter(
    (schedule) =>
      schedule.date === koreanSelectedDate?.toISOString().split("T")[0],
  );

  const handleTimeSelect = (timeId: number) => {
    setSelectedTime((prevSelectedTime) =>
      prevSelectedTime === timeId ? null : timeId,
    );
  };

  const resevationMutation = useMutation({
    mutationFn: (data: ResevationRequestData) =>
      ReservationRequest(data, activityId),
    mutationKey: ["reservation"],
    onSuccess: () => {
      alert("예약이 완료되었습니다.");
    },
    onError: (error: AxiosError) => {
      alert("예약에 실패했습니다. 다시 시도해주세요");
      console.error("예약에 실패했습니다.:", AxiosError);
    },
  });

  const handleResevation = () => {
    if (selectedTime !== null) {
      const data = {
        scheduleId: selectedTime,
        headCount: counter,
      };
      resevationMutation.mutate(data);
    }
  };

  return (
    <div className="flex w-[384px] flex-col gap-4 rounded-md border border-gnGray300 bg-white p-6 tablet:w-[251px]">
      <div className="border-b border-gnGray300 pb-4 text-[28px] font-bold">
        ￦ {price.toLocaleString()} / 인
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold">날짜</p>
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
                <div className="flex flex-row flex-wrap gap-3">
                  {getAvailableTime &&
                    getAvailableTime.length > 0 &&
                    getAvailableTime[0].times.map((time) => (
                      <button
                        key={time.id}
                        onClick={() => handleTimeSelect(time.id)}
                        className={`whitespace-nowrap rounded-md border border-[#112111] px-3 py-2.5 text-base font-medium
                          ${selectedTime === time.id ? "bg-[#112211] text-white" : ""}`}
                      >
                        {time.startTime} ~ {time.endTime}
                      </button>
                    ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex w-[120px] flex-col gap-2">
                <p className="text-xl font-bold">참여 인원 수</p>
                <div className="flex flex-row items-center justify-center gap-2 rounded-md border border-[#CDD0DC]">
                  <button
                    disabled={counter <= 1}
                    onClick={() => setCounter(counter - 1)}
                  >
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
            <button
              className={`w-full rounded border bg-[#112211] px-10 py-2 text-base font-bold text-white ${selectedTime === null ? "bg-gnGray600 text-white" : ""}`}
              disabled={selectedTime === null}
              onClick={handleResevation}
            >
              예약하기
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-between border-t border-gnGray300 pt-4 text-xl font-bold">
          <p>총 합계</p>
          <div>￦ {(price * counter).toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default ReservationBox;
