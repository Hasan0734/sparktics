import Image from "next/image";
import React from "react";

const Welcome = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-[52px]">
      <div className="flex">
        <h3>Welcome, Good Morning</h3>
        <Image
          src="/rocket-send.svg"
          alt="Picture of the author"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
};

export default Welcome;
