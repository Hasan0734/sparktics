import React from "react";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";

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
          </div>
          
          <Footer/>
    </Layout>
  );
}
