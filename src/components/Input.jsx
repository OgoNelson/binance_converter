import Balance from "./Balance";
import InputCrypto from "./InputCrypto";

function Input({
  direction,
  data,
  showSearch,
  value,
  setDir,
  dLogo,
  inputValue,
  setInputValue,
}) {
  return (
    <div className="mt-4 cursor-pointer rounded bg-[#2B3139] p-3 text-sm">
      <Balance data={data} direction={direction} />
      <InputCrypto
        showSearch={showSearch}
        data={data}
        value={value}
        setDir={setDir}
        dLogo={dLogo}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}
export default Input;
