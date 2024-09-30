import Header from "./components/Header";
import Navigate from "./components/navigate";
import CryptoFrom from "./components/CryptoFrom";
import ConvertDirection from "./components/ConvertDirection";
import CryptoTo from "./components/CryptoTo";
import PreviewBtn from "./components/PreviewBtn";
import Wallet from "./components/Wallet";
import Input from "./components/Input";
import SelectCur from "./components/SelectCur";
import usdt_logo from "../src/cryptoLogo/usdt-logo.svg";
import bnb_logo from "../src/cryptoLogo/bnb-logo.svg";
import NavBar from "./components/NavBar";
import { useRef } from "react";
import Search from "./components/Search";

import { useEffect, useState, Children } from "react";

function App() {
  const navRef = useRef();
  const searchRef = useRef();
  const [crypto, setCrypto] = useState([]);
  const [query, setQuery] = useState("");
  const [currentCryptoFrom, setCurrentCryptoFrom] = useState("");
  const [currentCryptoTo, setCurrentCryptoTo] = useState("");
  const [dir, setDir] = useState("");
  const [usdPriceFrom, setUsdPriceFrom] = useState(0);
  const [inputValueFrom, setInputValueFrom] = useState("");
  // const [usdPriceTo, setUsdPriceTo] = useState(0);
  const [inputValueTo, setInputValueTo] = useState("");
  const [dLogoTo, setdLogoTo] = useState("");
  const [dLogoFrom, setdLogoFrom] = useState("");

  const apiKey = "CG-4HqjS66j4GtqBQAN2tUS5zbr";

  useEffect(function () {
    async function initialCryptoFrom() {
      const options = { method: "GET" };
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin?x_cg_demo_api_key=CG-4HqjS66j4GtqBQAN2tUS5zbr",
        options,
      );
      const initialData = await res.json();
      setdLogoFrom(initialData.image.small);
      setCurrentCryptoFrom(initialData);
      // setUsdPriceFrom(initialData.market_data.current_price.usd);
    }
    initialCryptoFrom();
  }, []);

  useEffect(function () {
    async function initialCryptoTo() {
      const options = { method: "GET" };
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/binancecoin?x_cg_demo_api_key=CG-4HqjS66j4GtqBQAN2tUS5zbr",
        options,
      );
      const initialData = await res.json();
      setdLogoTo(initialData.image.small);
      setCurrentCryptoTo(initialData);
    }
    initialCryptoTo();
  }, []);
  // console.log(currentCryptoFrom.market_data.current_price.usd);

  useEffect(
    function () {
      async function fetchCrypto() {
        const options = { method: "GET" };
        const res = await fetch(
          `https://api.coingecko.com/api/v3/search?query=${query}&x_cg_demo_api_key=CG-4HqjS66j4GtqBQAN2tUS5zbr`,
          options,
        );
        const data = await res.json();
        setCrypto(data.coins);
      }
      if (query.length < 1) {
        setCrypto([]);
        return;
      }
      fetchCrypto();
    },
    [query],
  );

  const openNav = () => {
    setTimeout(() => {
      navRef.current.classList.toggle("hidden");
    }, 200);
  };

  const showSearch = () => {
    setTimeout(() => {
      searchRef.current.classList.toggle("hidden");
    }, 300);
  };

  const closeSearch = () => {
    setTimeout(() => {
      searchRef.current.classList.toggle("hidden");
      setQuery("");
    }, 300);
  };

  // useEffect(
  //   function convertFrom() {
  //     const usdValue = inputValueFrom * usdPriceFrom;
  //     const cryptoValue = usdValue / usdPriceTo;

  //     console.log(usdPriceFrom, usdPriceTo);
  //     setInputValueTo(cryptoValue);
  //   },
  //   [inputValueFrom],
  // );

  // useEffect(
  //   function convertTo() {
  //     const usdValue = inputValueTo * usdPriceTo;
  //     const cryptoValue = usdValue / usdPriceFrom;

  //     console.log(usdPriceFrom, usdPriceTo);
  //     setInputValueFrom(cryptoValue);
  //   },
  //   [inputValueTo],
  // );

  return (
    <div className="h-[100dvh] w-full bg-[#181a20] p-4">
      <NavBar navRef={navRef} />
      <SelectCur
        crypto={crypto}
        query={query}
        setQuery={setQuery}
        searchRef={searchRef}
        closeSearch={closeSearch}
        setCurrentCryptoFrom={setCurrentCryptoFrom}
        setCurrentCryptoTo={setCurrentCryptoTo}
        dir={dir}
      />
      <Header openNav={openNav} />
      <Navigate />
      <CryptoFrom
        element={
          <>
            <Wallet />
            <Input
              showSearch={showSearch}
              value="from"
              setDir={setDir}
              data={currentCryptoFrom}
              dLogo={dLogoFrom}
              inputValue={inputValueFrom}
              setInputValue={setInputValueFrom}
              direction="From"
            />
          </>
        }
      />
      <ConvertDirection />
      <CryptoTo
        element={
          <Input
            showSearch={showSearch}
            value="to"
            setDir={setDir}
            data={currentCryptoTo}
            dLogo={dLogoTo}
            inputValue={inputValueTo}
            setInputValue={setInputValueTo}
            direction="To"
          />
        }
      />
      <PreviewBtn />
    </div>
  );
}

export default App;
