import React from "react";
import webflow from "../../../../public/Images/webflow.svg";
import relume from "../../../../public/Images/relume.svg";
import beds from "../../../../public/Images/rentalProducts/beds.png"
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
const CustomerStories = () => {
  return (
    <div className="p-20">
      <div className="flex items-start flex-col Inter">
        <h3 className=" font-semibold text-black tracking-tight capitalize text-[1vw] mb-3 ">
          Case studies
        </h3>
        <h1 className="text-black tracking-tight  capitalize text-[3vw] mb-3 font-bold">
          Customer stories
        </h1>
        <p className="font-medium   text-[1.2vw] w-[60%] text-black ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex items-center my-20 gap-8">
        <div className="story border-2 p-6 bg-[#F4EBFF] border-[#781393]">
          <div className="img w-[8vw]">
            <Image
              src={webflow}
              alt="webflow"
              className="object-cover h-full w-full"
            />
          </div>
          <p className="text-[1.3vw] text-black font-medium mt-10">{`"A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers."`}</p>
          <div className="flex gap-4 mt-8">
            <div className="img w-[3vw]">
              <Image
                src={beds}
                alt="dummy"
                className="object-cover h-full w-ful"
              />
            </div>
            <div className="montserrat capitalize black">
              <p className="text-black text-[.8vw] font-semibold">
                name surname
              </p>
              <span className="text-black text-[.8vw] font-normal">
                position, company name
              </span>
            </div>
          </div>
          <Link href={"#"} className="flex gap-4 items-center mt-4">
            <span className="text-black font-medium">Read Full Story</span>
            <FaAngleRight />
          </Link>
        </div>
        <div className="story border-2 p-6 bg-[#F4EBFF] border-[#781393]">
          <div className="img w-[8vw]">
            <Image
              src={relume}
              alt="webflow"
              className="object-cover h-full w-full"
            />
          </div>
          <p className="text-[1.3vw] text-black font-medium mt-10">{`"A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers."`}</p>
          <div className="flex gap-4 mt-8">
            <div className="img w-[3vw]">
              <Image
                src={beds}
                alt="dummy"
                className="object-cover h-full w-ful"
              />
            </div>
            <div className="montserrat capitalize black">
              <p className="text-black text-[.8vw] font-semibold">
                name surname
              </p>
              <span className="text-black text-[.8vw] font-normal">
                position, company name
              </span>
            </div>
          </div>
          <Link href={"#"} className="flex gap-4 items-center mt-4">
            <span className="text-black font-medium">Read Full Story</span>
            <FaAngleRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerStories;