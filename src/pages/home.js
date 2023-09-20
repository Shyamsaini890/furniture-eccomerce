import React, { useEffect } from "react";
import Herosection from "./herosection";
import { FiTruck } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { CgSupport } from "react-icons/cg";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import whychooseus from "../images/why-choose-us-img 1.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import grid1 from "../images/img-grid-1 1.svg";
import grid2 from "../images/img-grid-2 1.svg";
import grid3 from "../images/img-grid-3 1.svg";
import { FaCircleDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Herosection />
      <div className="flex justify-around items-center  my-10">
        <div
          className=" flex  flex-col gap-5"
          data-AOS="fade-right"
          data-AOS-delay="500"
          data-aos-duration="1500"
        >
          <h1 className=" text-4xl">Why Choose Us</h1>
          <p>
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            <br />
            vivethe as it was for us to know what was to be done. the
          </p>
          <div className=" flex flex-wrap w-[600px] gap-16  pt-10">
            <div
              data-AOS="fade-right"
              data-AOS-delay="300"
              data-aos-duration="1500"
            >
              <div className=" relative">
                <FiTruck className="  absolute text-xl" />
                <button className=" relative left-2 top-1 bg-[#35736e33]  w-5 h-5 rounded-full"></button>
              </div>
              <h3>Fast & Free Shipping</h3>
              <p>
                Donec mattis porta eros, aliquet <br /> finibus risus interdum
                at. Nulla <br /> vivethe as it was
              </p>
            </div>
            <div
              data-AOS="fade-right"
              data-AOS-delay="400"
              data-aos-duration="1500"
            >
              <div className=" relative">
                <FiShoppingBag className="  absolute text-xl" />
                <button className=" relative left-2 top-1 bg-[#35736e33]  w-5 h-5 rounded-full"></button>
              </div>
              <h3>Easy to Shop</h3>
              <p>
                Donec mattis porta eros, aliquet <br /> finibus risus interdum
                at. Nulla <br /> vivethe as it was
              </p>
            </div>
            <div
              data-AOS="fade-right"
              data-AOS-delay="500"
              data-aos-duration="1500"
            >
              <div className=" relative">
                <CgSupport className="  absolute text-2xl" />
                <button className=" relative left-2.5 top-1.5 bg-[#35736e33]  w-5 h-5 rounded-full"></button>
              </div>
              <h3>24/7 Support</h3>
              <p>
                Donec mattis porta eros, aliquet <br /> finibus risus interdum
                at. Nulla <br /> vivethe as it was
              </p>
            </div>
            <div
              data-AOS="fade-right"
              data-AOS-delay="600"
              data-aos-duration="1500"
            >
              <div className=" relative">
                <PiArrowsCounterClockwiseBold className="  absolute text-xl" />
                <button className=" relative left-2 top-1 bg-[#35736e33]  w-5 h-5 rounded-full"></button>
              </div>
              <h3>Hassle Free Returns</h3>
              <p>
                Donec mattis porta eros, aliquet <br /> finibus risus interdum
                at. Nulla <br /> vivethe as it was
              </p>
            </div>
          </div>
        </div>
        <div className="why-choose-us">
          <img
            src={whychooseus}
            alt="why-choose-us-image"
            data-AOS="fade-left"
            data-AOS-delay="400"
            data-aos-duration="1500"
          />
        </div>
      </div>
      <div className="second AOS Animation flex justify-between px-20 my-20 ">
        <div>
          <img src={grid1} alt="image" className=" absolute" data-AOS="fade-right"
            data-AOS-delay="400"
            data-aos-duration="1500" />
          <img
            src={grid2}
            alt="image"
            className=" relative -right-[450px] rounded-xl "data-AOS="fade-right"
            data-AOS-delay="400"
            data-aos-duration="1500"
          />
          <img
            src={grid3}
            alt="image"
            className=" relative -right-[350px] top-10 rounded-xl"data-AOS="fade-right"
            data-AOS-delay="400"
            data-aos-duration="1500"
          />
        </div>
        <div className=" flex flex-col gap-7" >
          <h1 className=" text-3xl font-semibold"data-AOS="fade-left"
            data-AOS-delay="400"
            data-aos-duration="1500">
            We help you make <br /> Modern Interior Design{" "}
          </h1>
          <p className=" text-[#6A6A6A]"data-AOS="fade-left"
            data-AOS-delay="400"
            data-aos-duration="1500">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla{" "}
            <br /> vivethe as it was for us to know what was to be done. the
            this is a <br /> long post for the text.`This small text has to be
            place here, since <br /> this is a place holder. You can also chane
            it.
          </p>
          <div className=" flex flex-wrap  w-[500px] gap-10  text-[#6A6A6A]">
            <p className=" flex items-center gap-3"data-AOS="fade-left"
            data-AOS-delay="400"
            data-aos-duration="1500">
              <FaCircleDot className=" text-[#3B5D50]" />
              Donec mattis porta eros,let <br /> aliquet finibus ri
            </p>
            <p className=" flex items-center gap-3"data-AOS="fade-left"
            data-AOS-delay="400"
            data-aos-duration="1500">
              <FaCircleDot className=" text-[#3B5D50]" />
              Donec mattis porta eros,let <br /> aliquet finibus ri
            </p>
            <p className=" flex items-center gap-3"data-AOS="fade-left"
            data-AOS-delay="400"
            data-aos-duration="1500">
              <FaCircleDot className=" text-[#3B5D50]" />
              Donec mattis porta eros,let <br /> aliquet finibus ri
            </p>
            <p className=" flex items-center gap-3"data-AOS="fade-left"
            data-AOS-delay="400"
            data-aos-duration="1500">
              <FaCircleDot className=" text-[#3B5D50]" />
              Donec mattis porta eros,let <br /> aliquet finibus ri
            </p>
          </div>
          <div >
          <button className=" border-2 flex px-7 py-2 rounded-3xl bg-[#2F2F2F] text-white font-semibold items-start"data-AOS="fade-left"
            data-AOS-delay="400"
            data-aos-duration="1500"><Link to="/Product">Explore</Link></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
