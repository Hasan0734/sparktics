import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuIcon } from "../../public/assets/Icon";

const menus = [
  { id: 1, name: "Work", url: "/work" },
  { id: 2, name: "What we do", url: "/we-do" },
  { id: 3, name: "Blogs", url: "/blogs" },
  { id: 4, name: "Lets Connect", url: "/connect" },
];
const Navbar = () => {
  return (
    <nav className=" ">
      <div className="pt-12 flex items-center justify-between">
        {/* logo start */}
        <div className="flex gap-3 items-center">
          <Image
            src="/logo.svg"
            alt="Picture of the author"
            width={48}
            height={49}
          />
          <h3 className="text-[36px] text-[#00588A] leading-[44px] font-normal">
            Spark<span className="text-[#0180BC]">tics</span>
          </h3>
        </div>

        {/* logo end */}

        {/* MENU START*/}

        <div className="flex items-center gap-3">
          <ul className="flex gap-2">
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
          <div>
            <MenuIcon />
          </div>
        </div>
        {/* MENU END*/}
      </div>
    </nav>
  );
};

export default Navbar;
