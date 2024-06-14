interface SearchActivitiesHeaderProps {
  search?: string;
  searchTotalCount?: number;
}

const SearchActivitiesHeader = ({
  search,
  searchTotalCount,
}: SearchActivitiesHeaderProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <h2 className="flex w-full flex-col items-center gap-4">
        <span className="text-36 font-bold">{search}</span>
        <span>(으)로 검색한 결과입니다.</span>
      </h2>
      <span className="text-16 font-normal">
        총 {searchTotalCount}개의 결과
      </span>
    </div>
  );
};

export default SearchActivitiesHeader;
