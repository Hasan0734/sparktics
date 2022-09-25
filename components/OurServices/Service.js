import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Service({ service }) {
  const { id, name, icon, width, height, top, bottom, left, right } = service;
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        className={`absolute`}
        style={{
          top: top,
          left: left,
        }}
      >
        <OutsideClickHandler onOutsideClick={() => setIsActive(false)}>
          <div
            onClick={() => setIsActive(!isActive)}
            className="rounded-full  flex justify-center items-center cursor-pointer"
            style={{
              height: height,
              width: width,
              background: "rgba(204, 239, 255, 0.7)",
            }}
          >
            <div
              className="bg-white p-3 w-[178px] h-[178px] rounded-full flex justify-center items-center"
              style={{
                boxShadow: "5px 8px 7px -3px rgba(0, 88, 138, 0.2)",
              }}
            >
              <div className="text-center">
                <div className="flex justify-center">{icon}</div>
                <h3 className="pt-2 font-bold text-[18px] leading-[27px] text-[#00588A]">
                  {name}
                </h3>
              </div>
            </div>
          </div>
          {isActive && (
            <div className="relative -top-7 -left-6">
              <div
                className="bg-white h-[282px] w-[345px] top-5
               z-10 absolute drop-shadow-[4px_-1px_14px_rgba(0,88,138,0.2)]"
              >
                <div className="bg-white rotate-45 rounded-md  w-11 h-11 absolute -top-[18px] left-[43%]"></div>
                <h1>Hello world</h1>
              </div>
            </div>
          )}
        </OutsideClickHandler>
      </div>
    </>
  );
}
