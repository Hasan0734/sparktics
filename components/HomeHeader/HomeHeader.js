import Image from "next/image";
import React from "react";

const HomeHeader = ({ title }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-[52px] pt-[151px] pb-[126px]">
      <div className="flex items-center gap-5">
        <h3 className="font-semibold text-[24x] leading-7 text-[#243479]">
          Welcome, Good Morning
        </h3>
        <Image
          src="/rocket-send.svg"
          alt="Picture of the author"
          width={48}
          height={48}
        />
      </div>
      <div className="max-w-[685px]">
        <h1 className="text-[56px] leading-[80px] text-[#243479]">
          <span className="font-[300]">We create and launch your </span>
          <span className="font-medium">{title}</span>
        </h1>
      </div>
    </div>
  );
};

export default HomeHeader;
