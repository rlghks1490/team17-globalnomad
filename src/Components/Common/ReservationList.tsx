import { Reservation } from "@/apis/myReservation/myReservation.type";
import Image from "next/image";
import React from "react";
import ReservationStatue from "./ReservationStatus";

interface ReservationListProps {
  data: Reservation;
}

const ReservationList = ({ data }: ReservationListProps) => {
  return (
    <div className="mb-6 flex h-reservationBoxHeight w-full shrink-0 gap-6 rounded-3xl shadow-reservationBox">
      <div>
        <Image
          src={data.activity.bannerImageUrl}
          width={204}
          height={204}
          alt="내 예약내역 배너이미지"
          priority={true}
          className="h-full rounded-reservationRadius"
        />
      </div>
      <div className="my-6 flex flex-col">
        <div>
          <ReservationStatue status={data.status} />
          <h1 className="mb-3 text-xl font-bold leading-6">
            {data.activity.title}
          </h1>
          <p className="mb-4 text-lg font-normal leading-6">
            {data.date} · {data.startTime} ~ {data.endTime} · {data.headCount}명
          </p>
        </div>
        <div className="flex w-reservationButtonWidth justify-between">
          <p className="text-2xl font-medium leading-normal">
            ₩{data.totalPrice}
          </p>
          {data.status === "pending" && (
            <button className="h-10 w-36 divide-solid rounded-md border border-black px-3 py-2 text-base font-semibold">
              예약취소
            </button>
          )}
          {data.status === "completed" && (
            <button className="h-10 w-36  rounded-md  bg-black px-3 py-2 text-base font-semibold text-white">
              후기작성
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationList;
