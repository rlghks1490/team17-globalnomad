import ActivityInfo from "./ActivityInfo";
import ActivityOverview from "./ActivityOverview";
import ReservationBox from "./ReservationBox";
import { useQuery } from "@tanstack/react-query";
import { getDatas } from "@/apis/activityDetails/activityDetails";
import { DataType } from "@/apis/activityDetails/activityDetails.type";
import { useModal } from "@/hooks/useModal";
import CommonModal from "../Modal/CommonModal";
import ModalAlert from "../Modal/ModalAlert";
import ModalReview from "../Modal/ModalReview";

const ActivityContent = () => {
  const { data } = useQuery<DataType>({
    queryKey: ["datas"],
    queryFn: getDatas,
  });

  const { isOpenModal, handleModalOpen, handleModalClose } = useModal();

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
            <ReservationBox price={data.price} schedule={data.schedules} />
          </div>
          <button onClick={handleModalOpen}>모달 테스트</button>
          {isOpenModal && (
            <ModalAlert
              isOpenModal={isOpenModal}
              message={data.description}
              onClose={handleModalClose}
            />
          )}
          {/* {isOpenModal && (
            <ModalReview isOpenModal={isOpenModal} onClose={handleModalClose} />
          )} */}
        </>
      )}
    </div>
  );
};

export default ActivityContent;
