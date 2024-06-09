import ReservationList from "@/Components/Common/ReservationList";
import NoReservationList from "@/Components/MyReservation/NoReservationList";
import ReservationFilter from "@/Components/MyReservation/ReservationFilter";
import { getMyReservations } from "@/apis/myReservation/myReservation";
import { ReservationStatus } from "@/apis/myReservation/myReservation.type";
import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";

function Reservations() {
  const [viewStatue, setViewStatue] = useState<ReservationStatus>("all");

  const { isFetching, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["MyReservations"],
    queryFn: ({ pageParam }) => {
      const status = viewStatue === "all" ? null : viewStatue;
      return getMyReservations({ size: 6, status, cursorId: pageParam });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.data.cursorId,
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page.data.reservations),
      pageParams: data?.pageParams,
    }),
  });

  useEffect(() => {});

  const reservationData = data?.pages || [];

  return (
    <div>
      <div>
        <div>
          <h2 className="mb-6 text-3xl font-bold leading-normal">예약 내역</h2>
          <ReservationFilter value={viewStatue} setValue={setViewStatue} />
        </div>
        <div className="w-reservationBoxWidth bg-gnGray100">
          {reservationData.length > 0 ? (
            reservationData?.map((reservation) => (
              <ReservationList key={reservation.id} data={reservation} />
            ))
          ) : (
            <NoReservationList />
          )}
        </div>
        <Link href="/test/activity">activity 이동</Link>
      </div>
    </div>
  );
}

export default Reservations;
