import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" flex flex-col  gap-5 my-10">
      <h1 className=" text-4xl pl-16 font-semibold">Furni.</h1>
      <div className=" flex justify-around text-[#6A6A6A] ">
        <div>
          Donec mattis porta eros, aliquet finibus risus interdum <br /> at.
          Nulla vivethe as it was for us to know what was to <br /> be done. the
          this is a long post for the text.`This small <br /> text has to be
          place here, since this is{" "}
        </div>
        <div className=" flex flex-col">
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="/Contact">Contact us</a>
        </div>
        <div className=" flex flex-col">
          <a href="#">Support</a>
          <a href="#">Knowledge base</a>
          <a href="#">Live chat</a>
        </div>
        <div className=" flex flex-col">
          <a href="#">Jobs</a>
          <a href="#">Our team</a>
          <a href="#">Leadership</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className=" flex flex-col">
          <a href="#">Nordic chair</a>
          <a href="#">Kruzo Aero</a>
          <a href="#">Ergonomic</a>
        </div>
      </div>
      <div className=" flex gap-4 px-16">
        <button className=" rounded-full bg-[#D9D9D9] p-3">
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebookF />
          </a>
        </button>
        <button className=" rounded-full bg-[#D9D9D9] p-3">
          <a href="https://www.instagram.com/" target="_blank">
            <AiOutlineInstagram />
          </a>
        </button>
        <button className=" rounded-full bg-[#D9D9D9] p-3">
          <a href="https://twitter.com/" target="_blank">
            <AiOutlineTwitter />
          </a>
        </button>
        <button className=" rounded-full bg-[#D9D9D9] p-3">
          <a href="https://linkedin.com" target="_blank">
            <BiLogoLinkedin />
          </a>
        </button>
      </div>
      <div className=" flex justify-between px-16 text-[#6A6A6A]">
        <h1>Copyright 2022 xyz@gmail.com. All Rights Reserved.</h1>
        <div className=" flex gap-5">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy & Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
