import Image from "next/image";
import React, { useState } from "react";
import { Activities } from "@/apis/myActivities/myActivities.type";
import StarIcon from "../../../public/icons/Star.svg";
import Kebab from "../ActivityDetails/Kebab";
import Link from "next/link";

interface ReservationListProps {
  data: Activities;
}

const MyActivitiesList = ({ data }: ReservationListProps) => {
  const bannerImage = data.bannerImageUrl;
  const link = `/activity-details/${data.id}`;
  return (
    <div className="mb-6 flex h-reservationBoxHeight w-reservationBoxWidth shrink-0 gap-6 rounded-3xl shadow-reservationBox tablet:h-TabletCardList tablet:w-reservationTablet mobile:h-32 mobile:w-width344px mobile:gap-2">
      <div className="relative h-reservationImage w-reservationImage tablet:h-reservationImageTablet tablet:w-reservationImageTablet mobile:h-32 mobile:w-32">
        <Image
          src={bannerImage}
          alt="내 예약내역 배너이미지"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
          className="relative rounded-reservationRadius"
          priority
        />
      </div>
      <div className="my-6 flex flex-col tablet:my-3 tablet:w-60 mobile:my-3 mobile:w-48">
        <div className="flex items-center gap-1.5">
          <div className="h-myActivitiesStar w-myActivitiesStar mobile:h-4 mobile:w-4">
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
          <div className="text-base mobile:text-sm">
            {data.rating} ({data.reviewCount})
          </div>
        </div>
        <div className="flex flex-col gap-activitiesContentGap tablet:gap-10 mobile:gap-gap30px ">
          <div>
            <Link
              href={link}
              className="mt-1.5 hover:text-indigo-500 active:text-violet-700  mobile:mt-0"
            >
              <p className="truncate text-xl font-bold leading-6 tablet:text-lg mobile:text-sm">
                {data.title}
              </p>
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="flex w-reservationButtonWidth justify-between tablet:h-10 tablet:w-width245px mobile:h-8 mobile:w-width194px">
              <p className="text-2xl font-medium leading-normal tablet:text-xl mobile:text-base">
                ₩{data.price.toLocaleString("ko-KR")}
              </p>
            </div>
            <div className="mr-6 tablet:mr-4 mobile:mr-0 mobile:h-8 mobile:w-8">
              <Kebab activityId={data.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyActivitiesList;
