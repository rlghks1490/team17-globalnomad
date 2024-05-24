interface FilterDropdownProps {
  dropdownMenuList: { text: string; handleClick: () => void }[];
}

const FilterDropdown = ({ dropdownMenuList }: FilterDropdownProps) => {
  return (
    <div className="absolute right-0 top-24 w-full md:top-20">
      {dropdownMenuList.map((dropdownMenu) => (
        <button
          key={dropdownMenu.text}
          onClick={dropdownMenu.handleClick}
          className="flex w-full justify-center border-t border-gray-300 bg-white py-6 text-sm text-gnGray600 first:rounded-t-lg last:rounded-b-lg md:py-4"
        >
          {dropdownMenu.text}
        </button>
      ))}
    </div>
  );
};

export default FilterDropdown;
