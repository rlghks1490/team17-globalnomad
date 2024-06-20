import Image from "next/image";
import Link from "next/link";
import ArrowDown from "../../../public/icons/ArrowDown.svg";
import React, { useState } from "react";

const linkList = [
  { href: "/my-page", label: "내 정보" },
  { href: "/my-page/reservations", label: "예약 내역" },
  { href: "/my-page/activities", label: "내 체험 관리" },
  { href: "/my-page/activities", label: "예약 현황" },
];

const MobileDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="deskTop:hidden flex items-center tablet:hidden">
      <div>
        <button onClick={handleDropdown} type="button">
          <Image
            alt="필터 화살표 이미지"
            src={ArrowDown}
            width={22}
            height={22}
          />
        </button>
      </div>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-65 transition-opacity duration-500 ${
          !isOpen && "pointer-events-none opacity-0"
        }`}
        onClick={handleClose} // 검은 배경을 클릭했을 때 드롭다운을 닫음
      >
        <div
          className={`fixed bottom-0 left-0 z-20 flex w-full flex-col items-center justify-start border border-gnGray300 bg-white shadow-reservationBox transition-transform duration-300 ease-in-out ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-full opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()} // 드롭다운 내부를 클릭해도 배경 클릭 이벤트가 트리거되지 않도록 함
        >
          {linkList.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block px-4 py-2 text-xs font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileDropDown;
