import { Reservation } from "@/apis/myReservation/myReservation.type";
import Image from "next/image";
import React from "react";

interface ReservationListProps {
  data: Reservation;
}

const ReservationList = ({ data }: ReservationListProps) => {
  return (
    <div className="shadow-reservationBox h-reservationBoxHeight mb-6 flex w-full shrink-0 gap-6 rounded-3xl">
      <div>
        <Image
          src={data.activity.bannerImageUrl}
          width={204}
          height={204}
          alt="내 예약내역 배너이미지"
          priority={true}
          className="rounded-reservationRadius h-full"
        />
      </div>
      <div className="flex flex-col justify-between ">
        <div>
          <p>{data.status}</p>
          <h1 className="text-xl font-bold leading-6">{data.activity.title}</h1>
          <p className="text-lg font-normal leading-6">
            {data.date} · {data.startTime} ~ {data.endTime} · {data.headCount}명
          </p>
        </div>
        <div>
          <p className="text-2xl font-medium leading-normal">
            ₩{data.totalPrice}
          </p>
          {data.status === "pending" && <button>예약취소</button>}
          {data.status === "completed" && <button>후기작성</button>}
        </div>
      </div>
    </div>
  );
};

export default ReservationList;
