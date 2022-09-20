import React from 'react';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';
import Navbar from '../../components/Navbar/Navbar';

const SingleBlog = () => {
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
           
          </div>
        </div>
        <Footer />
      </Layout>
    );
};

export default SingleBlog;