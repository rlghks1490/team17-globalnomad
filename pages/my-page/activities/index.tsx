import NoReservationList from "@/Components/MyReservation/NoReservationList";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import { getMyActivities } from "@/apis/myActivities/myActivites";
import MyActivitiesList from "@/Components/MyActivities/MyActivitiesList";
import Link from "next/link";
import MobileDropDown from "@/Components/MyPage/MobileDropDown";
import Head from "next/head";

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
    <>
      <Head>
        <title>GlobalNomad - 내 체험 관리</title>
      </Head>
      <div className="flex flex-col gap-6 mobile:gap-3">
        <div className="flex justify-between">
          <div className="flex">
            <h2 className="text-3xl font-bold">내 체험 관리</h2>
            <MobileDropDown />
          </div>
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
    </>
  );
}

export default Activities;
