import ReservationList from "@/Components/MyReservation/ReservationList";
import NoReservationList from "@/Components/MyReservation/NoReservationList";
import ReservationFilter from "@/Components/MyReservation/ReservationFilter";
import { getMyReservations } from "@/apis/myReservation/myReservation";
import { ReservationStatus } from "@/apis/myReservation/myReservation.type";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { getMyActivities } from "@/apis/myActivities/myActivites";
import MyActivitiesList from "@/Components/MyActivities/MyActivitiesList";
import Link from "next/link";

function Activities() {
  const { isFetching, data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["MyActivities"],
    queryFn: ({ pageParam }) => {
      return getMyActivities({ size: 6, cursorId: pageParam });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.data.cursorId,
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page.data.activities),
      pageParams: data?.pageParams,
    }),
  });

  const activityData = data?.pages || [];
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <h2 className="mb-6 text-3xl font-bold leading-normal">
            내 체험 관리
          </h2>
          <Link href="activities/register">
            <button className="h-12 w-activityButton rounded border bg-gnLightBlack text-white">
              체험 등록하기
            </button>
          </Link>
        </div>
        <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
          <div className=" bg-gnGray100">
            {activityData.length > 0 ? (
              activityData?.map((activity) => (
                <MyActivitiesList key={activity.id} data={activity} />
              ))
            ) : (
              <NoReservationList />
            )}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Activities;
