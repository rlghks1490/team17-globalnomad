import CardResource from "@/Components/MainPage/Common/CardResource";
import { GetActivitiesList } from "@/Components/MainPage/Types/Activities";
import SearchActivitiesHeader from "@/Components/MainPage/ActivitiesList/SearchActivitiesHeader";

interface ActivitiesListProps {
  category?: string;
  activities?: GetActivitiesList[];
  search?: string;
  searchTotalCount?: number;
}

const ActivitiesList = ({
  category = "전체",
  activities,
  search,
  searchTotalCount,
}: ActivitiesListProps) => {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-[2rem]">
      {search && searchTotalCount ? (
        <>
          <SearchActivitiesHeader
            search={search}
            searchTotalCount={searchTotalCount}
          />
          <ul className="grid-cols-custom-4 tablet:grid-cols-custom-3 mobile:grid-cols-custom-2 grid gap-x-[1.5rem] gap-y-[3rem] tablet:w-full tablet:gap-y-[2rem]">
            {activities?.map((activity, index) => (
              <li key={`${activity.id}-${activity.userId}-${index}`}>
                <CardResource activitiesData={activity} banner={false} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2 className="flex w-full items-center justify-between text-[2.3rem] font-bold leading-normal text-black">
            {category ? category : "🚀 전체 체험"}
          </h2>
          <ul className="grid-cols-custom-4 tablet:grid-cols-custom-3 mobile:grid-cols-custom-2 grid gap-x-[1.5rem] gap-y-[3rem] tablet:w-full tablet:gap-y-[2rem]">
            {activities?.map((activity, index) => (
              <li key={`${activity.id}-${activity.userId}-${index}`}>
                <CardResource activitiesData={activity} banner={false} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ActivitiesList;
