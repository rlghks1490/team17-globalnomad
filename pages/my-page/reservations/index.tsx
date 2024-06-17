import ReservationList from "@/Components/MyReservation/ReservationList";
import NoReservationList from "@/Components/MyReservation/NoReservationList";
import ReservationFilter from "@/Components/MyReservation/ReservationFilter";
import { getMyReservations } from "@/apis/myReservation/myReservation";
import { ReservationStatus } from "@/apis/myReservation/myReservation.type";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

function Reservations() {
  const [viewStatus, setViewStatus] = useState<ReservationStatus>("all");

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["MyReservations", viewStatus],
    queryFn: ({ pageParam }) => {
      const status = viewStatus === "all" ? null : viewStatus;
      return getMyReservations({ size: 6, status, cursorId: pageParam });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.data.cursorId,
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page.data.reservations),
      pageParams: data?.pageParams,
    }),
  });

  const reservationData = data?.pages || [];

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="mb-6 text-3xl font-bold leading-normal">예약 내역</h2>
        <ReservationFilter value={viewStatus} setValue={setViewStatus} />
      </div>
      <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
        <div className=" bg-gnGray100 ">
          {reservationData.length > 0 ? (
            reservationData?.map((reservation) => (
              <ReservationList key={reservation.id} data={reservation} />
            ))
          ) : (
            <NoReservationList />
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Reservations;
