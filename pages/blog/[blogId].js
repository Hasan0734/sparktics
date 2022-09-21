import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
import parse from "html-react-parser";
import dateformat from "dateformat";

const SingleBlog = () => {
  const [blog, setBlog] = useState({});
  const {
    query: { blogId },
  } = useRouter();

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlog(data.find((dt) => dt.id === parseInt(blogId))));
  }, [blogId, setBlog]);

  return (
    <Layout>
      <div className="max-w-[1448px] mx-auto">
        <div className="bg-[#E6F5FD] px-6 md:px-[52px]">
          <Navbar />
        </div>
      </div>
      <div className="max-w-[1448px] mx-auto">
        <img className="w-full h-[413px] object-fill" src={ blog?.image} alt="blog image" />
      </div>
      <div
        className="max-w-[1448px] mx-auto
       bg-white px-6 md:px-[112px] py-[52px]"
      >
        <h1 className="text-[#00588A] font-semibold text-[36px] leading-[44px]">
          {blog?.name}
        </h1>
        <h3 className="py-6 text-[#00588A] font-bold text-[19.2px] leading-[23px]">
          {blog?.sub_head}
        </h3>
        <div className="flex justify-between">
          <p className="font-normal leading-[24px] text-[16px] text-[#00588A]">
            Written by {blog?.written_by}
          </p>
          <p className="font-normal leading-[24px] text-[16px] text-[#00588A]">
            {dateformat(blog?.created_date, "dd/mm/yyyy")}
          </p>
        </div>
        <div className="mt-9">
          <p className="font-normal leading-[24px] text-[16px] text-[#00588A] text-justify">
            {parse(blog?.content || "")}
          </p>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default SingleBlog;
