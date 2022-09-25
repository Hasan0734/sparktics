import React, { useState } from "react";
import {
  ContentMarketing,
  Growth,
  PublicRelation,
  Strategy,
  Tag,
  Technology,
} from "../../public/assets/Icon";
import Service from "./Service";

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
    left: "17.3%",
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
      className="  h-[635px] py-[104px] px-11"
      style={{ backgroundImage: "url('we-do-bg.png')" }}
    >
      <div className="relative ">
        {services?.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
