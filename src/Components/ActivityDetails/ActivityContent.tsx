import { privateDecrypt } from "crypto";
import ActivityInfo from "./ActivityInfo"
import ActivityOverview from "./ActivityOverview";
import ReservationBox from "./ReservationBox";
import { useQuery } from "@tanstack/react-query";
import { getDatas } from "@/apis/activityDetails/activityDetails";


const ActivityContent = () => {

  const result = useQuery({queryKey: ['datas'], queryFn: getDatas });
  console.log(result);
  console.log(result.data.id);

  return (
    <div className="flex flex-col items-center">
      <ActivityOverview />
      <div className="flex items-center gap-6">
        <ActivityInfo />
        <ReservationBox />
      </div>
    </div>
  )
}

export default ActivityContent