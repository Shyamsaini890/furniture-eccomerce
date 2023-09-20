import React from "react";
import couch from "../images/couch 1.svg";
import { Link } from "react-router-dom";
const Herosection = () => {
  return (
    <div className="bg-[#3B5D50] flex items-center justify-center text-white">
      <div className="flex  flex-col gap-28 z-10" data-AOS="fade-right" data-AOS-delay="600" data-aos-duration="2000">
        <h1 className=" text-5xl font-bold">
          Modern Interior <br /> Design Studio
        </h1>
        <Link to="/product" class="relative border-2  bg-transparent py-2.5 px-20 font-medium uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-yellow-500 before:transition-transform before:duration-700 before:content-[''] hover:text-white before:hover:scale-x-100 mx-auto rounded-full overflow-hidden">
          Explore
        </Link>
      </div>
      <div>
        <img src={couch} alt="couch" data-AOS="fade-left" data-AOS-delay="600" data-aos-duration="2000" />
      </div>
    </div>
  );
};

export default Herosection;
