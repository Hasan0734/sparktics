import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import Welcome from "../components/HomeHeader/HomeHeader";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <Layout>
      <div className="max-w-[1440px] mx-auto bg-[#E6F5FD] ">
        <div className=" px-[52px] ">
          <Navbar />
          <Welcome title={"Mobile Application."} />
        </div>
        <div className=" h-[567px] w-full relative object-cover overflow-hidden">
          <video
            ref={vidRef}
            autoplay
            muted
            loop
            style={{ clipPath: "polygon(0 0%, 100% 9%, 102% 100%, 0% 100%)" }}
          >
            <source src="growth.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="absolute top-2/4 bottom-2/4 left-[40%] justify-center">
            <div>
              {" "}
              <div className="flex justify-center">
                <Image
                  src="/rocket-send-2.svg"
                  alt="Picture of the author"
                  width={48}
                  height={49}
                />
              </div>
              <h4 className="text-white font-[300] text-[24px] text-center leading-[29px]">
                We focus on your growth
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E6F5FD] max-w-[1440px] mx-auto py-14">
        <h3 className="font-semibold text-[36px] leading-[43px] text-[#00588A] text-center">
          What we do
        </h3>
      </div>
    </Layout>
  );
}
