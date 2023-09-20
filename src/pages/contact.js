import React from "react";
import { HiOutlineMail } from "react-icons/hi";
// import {BsFillSendFill} from "react-icons/bs"
import send from "../images/paper-plane-solid 1.svg";
import sofa from "../images/sofa 1.svg";

const Contact = () => {
  return (
    <div className=" flex items-center justify-around my-10">
      <div className=" flex flex-col gap-4 ">
        <div className=" flex items-center  gap-2">
          <HiOutlineMail className=" text-lg text-[#6A6A6A]" />
          <h1 className=" font-semibold">Subscribe to Newsletter</h1>
        </div>
        <div className=" flex  gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            className=" border-2 placeholder-[#2F2F2F] text-sm px-5 py-2 rounded-xl"
          />
          <input
            type="email"
            placeholder="Enter your e-mail"
            className=" border-2 placeholder-[#2F2F2F] text-sm px-5 py-2 rounded-xl"
          />
          <button className=" border-2 p-2 rounded-lg bg-[#35736E] text-white">
            <img src={send} alt="send-icon" className=" w-[20px]" />
          </button>
        </div>
      </div>
      <div>
        {" "}
        <img src={sofa} alt="sofa-image" />
      </div>
    </div>
  );
};

export default Contact;
