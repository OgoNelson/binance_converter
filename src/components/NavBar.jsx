import { FaSearch, FaTimes, FaBookOpen, FaGlobe } from "react-icons/fa";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdHeadsetMic, MdWindow } from "react-icons/md";
import { RiDownload2Fill } from "react-icons/ri";
import { Children, useRef } from "react";
import Search from "./Search";

function NavBar({ navRef }) {
  const closeNav = () => {
    setTimeout(() => {
      navRef.current.classList.toggle("hidden");
    }, 200);
  };
  return (
    <div
      ref={navRef}
      className="opacity-1 fixed left-0 top-0 hidden h-[100vh] w-[100dvw] bg-[#181a20] px-4 pt-4 transition delay-[7000ms] ease-in-out"
    >
      <div className="flex items-center justify-end">
        <FaTimes onClick={closeNav} className=" my-1 text-2xl text-[#848e9c]" />
      </div>
      <div className="mt-4 flex w-full items-center justify-between">
        <button className="w-[48.5%] rounded-lg bg-[#2B3139] p-2 text-[#EAECEF]">
          Log In
        </button>
        <button className="w-[48.5%] rounded-lg bg-[#fcd535] p-2">
          Sign Up
        </button>
      </div>
      <Search placeholder="Coin, Function, Announcement" />
      <nav className="flex-col text-lg text-[#EAECEF]">
        <a href="/" className="mb-6 flex items-center">
          <PiCurrencyBtcFill className="mr-2" />
          Buy Crypto
        </a>
        <a href="/" className="mb-6 flex items-center">
          <BiSolidBarChartAlt2 className="mr-2" />
          Markets
        </a>
        <a href="/" className="mb-6 flex items-center">
          <FaBookOpen className="mr-2" />
          Square
        </a>
        <a href="/" className="mb-6 flex items-center">
          <MdWindow className="mr-2" />
          More
        </a>
        <a href="/" className="mb-6 flex items-center">
          <MdHeadsetMic className="mr-2" />
          24/7 Chat Support
        </a>
        <a href="/" className="mb-6 flex items-center">
          <RiDownload2Fill className="mr-2" />
          Download
        </a>
        <a href="/" className="mb-6 flex items-center">
          <FaGlobe className="mr-2" />
          English (Nigeria)
        </a>
        <a href="/" className="mb-6 flex items-center">
          <AiFillDollarCircle className="mr-2" />
          USD
        </a>
      </nav>
    </div>
  );
}
export default NavBar;
