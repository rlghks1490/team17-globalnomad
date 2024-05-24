import React from "react";

const LoginHeaderDropdown = () => {
  return (
    <div>
      <li className="dropdown  group relative  cursor-pointer px-4 text-base font-bold uppercase tracking-wide text-purple-500 hover:text-purple-700">
        <a>Dropdown</a>
        <div className="dropdown-menu absolute hidden h-auto group-hover:block">
          <ul className="top-0 w-48 bg-white px-6 py-8 shadow">
            <li className="py-1">
              <a className="block cursor-pointer text-base font-bold uppercase text-purple-500 hover:text-purple-700">
                로그아웃
              </a>
            </li>
            <li className="py-1">
              <a className="block cursor-pointer text-base font-bold uppercase text-purple-500 hover:text-purple-700">
                마이페이지
              </a>
            </li>
          </ul>
        </div>
      </li>
    </div>
  );
};

export default LoginHeaderDropdown;
