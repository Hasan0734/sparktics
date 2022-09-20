import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Footer = () => {
  // const footerRef = useRef();
  // useEffect(() => {
  //   footerRef.current.play();
  // }, []);
  return (
    <footer className="max-w-[1448px] mx-auto ">
      <div className=" w-full relative h-[1034px] object-cover overflow-hidden">
        <video
          className="h-[1034px] object-cover"
          // ref={footerRef}
          autoPlay
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
  );
};

export default Footer;
