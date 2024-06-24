interface ActivityRegistInfoProps {
  handleFormData: (name: string, value: string | number) => void;
}

const ActivityRegistInfo = ({ handleFormData }: ActivityRegistInfoProps) => {
  return (
    <div className="flex flex-col gap-6">
      <input
        className="rounded border border-gnGray700 bg-white px-4 py-[15px] text-base font-normal"
        placeholder="제목"
        onBlur={(e) => handleFormData("title", e.target.value)}
      />
      <select
        className="rounded border border-gnGray700 bg-white px-4 py-[15px] text-base font-normal"
        onBlur={(e) => handleFormData("category", e.target.value)}
      >
        <option selected disabled>
          카테고리
        </option>
        <option>문화·예술</option>
        <option>식음료</option>
        <option>스포츠</option>
        <option>투어</option>
        <option>관광</option>
        <option>웰빙</option>
      </select>
      <textarea
        className="h-[346px] resize-none rounded border border-gnGray700 bg-white p-4 text-base font-normal"
        placeholder="설명"
        onBlur={(e) => handleFormData("description", e.target.value)}
      />
      <div className="flex flex-col gap-4">
        <label className="text-2xl font-bold text-gnDarkBlack">가격</label>
        <input
          className="rounded border border-gnGray700 bg-white px-4 py-[15px] text-base font-normal"
          placeholder="가격"
          onBlur={(e) => handleFormData("price", parseInt(e.target.value))}
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-2xl font-bold text-gnDarkBlack">주소</label>
        <input
          className="rounded border border-gnGray700 bg-white px-4 py-[15px] text-base font-normal"
          placeholder="주소"
          onBlur={(e) => handleFormData("address", e.target.value)}
        />
      </div>
    </div>
  );
};

export default ActivityRegistInfo;
