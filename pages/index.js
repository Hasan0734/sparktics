import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import Welcome from "../components/HomeHeader/HomeHeader";
import { useEffect, useRef } from "react";
import Image from "next/image";
import OurServices from "../components/OurServices/OurServices";
import OurProcess from "../components/OurProcess/OurProcess";
import Link from "next/link";

export default function Home() {
  const vidRef = useRef();
  const footerRef = useRef();
  useEffect(() => {
    vidRef.current.play();
    footerRef.current.play();
  }, []);
  return (
    <Layout>
      <div className="max-w-[1448px] mx-auto bg-[#E6F5FD] ">
        <div className=" px-[112px] ">
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
      <div className="max-w-[1448px] mx-auto ">
        <div className="bg-[#E6F5FD]  py-14">
          <h3 className="font-semibold text-[36px] leading-[43px] text-[#00588A] text-center">
            What we do
          </h3>
        </div>
        <OurServices />
      </div>
      <OurProcess />
      <div className="max-w-[1448px] mx-auto  px-[112px] bg-[#fff]">
        <div className="pt-[200px] pb-28 grid grid-cols-2">
          <div className="flex gap-10 items-center">
            <div className="bg-[#0180BC] w-[20px] h-[216px]"></div>
            <div>
              <p className="font-semibold text-[24px] leading-[36px] text-[#243479]">
                “Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse
                nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla
                iaculis vitae. Donec sagittis faucibus lacus eget blandit. “
              </p>
              <p className="text-[20px] font-normal text-[#243479] leading-[36px]">
                Mr R Sreedhar Varma, Chairman, Rudra Feeds
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/chairman.png"
              alt="Picture of the author"
              width={264}
              height={264}
            />
          </div>
        </div>
      </div>
      {/* footer section */}
      <footer className="max-w-[1448px] mx-auto ">
        <div className=" w-full relative h-[1034px] object-cover overflow-hidden">
          <video
            className="h-[1034px] object-cover"
            ref={footerRef}
            autoplay
            muted
            loop
            style={{
              clipPath: "polygon(0 9%, 100% 0%, 102% 100%, 0% 100%)",
              width: "100%",
            }}
          >
            <source src="footer-video.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="absolute top-1/4 bottom-2/4 left-[112px] justify-center">
            <div className=" w-[320px]">
              <div className="flex gap-3 items-center">
                <h4 className="text-white font-semibold text-[36px] leading-[44px]">
                  Lets connect
                </h4>
                <div className="flex justify-center">
                  <Image
                    src="/rocket-send-2.svg"
                    alt="Picture of the author"
                    width={48}
                    height={49}
                  />
                </div>
              </div>
              <div className="pt-12">
                <h3 className="text-white font-semibold text-[20px] leading-[24px]">
                  +91-910622227
                </h3>
                <p className="text-white font-semibold text-[20px] leading-[24px] pt-8">
                  info@sparktics.com
                </p>
                <p className="text-white font-semibold text-[16px] leading-[24px] pt-8">
                  1ST floor, 19-7-4, Sri Rama Nivas, Atyam Vari Street, Tanuku,
                  Andhra Pradesh, 534211. (Head office)
                </p>
                <p className="text-white font-semibold text-[16px] leading-[24px] pt-8">
                  Langs de baan, Uithoorn, Nederland (Branch Office)
                </p>
                <p className="text-white font-semibold text-[16px] leading-[24px] pt-8">
                  Leave you contact
                  <br /> Lets us reach out to you
                </p>

                <div className="pt-8">
                  <button
                    className="bg-white rounded-full py-4 px-6 
                text-[#0180BC] font-[800] text-[20px] leading-[24px]"
                  >
                    SHARE CONTACT
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-[100px]">
              <ul className="flex gap-10">
                <li>
                  <Link href="/about">
                    <a className="font-semibold text-white text-[24px] leading-[29px] ">
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="font-semibold text-white text-[24px] leading-[29px] ">
                      Work with Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="font-semibold text-white text-[24px] leading-[29px] ">
                      Blog
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
