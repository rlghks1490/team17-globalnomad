import ActivityDescription from "./ActivityDescription";
import KakaoMap from "./KakaoMap";

interface ActivityInfoProps {
  description: string;
  address: string;
}

const ActivityInfo = ({ description, address }: ActivityInfoProps) => {
  return (
    <div className="mb-10 flex w-[790px] flex-col gap-10 border-y border-[#112211] border-opacity-25 pb-20 pt-10 tablet:w-[428px] mobile:w-[327px]">
      <div className="border-b border-[#112211] border-opacity-25 pb-10">
        <ActivityDescription description={description} />
      </div>
      <div className="h-[400px] w-full tablet:h-[276px] mobile:h-[450px]">
        <KakaoMap address={address} />
      </div>
    </div>
  );
};

export default ActivityInfo;
