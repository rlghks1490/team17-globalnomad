import ActivityDescription from "./ActivityDescription";
import ActivityMap from "./ActivityMap";
import KakaoMap from "./KakaoMap";
import KakaoMap2 from "./KakaoMap2";

interface ActivityInfoProps {
  description: string;
  address: string;
}

const ActivityInfo = ({ description, address }: ActivityInfoProps) => {
  return (
    <div className="mb-10 flex w-[790px] flex-col gap-10 border-y border-[#112211] border-opacity-25 pb-20 pt-10">
      <div className="border-b border-[#112211] border-opacity-25 pb-10">
        <ActivityDescription description={description} />
      </div>
      <div className="h-[400px] w-full">
        {/* <ActivityMap /> */}
        {/* <KakaoMap/> */}
        <KakaoMap2 address={address} />
      </div>
    </div>
  );
};

export default ActivityInfo;
