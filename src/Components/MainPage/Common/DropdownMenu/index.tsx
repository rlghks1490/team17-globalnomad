interface DropdownMenuProps {
  type?: "meatball" | "gnb";
  dropdownMenuList: { text: string; handleClick: () => void }[];
}

const DropdownMenu = ({ type, dropdownMenuList }: DropdownMenuProps) => {
  return (
    <div
      className={`dropdown-menu ${type === "meatball" ? "top-12" : type === "gnb" ? "top-16" : "top-24"} absolute right-0 z-10 w-full`}
    >
      {dropdownMenuList.map((dropdownMenu) => (
        <button
          key={dropdownMenu.text}
          onClick={dropdownMenu.handleClick}
          className="flex w-full items-center justify-center gap-2 border border-t-0 border-gray-300 bg-white py-4 text-lg font-medium text-gray-800 first:border-t last:rounded-b-lg hover:bg-gray-300"
        >
          {dropdownMenu.text}
        </button>
      ))}
    </div>
  );
};

export default DropdownMenu;
