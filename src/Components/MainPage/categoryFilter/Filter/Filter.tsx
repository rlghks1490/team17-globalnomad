import { ICON } from "../../constants/importImages";
import { useToggleButton } from "@/hooks/useToggleButton";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import FilterDropdown from "./FilterDropdown";

interface FilterProps {
  type: "price";
  setFilterState: Dispatch<SetStateAction<string>>;
}

interface FilterTypeProps {
  [type: string]: {
    text: string;
    list: {
      text: string;
      handleClick: () => void;
    }[];
  };
}

const Filter = ({ type, setFilterState }: FilterProps) => {
  const { isToggle: isOpen, handleToggleClick: isOpentoggle } =
    useToggleButton();

  const handleDropdownOptionClick = (option: string) => {
    setFilterState(option);
    isOpentoggle();
  };

  const FilterType: FilterTypeProps = {
    price: {
      text: "정렬",
      list: [
        {
          text: "가격이 낮은 순",
          handleClick: () => handleDropdownOptionClick("price_asc"),
        },
        {
          text: "가격이 높은 순",
          handleClick: () => handleDropdownOptionClick("price_desc"),
        },
      ],
    },
  };

  return (
    <div className="relative w-32 sm:w-28 md:w-24">
      <button
        className={`flex h-20 w-full items-end justify-between rounded-lg border border-gnDarkGreen bg-white px-8 py-6 ${isOpen ? "open" : ""}`}
        onClick={isOpentoggle}
      >
        <span>{FilterType[type].text}</span>
        <Image
          src={ICON.filter.default.src}
          alt={ICON.filter.default.alt}
          height={22}
          width={22}
        />
      </button>
      {isOpen && <FilterDropdown dropdownMenuList={FilterType[type].list} />}
    </div>
  );
};

export default Filter;
