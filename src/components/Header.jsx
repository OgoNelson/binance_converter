import binanceLogo from "../icons/binance.svg";
import gift from "../icons/gift.svg";
import { LuFileClock } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

function Header({ openNav }) {
  return (
    <>
      <div className="flex items-center justify-between h-12 m-0">
        <p>
          <img
            src={binanceLogo}
            alt="binance logo"
            className="w-36 cursor-pointer"
          />
        </p>
        <p className="flex items-center">
          <button className="flex items-center bg-[#fcd535] rounded-lg p-2 font-semibold">
            <img src={gift} alt="gift icon" className="w-3 mr-1" />
            Sign Up
          </button>
          <GiHamburgerMenu
            onClick={openNav}
            className="text-[#eaecef] text-2xl ml-4 hover:text-[#fcd535] cursor-pointer"
          />
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-2xl text-[#EAECEF] font-semibold">
          Binance Convert
        </h1>
        <LuFileClock className="text-[#EAECEF]" />
      </div>
    </>
  );
}
export default Header;
