import Image from "next/image";
import React, { useState } from "react";
import { Activities } from "@/apis/myActivities/myActivities.type";
import StarIcon from "../../../public/icons/Star.svg";
import Kebab from "../ActivityDetails/Kebab";

interface ReservationListProps {
  data: Activities;
}

const MyActivitiesList = ({ data }: ReservationListProps) => {
  const bannerImage = data.bannerImageUrl;

  return (
    <div className="shrink- 0 tablet: mb-6 flex h-reservationBoxHeight w-reservationBoxWidth gap-6 rounded-3xl shadow-reservationBox">
      <div className="relative h-reservationImage w-reservationImage">
        <Image
          src={bannerImage}
          alt="내 예약내역 배너이미지"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
          className="relative rounded-reservationRadius"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <div className="w-myActivitiesStar h-myActivitiesStar">
            <Image
              src={StarIcon}
              width={19}
              height={19}
              sizes="100vw"
              alt="별점 아이콘"
              className="h-full w-full"
              priority
            />
          </div>
          <div>
            {data.rating} ({data.reviewCount})
          </div>
        </div>
        <div className="gap-activitiesContentGap flex flex-col  ">
          <div>
            <h1 className=" mt-1.5 text-xl font-bold leading-6">
              {data.title}
            </h1>
          </div>
          <div className="flex justify-between">
            <div className="flex w-reservationButtonWidth justify-between">
              <p className="text-2xl font-medium leading-normal">
                ₩{data.price.toLocaleString("ko-KR")}
              </p>
            </div>
            <div className="mr-6 ">
              <Kebab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyActivitiesList;
