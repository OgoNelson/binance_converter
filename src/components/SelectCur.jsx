import { FaTimes } from "react-icons/fa";
import Search from "./Search";

function SelectCur({
  crypto,
  query,
  setQuery,
  searchRef,
  closeSearch,
  setCurrentCryptoFrom,
  setCurrentCryptoTo,
  dir,
}) {
  function handleClickFrom(cryptoData) {
    // setFirstLoad(false);
    setCurrentCryptoFrom(cryptoData);
    closeSearch();
  }

  function handleClickTo(cryptoData) {
    // setFirstLoad(false);
    setCurrentCryptoTo(cryptoData);
    closeSearch();
  }
  return (
    <div
      ref={searchRef}
      id="modal"
      onClick={(e) => e.target.id === "modal" && closeSearch()}
      className="fixed inset-0 hidden h-[100dvh] w-[100dvw] cursor-pointer bg-[#00000080]"
    >
      <div className="mt-[32dvh] h-[68dvh] w-[100dvw] rounded-t-3xl bg-[#29313D] pt-4">
        <div className="flex items-center justify-between px-4 text-[#EAECEF]">
          <span className="text-2xl font-semibold">Select Currency</span>
          <FaTimes onClick={closeSearch} className=" cursor-pointer" />
        </div>
        <div className="px-4">
          <Search query={query} setQuery={setQuery} outlineColor="[#fcd535]" />
        </div>
        <div className="mt-0">
          {crypto?.map((cryptoData) => {
            return (
              <div
                onClick={() =>
                  dir === "from"
                    ? handleClickFrom(cryptoData)
                    : handleClickTo(cryptoData)
                }
                className="mr-2 p-1 px-4 hover:bg-[#181a20]"
              >
                <div className="flex items-center text-[#EAECEF]">
                  <img src={cryptoData.large} alt="logo" className="mr-4 w-8" />
                  <div className="flex flex-col">
                    <span className=" font-bold">{cryptoData.symbol}</span>
                    <span className=" font-extralight">{cryptoData.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default SelectCur;
