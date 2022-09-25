import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Employee from "../components/Employee/Employee";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Modal from "../components/Modal/Modal";
import Navbar from "../components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { Checked } from "../public/assets/Icon";

const AboutUs = () => {
  const [employee, setEmployee] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [completed, setCompleted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("/employee.json")
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);

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
                  Work with us
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
                      Your Name
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
                      Profile you are interested in
                    </label>
                    <textarea
                      id="profile"
                      {...register("profile", { required: true })}
                      className={`rounded-md w-full px-2 py-5 md:py-[14px]  border-[1px] 
                   outline-none mt-2 font-normal text-[20px] leading-[24px] resize-none
                    ${errors?.profile ? "border-red-500" : "border-[#CCCCCC]"}`}
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
      <Layout>
        <div className="max-w-[1448px] mx-auto">
          <div className="bg-transparent md:bg-[#E6F5FD] px-6 md:px-[52px]">
            <Navbar />
          </div>
        </div>
        <div className="max-w-[1448px] mx-auto bg-white  md:px-[112px] py-[52px]">
          <div className="">
            <h2 className="font-semibold text-[36px] leading-[44px] text-[#00588A] px-6">
              About Us
            </h2>
            <div className="mt-11">
              <div className="bg-[#EFF9FF] max-w-[843px] mx-auto py-[56px] px-6 rounded-md">
                <div className="hidden md:flex justify-center">
                  <div className="flex gap-3 items-end ">
                    <h3 className="text-[36px] leading-[44px] font-semibold text-[#00588A]">
                      We are “Spakticers”
                    </h3>
                    <Image
                      src="/rocket-send.svg"
                      alt="Picture of the author"
                      width={48}
                      height={49}
                    />
                  </div>
                </div>

                <div className="mt-[76px] hidden lg:grid grid-cols-3 gap-y-16 gap-x-[320px]">
                  {employee?.map((em) => (
                    <Employee key={em.id} employee={em} />
                  ))}
                </div>

                <div className="mt-[76px] grid grid-cols-2 lg:hidden gap-y-10 gap-x-3">
                  {employee?.map((employee, i) =>
                    i === 0 || i % 3 === 0 ? (
                      <div
                        key={employee.id}
                        className="flex justify-center col-span-2"
                      >
                        <div className="">
                          <div className="w-full flex justify-center">
                            <div className="member_info  h-[100px] w-[100px] rounded-full">
                              <div
                                className={`member_img  bg-[#CCEFFFB2] duration-200 flex justify-center items-center cursor-pointer  h-full w-full rounded-full p-2`}
                              >
                                <div className="bg-white w-full h-full rounded-full flex justify-center items-center ">
                                  <img
                                    className="w-[39px] h-[51px]"
                                    src={employee.image}
                                    alt="member icon"
                                  />
                                </div>
                              </div>
                              <div className="absolute hidden member_detail duration-200 left-0">
                                <div className="p-9 relative mt-3  rounded-md max-w-[345px]  z-20 mx-3  bg-white shadow-[4px_-1px_14px_rgba(0,88,138,0.2)]">
                                  <div className="absolute w-10 h-10 bg-white -top-3 left-[45%] rounded-md rotate-45"></div>
                                  <h1 className="font-bold text-[20px] leading-6 text-[#00588A]">
                                    {employee.name} “ {employee.title}”
                                  </h1>
                                  <p className="font-semibold text-[16px] leading-6 text-[#00588A] my-3">
                                    {employee.position}
                                  </p>
                                  <p className="font-normal text-[16px] leading-6 text-[#00588A]">
                                    {employee?.describe}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

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
                    ) : (
                      <div
                        key={employee.id}
                        className="flex justify-center col-span-1"
                      >
                        <div className="relative">
                          <div className="flex justify-center">
                            <div className="member_info  h-[100px] w-[100px] rounded-full flex justify-center relative">
                              <div
                                className={`member_img bg-[#CCEFFFB2] duration-200 flex justify-center items-center cursor-pointer  h-full w-full rounded-full p-2`}
                              >
                                <div className="bg-white w-full h-full rounded-full flex justify-center items-center ">
                                  <img
                                    className="w-[39px] h-[51px]"
                                    src={employee.image}
                                    alt="member icon"
                                  />
                                </div>
                              </div>
                              <div className="absolute hidden member_detail duration-200 ">
                                <div className="p-9 relative mt-3  rounded-md max-w-[345px]  z-20  bg-white shadow-[4px_-1px_14px_rgba(0,88,138,0.2)]">
                                  <div className="absolute w-10 h-10 bg-white -top-3 left-[45%] rounded-md rotate-45"></div>
                                  <h1 className="font-bold text-[20px] leading-6 text-[#00588A]">
                                    {employee.name} “ {employee.title}”
                                  </h1>
                                  <p className="font-semibold text-[16px] leading-6 text-[#00588A] my-3">
                                    {employee.position}
                                  </p>
                                  <p className="font-normal text-[16px] leading-6 text-[#00588A]">
                                    {employee?.describe}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 text-center">
                            <h2 className="font-bold text-[14px] leading-[17px] text-[#00588A]">
                              Teja aka “ {employee.title}”
                            </h2>
                            <p className="font-semibold text-[12px] leading-[16px] text-[#00588A]">
                              {employee.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-[165px] text-center">
                  <p className="font-normal text-[20px] leading-[24px] text-[#00588A]">
                    Do you like to work with us ?
                  </p>
                  <button
                    onClick={() => setTrigger(true)}
                    className="bg-white  rounded-full mt-6 shadow-[4px_6px_6px_-2px_rgba(0,88,138,0.2)]
                   text-[20px] leading-6 text-[#0180BC] font-[800] uppercase px-7 py-4"
                  >
                    Share Details
                  </button>
                </div>
              </div>
              <div className="mt-[56px] md:mt-[200px] grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-[170px] px-6">
                <div className="text-center md:text-start">
                  <div className="flex justify-center">
                    <div className="bg-[#E6F5FD] p-5 md:p-10 w-[100px] md:w-[208px] rounded-md">
                      <svg
                        className="w-[60px] h-[60px] md:w-[120px] md:h-[120px]"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M60 77.8125C61.2936 77.8125 62.3438 76.7624 62.3438 75.4688C62.3438 74.1751 61.2936 73.125 60 73.125C58.7064 73.125 57.6562 74.1751 57.6562 75.4688C57.6562 76.7624 58.7064 77.8125 60 77.8125Z"
                          fill="#00588A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M90.153 65.473C89.7401 64.7589 88.9811 64.3149 88.1562 64.303H88.1242C87.3112 64.303 86.5559 64.725 86.1283 65.4181L77.1168 80.062L62.3439 56.0559V28.125H97.5001C98.401 28.125 99.2222 27.6086 99.6122 26.7966C100.003 25.9845 99.8933 25.0204 99.3303 24.3173L91.1262 14.0625L99.3303 3.80768C99.8933 3.10455 100.003 2.1405 99.6122 1.32843C99.2222 0.516357 98.401 0 97.5001 0H60.0001C58.7056 0 57.6564 1.04919 57.6564 2.34375V56.0559L42.8834 80.0629L33.871 65.4181C33.4388 64.7159 32.6716 64.292 31.844 64.303C31.0182 64.314 30.2601 64.7589 29.8463 65.473L0.315057 116.482C-0.104255 117.208 -0.10517 118.101 0.313226 118.827C0.731622 119.553 1.50616 120 2.34387 120H117.656C118.494 120 119.269 119.553 119.687 118.827C120.105 118.101 120.104 117.207 119.684 116.482L90.153 65.473ZM44.9086 85.7144L44.9127 85.708L44.9168 85.7016L60.0001 61.1911L93.3052 115.312H26.6941L44.9086 85.7144ZM86.295 15.5264C85.6102 14.6704 85.6102 13.4546 86.295 12.5986L92.6231 4.6875H62.3439V23.4375H92.6231L86.295 15.5264ZM31.9365 71.218L40.1313 84.5343L21.19 115.312H6.40881L31.9365 71.218ZM79.8689 84.5334L98.8093 115.312H113.591L88.0638 71.218L79.8689 84.5334Z"
                          fill="#00588A"
                        />
                        <path
                          d="M78.7271 109.51C79.4055 110.613 80.8493 110.956 81.9516 110.277C83.0539 109.599 83.3981 108.156 82.7188 107.054L67.2876 81.9773C66.6101 80.875 65.1663 80.5308 64.0631 81.2092C62.9608 81.8885 62.6175 83.3314 63.2959 84.4337L78.7271 109.51Z"
                          fill="#00588A"
                        />
                      </svg>
                    </div>
                  </div>
                  <h2 className="font-bold text-[24px] leading-[29px] text-[#00588A] mt-4 md:mt-8">
                    Our Mission
                  </h2>
                  <p className="font-normal text-[16px] leading-[24px] text-[#00588A] mt-2 text-justify">
                    Vestibulum rutrum quam vitae fringilla tincidunt.
                    Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis
                    iaculis nulla iaculis vitae. Donec sagittis faucibus lacus
                    eget blandit. Mauris vitae ultricies metus, at condimentum
                    nulla. Donec quis ornare lacus. Etiam gravida mollis tortor
                    quis porttitor. Vestibulum rutrum quam vitae fringilla
                    tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales
                    nisi, quis iaculis nulla iaculis vitae. Donec sagittis
                    faucibus lacus eget blandit.
                  </p>
                </div>
                <div className="text-center md:text-start mt-[56px] md:mt-0">
                  <div className="flex justify-center">
                    <div className="bg-[#E6F5FD] p-5 md:p-10 w-[100px] md:w-[208px] rounded-md">
                      <svg
                        className="h-[60px] w-[54px] md:w-[108px] md:h-[120px]"
                        width="108"
                        height="120"
                        viewBox="0 0 108 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M39.8438 50.625C41.1374 50.625 42.1875 49.5749 42.1875 48.2812C42.1875 46.9812 41.1264 45.9375 39.8438 45.9375C38.5501 45.9375 37.5 46.9876 37.5 48.2812C37.5 49.5758 38.5501 50.625 39.8438 50.625Z"
                          fill="#00588A"
                        />
                        <path
                          d="M53.9062 20.1562C55.2008 20.1562 56.25 19.1071 56.25 17.8125V2.34375C56.25 1.04919 55.2008 0 53.9062 0C52.6117 0 51.5625 1.04919 51.5625 2.34375V17.8125C51.5625 19.1071 52.6117 20.1562 53.9062 20.1562Z"
                          fill="#00588A"
                        />
                        <path
                          d="M51.5625 102.188V117.656C51.5625 118.951 52.6117 120 53.9062 120C55.2008 120 56.25 118.951 56.25 117.656V102.188C56.25 100.893 55.2008 99.8438 53.9062 99.8438C52.6117 99.8438 51.5625 100.893 51.5625 102.188Z"
                          fill="#00588A"
                        />
                        <path
                          d="M17.7302 31.8252C18.6458 32.7407 20.1289 32.7407 21.0453 31.8252C21.96 30.9106 21.96 29.4265 21.0453 28.511L11.1 18.5665C10.1854 17.651 8.70129 17.651 7.78577 18.5665C6.87024 19.4821 6.87024 20.9661 7.78577 21.8807L17.7302 31.8252Z"
                          fill="#00588A"
                        />
                        <path
                          d="M86.7682 90.517C85.8527 91.4325 85.8527 92.9166 86.7682 93.8321L96.7126 103.777C97.6273 104.691 99.1113 104.692 100.027 103.777C100.942 102.861 100.942 101.377 100.027 100.461L90.0824 90.517C89.1669 89.6024 87.6837 89.6024 86.7682 90.517Z"
                          fill="#00588A"
                        />
                        <path
                          d="M90.0824 31.8252L100.027 21.8807C100.942 20.9661 100.942 19.4821 100.027 18.5665C99.1113 17.651 97.6282 17.651 96.7126 18.5665L86.7682 28.511C85.8527 29.4265 85.8527 30.9106 86.7682 31.8252C87.6837 32.7407 89.1669 32.7407 90.0824 31.8252Z"
                          fill="#00588A"
                        />
                        <path
                          d="M17.7302 90.5187L7.78577 100.463C6.87024 101.378 6.87024 102.862 7.78577 103.777C8.70129 104.693 10.1844 104.693 11.1 103.777L21.0453 93.8329C21.96 92.9174 21.96 91.4333 21.0453 90.5187C20.1298 89.6031 18.6458 89.6031 17.7302 90.5187Z"
                          fill="#00588A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M53.906 92.8125C40.6428 92.8125 27.1754 87.3532 14.9613 77.0242C5.81062 69.2853 0.615921 61.6306 0.398941 61.3083C-0.13298 60.5173 -0.13298 59.4827 0.398941 58.6917C0.615921 58.3694 5.81062 50.7147 14.9613 42.9758C27.1754 32.6468 40.6428 27.1875 53.906 27.1875C67.1702 27.1875 80.6367 32.6468 92.8507 42.9758C102.002 50.7147 107.197 58.3704 107.413 58.6917C107.945 59.4827 107.945 60.5173 107.413 61.3083C107.197 61.6306 102.002 69.2853 92.8507 77.0242C80.6367 87.3532 67.1702 92.8125 53.906 92.8125ZM53.906 31.875C38.5673 31.875 25.9074 39.8584 17.9881 46.5555C11.4979 52.0441 7.06673 57.5537 5.23476 59.9991C7.08046 62.4591 11.562 68.0283 18.0878 73.5287C25.987 80.1874 38.614 88.125 53.906 88.125C69.2448 88.125 81.9047 80.1416 89.824 73.4445C96.3142 67.9559 100.745 62.4463 102.578 60.0018C100.731 57.54 96.2501 51.9717 89.7251 46.4713C81.825 39.8126 69.1981 31.875 53.906 31.875Z"
                          fill="#00588A"
                        />
                        <path
                          d="M53.9062 81.0938C65.6094 81.0938 75 71.5952 75 60C75 48.3691 65.5371 38.9062 53.9062 38.9062C51.4435 38.9062 48.7701 39.3576 46.3568 40.2979C45.1501 40.7666 44.5523 42.1252 45.0211 43.3319C45.4623 44.4672 46.6946 45.1886 48.2822 44.5834C50.0674 43.9151 52.067 43.5938 53.9062 43.5938C62.9526 43.5938 70.3125 50.9537 70.3125 60C70.3125 69.0198 62.9993 76.4062 53.9062 76.4062C44.8599 76.4062 37.5 69.0463 37.5 60C37.5 58.9059 37.597 58.0646 37.771 57.0081C38.0118 55.7364 37.1759 54.5178 35.9042 54.2752C34.6362 54.0353 33.4058 54.8749 33.1631 56.1456C32.9233 57.4182 32.8125 58.7622 32.8125 60C32.8125 71.6309 42.2754 81.0938 53.9062 81.0938Z"
                          fill="#00588A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M53.9062 50.625C59.0753 50.625 63.2812 54.8309 63.2812 60C63.2812 65.1691 59.0753 69.375 53.9062 69.375C48.7372 69.375 44.5312 65.1691 44.5312 60C44.5312 54.8309 48.7372 50.625 53.9062 50.625ZM53.9062 55.3125C51.3217 55.3125 49.2188 57.4155 49.2188 60C49.2188 62.5845 51.3217 64.6875 53.9062 64.6875C56.4908 64.6875 58.5938 62.5845 58.5938 60C58.5938 57.4155 56.4908 55.3125 53.9062 55.3125Z"
                          fill="#00588A"
                        />
                      </svg>
                    </div>
                  </div>
                  <h2 className="font-bold text-[24px] leading-[29px] text-[#00588A] mt-2 md:mt-8">
                    Our Vision
                  </h2>
                  <p className="font-normal text-[16px] leading-[24px] text-[#00588A] mt-2 text-justify">
                    Vestibulum rutrum quam vitae fringilla tincidunt.
                    Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis
                    iaculis nulla iaculis vitae. Donec sagittis faucibus lacus
                    eget blandit. Mauris vitae ultricies metus, at condimentum
                    nulla. Donec quis ornare lacus. Etiam gravida mollis tortor
                    quis porttitor. Vestibulum rutrum quam vitae fringilla
                    tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales
                    nisi, quis iaculis nulla iaculis vitae. Donec sagittis
                    faucibus lacus eget blandit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default AboutUs;
