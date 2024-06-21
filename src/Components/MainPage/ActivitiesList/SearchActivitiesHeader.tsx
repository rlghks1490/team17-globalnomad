interface SearchActivitiesHeaderProps {
  search?: string;
  searchTotalCount?: number;
}

const SearchActivitiesHeader = ({
  search,
  searchTotalCount,
}: SearchActivitiesHeaderProps) => {
  return (
    <div className="flex flex-col items-start justify-center gap-[1.2rem] pt-[33rem]">
      <h2 className="flex w-full items-center justify-between text-[2.3rem] font-bold leading-normal text-black">
        <span className="font-bold">{search}</span>
        <span className="font-normal">(으)로 검색한 결과입니다.</span>
      </h2>
      <span className="text-[1rem] font-normal leading-normal text-black">
        총 {searchTotalCount}개의 결과
      </span>
    </div>
  );
};

export default SearchActivitiesHeader;
