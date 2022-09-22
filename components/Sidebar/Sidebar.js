import Link from "next/link";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

const menus = [
  { id: 1, name: "Work", url: "/work" },
  { id: 2, name: "What we do", url: "/we-do" },
  { id: 4, name: "Lets Connect", url: "/connect" },
];
const moreMenu = [
  { id: 1, name: "About Us", url: "/about-us" },
  { id: 2, name: "Work with us", url: "/work-with-us" },
  { id: 3, name: "Blogs", url: "/blogs" },
];

export default function Sidebar({ sidebar, setSidebar }) {
  return (
    <aside
      className="fixed h-screen top-0 left-0 right-0      
     w- z-30 flex justify-end"
    >
      <OutsideClickHandler onOutsideClick={() => setSidebar(false)}>
        <div
          className={`w-screen md:w-[538px] bg-[#00588AB2] backdrop-blur-[27.1828px]
           h-screen px-11 md:px-[60px] pb-6 pt-6 md:pt-[57px] relative`}
        >
          <div className="flex justify-end">
            <svg
              onClick={() => setSidebar(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 cursor-pointer  text-white hover:text-[#243479]
               rounded-full hover:bg-white transition-all duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className="">
            <ul className="">
              {menus.map((menu) => (
                <li key={menu.id} className="mb-[70px]">
                  <Link href={menu.url}>
                    <a
                      className="font-semibold text-[24px]
                    leading-7 text-white rounded-md px-4 py-3 "
                    >
                      {menu.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="border border-[#F2F2F2]" />

            <ul className="">
              {moreMenu.map((menu) => (
                <li key={menu.id} className="my-[40px]">
                  <Link href={menu.url}>
                    <a
                      className="font-semibold text-[16px]
                        leading-5 text-white rounded-md
                   px-4 py-3"
                    >
                      {menu.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="fixed bottom-0 w-full">
            <div className="flex justify-between w-full relative">
              <img src="/assets/sidebar-send.svg" alt="bottom send" />
              <img
                className="top-2/4 left-[30%] absolute"
                src="/assets/sidebar-send.svg"
                alt="bottom send"
              />
              <img
                className="absolute right-[30%] w-16 bottom-0"
                src="/assets/sidebar-send.svg"
                alt="bottom send"
              />
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </aside>
  );
}
