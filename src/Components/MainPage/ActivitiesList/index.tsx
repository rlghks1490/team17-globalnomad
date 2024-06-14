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
    <div className="flex w-full flex-col items-center gap-8">
      {search && searchTotalCount ? (
        <>
          <SearchActivitiesHeader
            search={search}
            searchTotalCount={searchTotalCount}
          />
          <ul className="grid grid-cols-4 gap-x-5 gap-y-12 sm:grid-cols-2 md:grid-cols-4 md:gap-y-8">
            {activities?.map((activity, index) => (
              <li key={`${activity.id}-${activity.userId}-${index}`}>
                <CardResource activitiesData={activity} banner={false} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2 className="flex w-full items-center justify-between text-3xl font-bold text-black">
            {category ? category : "🚀 전체 체험"}
          </h2>
          <ul className="grid grid-cols-4 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-4 md:gap-y-8">
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
