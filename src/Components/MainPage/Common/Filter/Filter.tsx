import { ICON } from "@/Components/MainPage/Constants/ImportImages";
import { useToggleButton } from "@/Components/MainPage/Hooks/useToggleButton";
import { useOutsideClick } from "@/Components/MainPage/Hooks/useOutsideClick";
import Image from "next/image";
import { Dispatch, SetStateAction, useRef } from "react";
import DropdownMenu from "@/Components/MainPage/Common/DropdownMenu";

interface FilterProps {
  type: "price" | "filter";
  filterState: string;
  setFilterState: Dispatch<SetStateAction<string>>;
}

interface FilterTypeProps {
  [type: string]: {
    text?: string;
    list: {
      text: string;
      handleClick: () => void;
    }[];
  };
}

const Filter = ({ type, filterState, setFilterState }: FilterProps) => {
  const { isToggle: isOpen, handleToggleClick: isOpenToggle } =
    useToggleButton();
  const ref = useRef<HTMLButtonElement>(null);

  useOutsideClick(ref, isOpen, isOpenToggle);

  const handleDropdownOptionClick = (option: string) => {
    setFilterState(option);
    isOpenToggle();
  };

  const FilterType: FilterTypeProps = {
    price: {
      text: {
        "": "정렬",
        latest: "최신순",
        price_asc: "낮은 가격순",
        price_desc: "높은 가격순",
      }[filterState],
      list: [
        {
          text: "최신순",
          handleClick: () => handleDropdownOptionClick("latest"),
        },
        {
          text: "낮은 가격순",
          handleClick: () => handleDropdownOptionClick("price_asc"),
        },
        {
          text: "높은 가격순",
          handleClick: () => handleDropdownOptionClick("price_desc"),
        },
      ],
    },
  };

  return (
    <div className="relative w-fit min-w-[8.13rem]">
      <button
        className={`flex w-full cursor-pointer items-end justify-between rounded-[1.5rem] border border-gnDarkGreen bg-white px-[1.88rem] py-[1rem] text-[1.8rem] text-lg font-medium text-gnDarkGreen tablet:px-[1.2rem] tablet:px-[1.2rem] tablet:py-[0.7rem] tablet:text-[1.2rem] mobile:px-[1rem] mobile:py-[0.5rem] mobile:text-[1rem] ${isOpen ? "bg-gray-200" : "hover:bg-gray-100"}`}
        onClick={isOpenToggle}
        ref={ref}
      >
        <span>{FilterType[type].text}</span>
        <Image
          src={ICON.filter.default.src}
          alt={ICON.filter.default.alt}
          height={22}
          width={22}
          className={isOpen ? "rotate-180 transform" : ""}
        />
      </button>
      {isOpen && <DropdownMenu dropdownMenuList={FilterType[type].list} />}
    </div>
  );
};

export default Filter;
