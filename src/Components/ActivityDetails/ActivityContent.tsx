import { privateDecrypt } from "crypto";
import ActivityInfo from "./ActivityInfo"
import ActivityOverview from "./ActivityOverview";
import ReservationBox from "./ReservationBox";
import { useQuery } from "@tanstack/react-query";
import { getDatas } from "@/apis/activityDetails/activityDetails";
import { DataType } from "@/apis/activityDetails/activityDetails.type";


const ActivityContent = () => {

  const { data } = useQuery<DataType>({queryKey: ['datas'], queryFn: getDatas });
  
  return (
    <div className="flex flex-col items-center">
      {data && (
        <>
          <ActivityOverview
            title={data.title}
            category={data.category}
            address={data.address}
            rating={data.rating}
            reviewCount={data.reviewCount}
            bannerImageUrl={data.bannerImageUrl}
            subImages={data.subImages}
          />
          <div className="flex items-center gap-6">
            <ActivityInfo 
              description={data.description}
              address={data.address}
            />
            <ReservationBox price={data.price} schedule={data.schedules}/>
          </div>
        </>
      )}
    </div>
  )
}

export default ActivityContent