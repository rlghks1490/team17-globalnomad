import ActivitySummary from "./ActivitySummary";
import KebabOptions from "./KebabOptions";
import Kebab from "./kebab";

const ActivityOverviewHeader = () => {
  return (
    <div className="flex justify-between items-center my-10">
      <ActivitySummary />
      <Kebab />
      <KebabOptions />
    </div>
  )
}

export default ActivityOverviewHeader;