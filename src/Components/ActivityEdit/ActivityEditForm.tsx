import ActivityEditInfo from "./ActivityEditInfo";
import ActivityEditSchedule from "./ActivityEditSchedule";
import ActivityEditImageUploader from "./ActivityEditImageUploader";
import { useEffect, useState } from "react";
import { useActivitiesDetailCheck } from "@/service/activities/useActivitiesService";
import { ActivitiesDetailCheck } from "@/service/activities/activities.type";

interface newSchedule {
  date: string;
  startTime: string;
  endTime: string;
}

interface formDataType {
  title: string;
  category: string;
  description: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  subImageIdsToRemove: string[];
  subImageUrlsToAdd: string[];
  scheduleIdsToRemove: number[];
  schedulesToAdd: newSchedule[];
}

const ActivityEditForm = () => {
  const { data: details } = useActivitiesDetailCheck(915);

  const [formData, setFormData] = useState<formDataType>({
    title: "",
    category: "",
    description: "",
    price: 0,
    address: "",
    bannerImageUrl: "",
    subImageIdsToRemove: [],
    subImageUrlsToAdd: [],
    scheduleIdsToRemove: [],
    schedulesToAdd: [],
  });

  useEffect(() => {
    if (details) {
      setFormData({
        title: details.data.title || "",
        category: details.data.category || "",
        description: details.data.description || "",
        price: details.data.price || 0,
        address: details.data.address || "",
        bannerImageUrl: details.data.bannerImageUrl || "",
        subImageIdsToRemove: [],
        subImageUrlsToAdd: [],
        scheduleIdsToRemove: [],
        schedulesToAdd: [],
      });
    }
  }, [details]);

  // Info(title, category, description, price, address) 변경 시 formData에 적용하는 함수
  const handleInfoChange = (name: string, value: string | number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // 새로운 일정을 formData(schedulesToAdd)에 적용하는 함수
  const handleAddSchedule = (newSchedules: newSchedule[]) => {
    setFormData({
      ...formData,
      schedulesToAdd: [...formData.schedulesToAdd, ...newSchedules],
    });
  };

  // (등록되어 있는)기존의 일정 삭제시 formData(scheduleIdsToRemove)에 적용하는 함수
  const handleRemoveSchedule = (ids: number[]) => {
    setFormData({
      ...formData,
      scheduleIdsToRemove: [...formData.scheduleIdsToRemove, ...ids],
    });
  };

  // 새로운 일정들(schedulesToAdd)을 다시 제거할 때 formData에 적용하는 함수
  const handleSchedulesToAdd = (modifiedSchedules: newSchedule[]) => {
    setFormData({
      ...formData,
      schedulesToAdd: [...modifiedSchedules],
    });
  };

  // 새로운 이미지 추가
  const handleAddImage = () => {};

  console.log(formData);

  if (!details) return null;

  return (
    <div className="flex w-[792px] flex-col gap-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">내 체험 수정</h1>
        <button className="rounded bg-gnLightBlack px-4 py-2 text-base font-bold text-white">
          수정하기
        </button>
      </div>
      <ActivityEditInfo
        title={details.data.title}
        description={details.data.description}
        category={details.data.category}
        price={details.data.price}
        address={details.data.address}
        handleFormData={handleInfoChange}
      />
      <ActivityEditSchedule
        schedules={details.data.schedules}
        handleAddSchedule={handleAddSchedule}
        handleRemoveSchedule={handleRemoveSchedule}
        handleSchedulesToAdd={handleSchedulesToAdd}
      />
      <ActivityEditImageUploader bannerImageUrl={details.data.bannerImageUrl} />
    </div>
  );
};

export default ActivityEditForm;
