import NoReservationList from "@/Components/MyReservation/NoReservationList";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import { getMyActivities } from "@/apis/myActivities/myActivites";
import MyActivitiesList from "@/Components/MyActivities/MyActivitiesList";
import MobileDropDown from "@/Components/MyPage/MobileDropDown";

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
          <div className="flex">
            <h2 className="mb-6 text-3xl font-bold leading-normal">
              내 체험 관리
            </h2>
            <MobileDropDown />
          </div>
          <button className="h-12 w-activityButton rounded border bg-gnLightBlack text-white">
            체험 등록하기
          </button>
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
