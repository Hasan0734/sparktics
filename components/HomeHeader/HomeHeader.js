import Image from "next/image";
import React from "react";

const HomeHeader = ({ title }) => {
  return (
    <div className="max-w-[1448px] mx-auto pt-[50px] md:pt-[151px] pb-[50px] md:pb-[126px]">
      <div className="flex items-center gap-5">
        <h3 className="font-semibold text-[14px] md:text-[24px] leading-[18px] md:leading-7 text-[#243479]">
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
        <h1 className="text-[20px] md:text-[56px] leading-[28px] md:leading-[80px] text-[#243479]">
          <span className="font-[300]">We create and launch your </span>
          <span className="font-medium">{title}</span>
        </h1>
      </div>
    </div>
  );
};

export default HomeHeader;
