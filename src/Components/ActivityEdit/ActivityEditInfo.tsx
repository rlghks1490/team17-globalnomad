import { useState } from "react";

interface ActivityEditInfoProps {
  title: string;
  category: string;
  description: string;
  price: number;
  address: string;
  handleFormData: (name: string, value: string | number) => void;
}

const ActivityEditInfo = ({
  title,
  category,
  description,
  price,
  address,
  handleFormData,
}: ActivityEditInfoProps) => {
  const [selectedCategory, setSelectedCategory] = useState("카테고리");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    handleFormData("category", e.target.value);
  };

  return (
    <div className="flex flex-col gap-6">
      <input
        className="rounded border border-gnGray700 bg-white px-4 py-[15px] text-base font-normal"
        defaultValue={title}
        placeholder="제목"
        onBlur={(e) => handleFormData("title", e.target.value)}
      />
      <select
        className="rounded border border-gnGray700 bg-white px-4 py-[15px] text-base font-normal"
        defaultValue={category}
        onChange={handleCategoryChange}
      >
        <option disabled>카테고리</option>
        <option value={"문화 · 예술"}>문화 · 예술</option>
        <option value={"식음료"}>식음료</option>
        <option value={"스포츠"}>스포츠</option>
        <option value={"투어"}>투어</option>
        <option value={"관광"}>관광</option>
        <option value={"웰빙"}>웰빙</option>
      </select>
      <textarea
        className="h-[346px] resize-none rounded border border-gnGray700 bg-white p-4 text-base font-normal"
        defaultValue={description}
        placeholder="설명"
        onBlur={(e) => handleFormData("description", e.target.value)}
      />
      <div className="flex flex-col gap-4">
        <label className="text-2xl font-bold text-gnDarkBlack">가격</label>
        <input
          className="rounded border border-gnGray700 bg-white px-4 py-[15px] text-base font-normal"
          defaultValue={price}
          placeholder="가격"
          type="number"
          onBlur={(e) => handleFormData("price", parseInt(e.target.value))}
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-2xl font-bold text-gnDarkBlack">주소</label>
        <input
          className="rounded border border-gnGray700 bg-white px-4 py-[15px] text-base font-normal"
          defaultValue={address}
          placeholder="주소"
          onBlur={(e) => handleFormData("address", e.target.value)}
        />
      </div>
    </div>
  );
};

export default ActivityEditInfo;
