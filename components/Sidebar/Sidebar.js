import Link from "next/link";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

const menus = [
  { id: 1, name: "Work", url: "/work" },
  { id: 2, name: "What we do", url: "/we-do" },
  { id: 3, name: "Blogs", url: "/blogs" },
  { id: 4, name: "Lets Connect", url: "/connect" },
];
export default function Sidebar({ sidebar, setSidebar }) {
  return (
    <aside
      className="fixed h-screen top-0 left-0 right-0
       bg-[#0000009c]
     w-screen z-30 flex justify-end"
    >
      <OutsideClickHandler onOutsideClick={() => setSidebar(false)}>
        <div className={`${sidebar ? "w-[300px]": 'w-0px'} transition-all bg-[#00588A] h-screen p-5 mr-[25px]`}>
          <div className="flex justify-end">
            <svg
              onClick={() => setSidebar(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 cursor-pointer p-2 text-white hover:text-[#243479]
               rounded-full hover:bg-white transition-all duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="">
            {menus.map((menu) => (
              <li key={menu.id} className="my-10">
                <Link href={menu.url}>
                  <a
                    className="font-semibold text-[20px]
                        leading-7 text-white rounded-md
                   px-4 py-3 w-full block hover:bg-[#0180bc2b] transition-all duration-200 "
                  >
                    {menu.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </OutsideClickHandler>
    </aside>
  );
}
