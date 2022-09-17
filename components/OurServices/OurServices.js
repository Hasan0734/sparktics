import React from "react";
import {
  ContentMarketing,
  Growth,
  PublicRelation,
  Strategy,
  Tag,
  Technology,
} from "../../public/assets/Icon";

const services = [
  {
    id: 1,
    name: "Branding",
    icon: <Tag />,
    width: "278px",
    height: "278px",
    top: "10px",
    left: "",
    right: "",
    bottom: "",
  },
  {
    id: 2,
    name: "Advertising",
    icon: <PublicRelation />,
    width: "258px",
    height: "258px",
    top: "164px",
    left: "17.5%",
    right: "",
    bottom: "",
  },
  {
    id: 3,
    name: "Content",
    icon: <ContentMarketing />,
    width: "238px",
    height: "238px",
    top: "10px",
    left: "31.8%",
    right: "",
    bottom: "",
  },
  {
    id: 4,
    name: "Technology",
    icon: <Technology />,
    width: "267px",
    height: "267px",
    top: "164px",
    left: "44.5%",
    right: "",
    bottom: "",
  },
  {
    id: 5,
    name: "Performance",
    icon: <Growth />,
    width: "278px",
    height: "278px",
    top: "10px",
    left: "61%",
    right: "",
    bottom: "",
  },
  {
    id: 6,
    name: "Digital Strategy",
    icon: <Strategy />,
    width: "268px",
    height: "268px",
    top: "164px",
    left: "78%",
    right: "",
    bottom: "",
  },
];

const OurServices = () => {
  return (
    <div
      className="  h-[635px] py-[104px]"
      style={{ backgroundImage: "url('we-do-bg.png')" }}
    >
      <div className="relative ">
        {services?.map(
          ({ id, name, icon, width, height, top, bottom, left, right }) => (
            <div
              key={id}
              className={`bg-[rgba(204, 239, 255, 0.7)] absolute
               rounded-full flex justify-center items-center`}
              style={{
                background: "rgba(204, 239, 255, 0.7)",
                height: height,
                width: width,
                top: top,
                left: left,
              }}
            >
              <div
                className="bg-white p-3 w-[178px] h-[178px] rounded-full flex justify-center items-center"
                style={{ boxShadow: "5px 8px 7px -3px rgba(0, 88, 138, 0.2)" }}
              >
                <div className="text-center">
                  <div className="flex justify-center">{icon}</div>
                  <h3 className="pt-2 font-bold text-[18px] leading-[27px] text-[#00588A]">
                    {name}
                  </h3>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OurServices;
