import ReservationList from "@/Components/Common/ReservationList";
import ProfileModify from "@/Components/ProfileModify/ProfileModify";
import { getMyReservations } from "@/apis/myReservation/myReservation";
import MyPageLayout from "@/layouts/MyPageLayour";
import {
  QueryClient,
  dehydrate,
  keepPreviousData,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useState } from "react";

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   const queryClient = new QueryClient();
//   setContext(context);

//   await queryClient.prefetchInfiniteQuery({
//     queryKey: ['ReservationAll'],
//     queryFn: ({ pageParam }) => {
//       const status = null;
//       return getMyReservations({ size: 6, status, cursorId: pageParam });
//     },
//     initialPageParam: 0,
//   });

//   return { props: { dehydratedState: dehydrate(queryClient) } };
// };

function Reservations() {
  const [viewStatue, setViewStatue] = useState(null);

  const { isFetching, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["MyReservations"],
    queryFn: ({ pageParam }) => {
      const status = viewStatue === "" ? null : viewStatue;
      return getMyReservations({ size: 6, status, cursorId: pageParam });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.data.cursorId,
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page.data.reservations),
      pageParams: data?.pageParams,
    }),
  });

  const reservationData = data?.pages;
  console.log(reservationData);
  return (
    <div>
      <div>
        <div>
          <h2 className="mb-6 text-3xl font-bold leading-normal">예약 내역</h2>
        </div>
        <div className="w-reservationBoxWidth bg-gnGray100">
          {reservationData?.map((reservation) => (
            <ReservationList key={reservation.id} data={reservation} />
          ))}
        </div>
        <Link href="/test/activity">activity 이동</Link>
      </div>
    </div>
  );
}

export default Reservations;
