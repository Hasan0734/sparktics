import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Employee = ({ employee }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="relative">
        <OutsideClickHandler onOutsideClick={() => setIsActive(false)}>
          <div
            onClick={() => setIsActive(!isActive)}
            className={`${
              isActive ? "bg-[#00588A]" : "bg-[#CCEFFFB2]"
            } flex justify-center
           items-center cursor-pointer  h-[206px] w-[206px] rounded-full p-3`}
          >
            <div
              className="bg-white w-full h-full
            rounded-full flex justify-center items-center "
            >
              <img
                className="w-[80px] h-[105px]"
                src={employee.image}
                alt="member icon"
              />
            </div>
          </div>
          {isActive && (
            <div
              className="absolute -left-[70px]
             "
            >
              <div className="p-9 relative mt-3  rounded-md w-[345px]  z-20  bg-white shadow-[4px_-1px_14px_rgba(0,88,138,0.2)]">
                <div className="absolute w-10 h-10 bg-white -top-3 left-[45%] rounded-md rotate-45"></div>
                <h1 className="font-bold text-[20px] leading-6 text-[#00588A]">
                                  {employee.name} “ { employee.title}”
                </h1>
                <p className="font-semibold text-[16px] leading-6 text-[#00588A] my-3">
                  {employee.position}
                </p>
                <p className="font-normal text-[16px] leading-6 text-[#00588A]">
                                  { employee?.describe}
                </p>
              </div>
            </div>
          )}
        </OutsideClickHandler>

        <div className="mt-6 text-center">
          <h2 className="font-bold text-[19.2px] leading-[23px] text-[#00588A]">
            Teja aka “ {employee.title}”
          </h2>
          <p className="font-semibold text-[12.8px] leading-[19px] text-[#00588A]">
            {employee.position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Employee;
