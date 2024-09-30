import dropDown from "../icons/dropDown.png";

function inputCrypto({
  data,
  showSearch,
  value,
  setDir,
  dLogo,
  inputValue,
  setInputValue,
}) {
  return (
    <div className="mt-3 flex items-center justify-between">
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="0.00"
          className="bg-transparent text-2xl text-[#EAECEF] placeholder:text-[#5e6673] focus:outline-none"
        />
      </div>
      <div
        onClick={() => {
          showSearch();
          setDir(`${value}`);
        }}
        value={value}
        className="flex items-center rounded-3xl bg-[#181a20] p-3"
      >
        <img src={data.large || dLogo} alt="crypto logo" className="w-7" />
        <p className="ml-2 text-lg uppercase text-[#EAECEF]">{data.symbol}</p>
        <img src={dropDown} alt="selection Arrow" className="ml-7 w-3" />
      </div>
    </div>
  );
}
export default inputCrypto;
