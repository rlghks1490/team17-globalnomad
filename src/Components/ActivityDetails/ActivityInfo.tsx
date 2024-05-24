import ActivityDescription from "./ActivityDescription";
import ActivityMap from "./ActivityMap";
import KakaoMap from "./KakaoMap";


const ActivityInfo = () => {
  return (
    <div className="w-[790px] flex flex-col py-10 gap-10 border-y border-[#112211] border-opacity-25">
      <div className="border-b border-[#112211] border-opacity-25 pb-10">
        <ActivityDescription />
      </div>
      <div className="w-full h-[400px]">
        {/* <ActivityMap /> */}
        <KakaoMap/>
      </div>
    </div>
  )
};

export default ActivityInfo;
