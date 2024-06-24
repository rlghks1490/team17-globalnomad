interface FilterDropdownProps {
  dropdownMenuList: { text: string; handleClick: () => void }[];
}

const FilterDropdown = ({ dropdownMenuList }: FilterDropdownProps) => {
  return (
    <div className="relative w-fit min-w-[8.13rem]">
      {dropdownMenuList.map((dropdownMenu) => (
        <button
          key={dropdownMenu.text}
          onClick={dropdownMenu.handleClick}
          className="flex h-[3.31rem] w-full shrink-0 items-end justify-between whitespace-nowrap rounded-[0.94rem] border-solid border-gnDarkGreen bg-white px-[1.25rem] py-[1rem] text-[1.13rem] font-medium text-gnDarkGreen hover:text-gnGray200 mobile:flex mobile:h-[2.56rem] mobile:items-center mobile:justify-between mobile:px-[1.25rem] mobile:py-[0.63rem] mobile:text-[0.88rem]"
        >
          {dropdownMenu.text}
        </button>
      ))}
    </div>
  );
};

export default FilterDropdown;
