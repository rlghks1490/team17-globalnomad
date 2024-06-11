import { useState } from "react";
import ActivityRegistInfo from "./ActicityRegistInfo";
import ActivityRegistImageUploader from "./ActivityRegistImageUploader";
import ActivityRegistSchedule from "./ActivityRegistSchedule";

interface Schedule {
  date: string;
  startTime: string;
  endTime: string;
}

interface forDataType {
  title: string;
  category: string;
  description: string;
  price: number;
  address: string;
  schedules: Schedule[];
  bannerImageUrl: string;
  subImageUrls: string[];
}

const AcitivyRegistForm = () => {
  const [formData, setFormData] = useState<forDataType>({
    title: "",
    category: "",
    description: "",
    price: 0,
    address: "",
    schedules: [],
    bannerImageUrl: "",
    subImageUrls: [],
  });

  const handleAddInfo = (name: string, value: string | number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddSchedule = (newSchedules: Schedule[]) => {
    setFormData({
      ...formData,
      schedules: [...formData.schedules, ...newSchedules],
    });
  };

  const handleCancelAddedSchedules = (newSchedules: Schedule[]) => {
    setFormData({
      ...formData,
      schedules: [...newSchedules],
    });
  };

  return (
    <div className="flex w-[792px] flex-col gap-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">내 체험 등록</h1>
        <button className="rounded bg-gnLightBlack px-4 py-2 text-base font-bold text-white">
          등록하기
        </button>
      </div>
      <ActivityRegistInfo handleFormData={handleAddInfo} />
      <ActivityRegistSchedule
        handleAddSchedule={handleAddSchedule}
        handleCancelAddedSchedules={handleCancelAddedSchedules}
      />
      <ActivityRegistImageUploader />
    </div>
  );
};

export default AcitivyRegistForm;
