import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MenuIcon } from "../../public/assets/Icon";
import Sidebar from "../Sidebar/Sidebar";

const menus = [
  { id: 1, name: "Work", url: "/work" },
  { id: 2, name: "What we do", url: "/we-do" },
  { id: 3, name: "Blogs", url: "/blogs" },
  { id: 4, name: "Lets Connect", url: "/connect" },
];
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <nav className=" ">
      <div className="py-6 md:py-12 flex items-center justify-between">
        {/* logo start */}
        <Link href="/">
          <a className="flex gap-2 md:gap-3 items-center">
            <img
              src="/logo.svg"
              alt="Picture of the author"
              className="w-6 h-6 md:w-10 md:h-10"
            />
            <h3 className="text-[20px] md:text-[36px] text-[#00588A] leading-6 md:leading-[44px] font-normal">
              Spark<span className="text-[#0180BC]">tics</span>
            </h3>
          </a>
        </Link>

        {/* logo end */}

        {/* MENU START*/}

        <div className="flex items-center gap-3">
          <ul className=" gap-2 hidden md:flex">
            {menus.map((menu) => (
              <li key={menu.id} className="">
                <Link href={menu.url}>
                  <a className="font-semibold text-[16px] leading-4 text-[#00588A] px-4 py-2 ">
                    {menu.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative">
            <button onClick={() => setSidebar(!sidebar)}>
              {" "}
              <MenuIcon />
            </button>

            <div className={`${sidebar ? "block" : "hidden"} `}>
              <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
            </div>
          </div>
        </div>
        {/* MENU END*/}
      </div>
    </nav>
  );
};

export default Navbar;
