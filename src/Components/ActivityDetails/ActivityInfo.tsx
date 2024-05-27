import ActivityDescription from "./ActivityDescription";
import ActivityMap from "./ActivityMap";
import KakaoMap from "./KakaoMap";
import KakaoMap2 from "./KakaoMap2";

interface ActivityInfoProps {
  description: string;
  address: string;
}

const ActivityInfo = ({ description, address } : ActivityInfoProps) => {
  return (
    <div className="w-[790px] flex flex-col mb-10 pt-10 pb-20 gap-10 border-y border-[#112211] border-opacity-25">
      <div className="border-b border-[#112211] border-opacity-25 pb-10">
        <ActivityDescription description={description}/>
      </div>
      <div className="w-full h-[400px]">
        {/* <ActivityMap /> */}
        {/* <KakaoMap/> */}
        <KakaoMap2/>
      </div>
    </div>
  )
};

export default ActivityInfo;
