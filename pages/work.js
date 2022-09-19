import Image from "next/image";
import React from "react";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";

const works = [
  { id: 1, type: "logo", image: "/assets/logo.png", company: "company name" },
  {
    id: 2,
    type: "branding",
    image: "/assets/logo.png",
    company: "company name",
  },
  {
    id: 3,
    type: "website",
    image: "/assets/logo.png",
    company: "company name",
  },
  {
    id: 4,
    type: "video",
    image: "/assets/thumbline.png",
    company: "company name",
  },
];

export default function work() {
  return (
    <Layout>
      <div className="max-w-[1448px] mx-auto  ">
        <div className="bg-[#E6F5FD] px-[52px]">
          <Navbar />
        </div>
      </div>
      <div className="max-w-[1448px] mx-auto bg-white px-[112px] py-[52px]">
        <div className="">
          <h2 className="font-semibold text-[36px] leading-[44px] text-[#00588A]">
            Work
          </h2>
          <p className="mt-[25px] font-normal text-[16px] leading-[24px] text-[#00588A]">
            Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec
            tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis
            vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae
            ultricies metus, at condimentum nulla. Donec quis ornare lacus.
            Etiam gravida mollis tortor quis porttitor.
          </p>
        </div>
        <div className="mt-8">
          <ul className="flex gap-3">
            <li>
              <button
                className="bg-[#00588A] rounded-full text-[16px]
               text-white leading-[20px] font-semibold px-6 py-[10px]"
              >
                All
              </button>
            </li>
            <li>
              <button
                className="border rounded-full text-[16px]
               text-[#00588A] leading-[20px] font-semibold px-5 py-[10px]"
              >
                Logos
              </button>
            </li>
            <li>
              <button
                className="border rounded-full text-[16px]
               text-[#00588A] leading-[20px] font-semibold px-5 py-[10px]"
              >
                Branding
              </button>
            </li>
            <li>
              <button
                className="border rounded-full text-[16px]
               text-[#00588A] leading-[20px] font-semibold px-5 py-[10px]"
              >
                Explainer Videos
              </button>
            </li>
            <li>
              <button
                className="border rounded-full text-[16px]
               text-[#00588A] leading-[20px] font-semibold px-5 py-[10px]"
              >
                Websites
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap mt-20">
          {works.map((work) => (
            <div key={work.id} className=" w-[304px] h-[230px] border relative">
              <div className="absolute left-0 z-20 p-4">
                <h3
                  className={`font-normal text-[14px] ${
                    work.type === "logo" ||
                    work.type === "branding" ||
                    work.type === "website"
                      ? "text-[#00588A]"
                      : "text-white"
                  } leading-[17px]`}
                >
                  # {work.type} / {work.company}
                </h3>
              </div>
              <div className="flex justify-center h-full items-center">
                <Image
                  src={work.image}
                  width={
                    work.type === "logo" ||
                    work.type === "branding" ||
                    work.type === "website"
                      ? 159
                      : 302
                  }
                  height={
                    work.type === "logo" ||
                    work.type === "branding" ||
                    work.type === "website"
                      ? 109
                      : 228
                  }
                  alt="work images"
                />
              </div>
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
  );
}
