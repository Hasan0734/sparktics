import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import parse from "html-react-parser";
import axios from "axios";
import { firstNWord } from "../__lib__/helpers/Validator";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <Layout>
      <div className="max-w-[1448px] mx-auto">
        <div className="bg-[#E6F5FD] px-[52px]">
          <Navbar />
        </div>
      </div>
      <div className="max-w-[1448px] mx-auto bg-white px-[112px] py-[52px]">
        <div className="">
          <h2 className="font-semibold text-[36px] leading-[44px] text-[#00588A]">
            Blogs
          </h2>
          <p className="mt-[25px] font-normal text-[16px] leading-[24px] text-[#00588A]">
            Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec
            tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis
            vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae
            ultricies metus, at condimentum nulla. Donec quis ornare lacus.
            Etiam gravida mollis tortor quis porttitor.
          </p>
        </div>
        <div className="mt-[70px]">
          {blogs.map((blog, i) => (
            <div key={blog.id} className="flex gap-6 items-center mb-8">
              <div>
                <div className="bg-[#CCEFFFB2] rounded-full p-3 w-[206px] h-[206px]">
                  <Image
                    src={"/assets/blog.png"}
                    width={200}
                    height={200}
                    alt="blog images"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-[20px] text-[#00588A] leading-[23px] font-bold">
                  {blog.name}
                </h2>
                <p className="text-[16px] text-[#00588A] leading-[24px] font-normal py-[19px]">
                  {parse(firstNWord(blog.content, 69))}
                </p>
                <Link href={`/blog/${blog.id}`}>
                  <a className="text-[16px] text-[#00A3FF] leading-[24px] font-semibold">
                    View Blog
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

export default Blogs;
