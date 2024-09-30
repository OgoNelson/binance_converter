import NavigateBtn from "./NavigateBtn";

function Navigate() {
  return (
    <div className="flex items-center mt-7 mb-4">
      <NavigateBtn text="Market" textColor="[#EAECEF]" bg="[#2B3139]" />
      <NavigateBtn text="Limit" textColor="[#848e9c]" bg="none" />
    </div>
  );
}
export default Navigate;
