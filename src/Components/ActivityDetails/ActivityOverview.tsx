import ActivityOverviewHeader from "./ActivityOverviewHeader";
import ActivityOverviewImages from "./ActivityOverviewImages";


const ActivityOverview = () => {
  return (
    <div className="flex flex-col w-[1200px] my-20">
    <ActivityOverviewHeader />
    <ActivityOverviewImages />
    </div>
  )
};

export default ActivityOverview;