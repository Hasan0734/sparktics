import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Checked } from "../../public/assets/Icon";
import Modal from "../Modal/Modal";
import { useForm } from "react-hook-form";

const Footer = () => {
  const [trigger, setTrigger] = useState(false);
  const [completed, setCompleted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const footerRef = useRef();
  // useEffect(() => {
  //   footerRef.current.play();
  // }, []);

  const onSubmit = (data) => {
    setCompleted(true);
  };

  return (
    <>
      {trigger && (
        <Modal
          isOpen={trigger}
          setIsOpen={setTrigger}
          size={"max-w-[718px]"}
          shadow={"drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"}
          center="items-start"
        >
          {!completed && (
            <>
              <div className="flex justify-end pr-4 pt-4 p-0 md:p-5">
                <svg
                  onClick={() => setTrigger(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8  top-4 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="">
                <h2 className="text-[16px] md:text-[24px] leading-[29px] font-semibold text-[#00588A] px-[22px] md:px-12">
                  Share your contact
                </h2>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="px-[22px] md:px-[50px] pb-6 md:pb-[50px] pt-4 md:pt-8"
                >
                  <div className="pb-[22px] md:pb-8">
                    <label
                      className="font-normal text-[16px] leading-[24px] text-[#00588A] px-0 md:px-4"
                      htmlFor="name"
                    >
                      Your Name or Company Name
                    </label>
                    <input
                      id="name"
                      {...register("name", { required: true })}
                      className={`rounded-md w-full px-2 py-5 md:py-[14px]  border-[1px] 
                   outline-none mt-2 font-normal text-[20px] leading-[24px]
                    ${errors?.name ? "border-red-500" : "border-[#CCCCCC]"}`}
                      type="text"
                    />
                  </div>

                  <div className="pb-[22px] md:pb-8">
                    <label
                      className="font-normal text-[16px] leading-[24px] text-[#00588A] px-0 md:px-4"
                      htmlFor="number"
                    >
                      Contact Number
                    </label>
                    <input
                      id="number"
                      {...register("number", { required: true })}
                      className={`rounded-md w-full px-2 py-5 md:py-[14px]  border-[1px] 
                   outline-none mt-2 font-normal text-[20px] leading-[24px]
                    ${errors?.number ? "border-red-500" : "border-[#CCCCCC]"}`}
                      type="text"
                    />
                  </div>

                  <div className="pb-[22px] md:pb-8">
                    <label
                      className="font-normal text-[16px] leading-[24px] text-[#00588A] px-0 md:px-4"
                      htmlFor="email"
                    >
                      Email Id
                    </label>
                    <input
                      id="email"
                      {...register("email", { required: true })}
                      className={`rounded-md w-full px-2 py-5 md:py-[14px]  border-[1px] 
                   outline-none mt-2 font-normal text-[20px] leading-[24px]
                    ${errors?.email ? "border-red-500" : "border-[#CCCCCC]"}`}
                      type="text"
                    />
                  </div>

                  <div className="">
                    <label
                      className="font-normal text-[16px] leading-[24px] text-[#00588A] px-0 md:px-4"
                      htmlFor="profile"
                    >
                      Your Requirements
                    </label>
                    <textarea
                      id="requirements"
                      {...register("requirements", { required: true })}
                      className={`rounded-md w-full px-2 py-5 md:py-[14px]  border-[1px] 
                   outline-none mt-2 font-normal text-[20px] leading-[24px] resize-none h-[66px] md:h-[103px]
                    ${
                      errors?.requirements
                        ? "border-red-500"
                        : "border-[#CCCCCC]"
                    }`}
                      type="text"
                    />
                  </div>

                  <div className="pt-[26px] md:pt-[50px] text-center">
                    <button
                      className="bg-[#00588A] rounded-full px-9 md:px-20 py-4
                 uppercase text-white font-semibold text-[20px] leading-6"
                    >
                      Done
                    </button>
                  </div>
                </form>
              </div>{" "}
            </>
          )}
          {completed && (
            <div className="bg-white flex justify-center pt-[300px] pb-[275px] px-[142px]">
              <div className="text-center">
                <div className="flex justify-center">
                  <div
                    className="border-[6px] border-[#00BD1A] rounded-full h-[64px] w-[64px]
               flex items-center justify-center"
                  >
                    <Checked />
                  </div>
                </div>
                <h1 className="text-[#00588A] text-[24px] leading-9 font-semibold mt-9">
                  Details Shared Successfully
                </h1>
                <p className="text-[#00588A] text-[20px] leading-9 font-normal mt-2">
                  We will get back to you as soon as possible
                </p>
              </div>
            </div>
          )}
        </Modal>
      )}
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
            <source src="/footer-video.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="absolute top-1/4 bottom-2/4 left-6 md:left-[112px] justify-center">
            <div className=" max-w-[320px]">
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
                    onClick={() => setTrigger(true)}
                    className="bg-white rounded-full py-4 px-6 
                text-[#0180BC] font-[800] text-[20px] leading-[24px]"
                  >
                    SHARE CONTACT
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-[100px]">
              <ul className="flex flex-wrap gap-10">
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
    </>
  );
};

export default Footer;
