function Balance({ direction, data }) {
  return (
    <div className="mb-2 flex items-center justify-between text-[#848E9C]">
      <span className=" font-medium">{direction}</span>
      <span>Balance : --{data.symbol}</span>
    </div>
  );
}
export default Balance;
