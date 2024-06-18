// pages/my-page/reservations.tsx
import ReservationList from "@/Components/MyReservation/ReservationList";
import NoReservationList from "@/Components/MyReservation/NoReservationList";
import ReservationFilter from "@/Components/MyReservation/ReservationFilter";
import { getMyReservations } from "@/apis/myReservation/myReservation";
import { ReservationStatus } from "@/apis/myReservation/myReservation.type";
import {
  useInfiniteQuery,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { GetServerSideProps } from "next";

const Reservations = () => {
  const [viewStatus, setViewStatus] = useState<ReservationStatus>("all");

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["MyReservations", viewStatus],
    queryFn: async ({ pageParam = 0 }) => {
      const status = viewStatus === "all" ? null : viewStatus;
      return await getMyReservations({ size: 6, status, cursorId: pageParam });
    },
    getNextPageParam: (lastPage) => lastPage.data.cursorId ?? false,
    initialPageParam: 0,
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
        <div className="bg-gnGray100">
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
};

export default Reservations;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["MyReservations", null],
    queryFn: async ({ pageParam = 0 }) =>
      await getMyReservations({ size: 6, status: null, cursorId: pageParam }),
    initialPageParam: 0,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
