import Image from "next/image";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Modal from "../components/Modal/Modal";
import Navbar from "../components/Navbar/Navbar";

const items = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Logos", value: "logo" },
  { id: 3, name: "Branding", value: "branding" },
  { id: 4, name: "Explainer Videos", value: "video" },
  { id: 5, name: "Websites", value: "website" },
];

export default function Work() {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");
  const [works, setWorks] = useState([]);
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    fetch("/works.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);

  return (
    <>
      {isOpen && (
        <Modal
          isOpen={trigger}
          setIsOpen={setTrigger}
          size={"max-w-[718px]"}
          shadow={"drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"}
        >
          <div className="flex justify-center items-center">
            <Image src={image} width={433} height={228} alt="work images" />
            {/* <img src={image} alt="modal image" /> */}
          </div>
        </Modal>
      )}

      <Layout>
        <div className="max-w-[1448px] mx-auto">
          <div className="bg-transparent md:bg-[#E6F5FD] px-6 md:px-[52px]">
            <Navbar />
          </div>
        </div>
        <div className="max-w-[1448px] mx-auto bg-white px-6 md:px-[112px] py-10 md:py-[52px]">
          <div className="">
            <h2 className="font-semibold text-[36px] leading-[44px] text-[#00588A]">
              Work
            </h2>
            <p className="mt-[25px] font-normal text-[16px] leading-[24px] text-[#00588A] text-justify">
              Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec
              tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis
              vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae
              ultricies metus, at condimentum nulla. Donec quis ornare lacus.
              Etiam gravida mollis tortor quis porttitor.
            </p>
          </div>
          <div className="mt-8">
            <ul className="flex flex-wrap gap-3">
              {items?.map((item, i) => (
                <li key={item.id}>
                  <button
                    onClick={() => setSelectedType(item.value)}
                    className={`${
                      selectedType === item.value
                        ? "bg-[#00588A] text-white"
                        : "text-[#00588A] border rounded-full"
                    } rounded-full text-[16px]
                leading-[20px] font-semibold px-6 py-[10px]`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap mt-20">
            {selectedType !== "all" &&
              works
                .filter((wr) => wr.type.toLowerCase() === selectedType)
                .map((work) => (
                  <div
                    onClick={() => {
                      setImage(work.images[0]);
                      setIsOpen(true);
                    }}
                    key={work.id}
                    className=" w-full md:w-[304px] h-[230px] border relative"
                  >
                    <div className="absolute left-0 z-20 p-4">
                      <h3
                        className={`font-normal text-[14px] 
                      ${work.type === "Logo" ? "text-[#00588A]" : ""}
                      ${work.type === "Branding" ? "text-[#00588A]" : ""}
                      ${work.type === "Website" ? "text-white" : ""}
                      ${work.type === "Video" ? "text-white" : ""}
                       leading-[17px]`}
                      >
                        # {work.type} / {work.name}
                      </h3>
                    </div>
                    {work.type === "Logo" || work.type === "Branding" ? (
                      <div className="flex justify-center items-center h-full">
                        <img
                          src={work.images[0]}
                          className={``}
                          alt="work images"
                        />
                      </div>
                    ) : (
                      <div className="flex justify-center items-center">
                        <img
                          src={work.images[0]}
                          className={`w-full h-[230px] md:h-full`}
                          alt="work images"
                        />
                      </div>
                    )}
                  </div>
                ))}
            {selectedType === "all" &&
              works.map((work) => (
                <div
                  onClick={() => {
                    setImage(work.images[0]);
                    setIsOpen(true);
                  }}
                  key={work.id}
                  className=" w-full md:w-[304px] h-[230px] border relative"
                >
                  <div className="absolute left-0 z-20 p-4">
                    <h3
                      className={`font-normal text-[14px] 
                      ${work.type === "Logo" ? "text-[#00588A]" : ""}
                      ${work.type === "Branding" ? "text-[#00588A]" : ""}
                      ${work.type === "Website" ? "text-white" : ""}
                      ${work.type === "Video" ? "text-white" : ""}
                       leading-[17px]`}
                    >
                      # {work.type} / {work.name}
                    </h3>
                  </div>
                  {work.type === "Logo" || work.type === "Branding" ? (
                    <div className="flex justify-center items-center h-full">
                      <img
                        src={work.images[0]}
                        className={``}
                        alt="work images"
                      />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center">
                      <img
                        src={work.images[0]}
                        className={`w-full h-[230px] md:h-full`}
                        alt="work images"
                      />
                    </div>
                  )}
                </div>
              ))}

            <div className="text-center w-full mt-[60px]">
              <button
                className=" px-6 py-4
             border-[#00588A] border-[0.6px]
            font-[800] text-[20px] leading-[24px] 
            text-[#0180BC] rounded-full shadow-[4px_6px_6px_-2px_rgba(0,88,138,0.2)]"
              >
                View More
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
}
