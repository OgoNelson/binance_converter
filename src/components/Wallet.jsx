import info from "../icons/info.svg";

function Wallet() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <p className="text-[#848e9c] font-normal">Wallet</p>
        <img src={info} alt="Wallet information" className="w-4 ml-3" />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="checkbox1"
          className="mr-2 appearance-none w-4 h-4 rounded border border-[#848e9c] checked:bg-[url('/src/icons/checkbox1.png')] checked:bg-no-repeat checked:bg-center checked:border-none cursor-pointer"
        />
        <label
          htmlFor="checkbox1"
          className="text-[#EAECEF] font-normal text-sm cursor-pointer"
        >
          Spot
        </label>
        <input
          type="checkbox"
          id="checkbox2"
          className="mr-2 ml-4 appearance-none w-4 h-4 rounded border border-[#848e9c] checked:bg-[url('/src/icons/checkbox1.png')] checked:bg-no-repeat checked:bg-center checked:border-none cursor-pointer"
        />
        <label
          htmlFor="checkbox2"
          className="text-[#EAECEF] font-normal text-sm cursor-pointer"
        >
          Funding
        </label>
      </div>
    </div>
  );
}
export default Wallet;
