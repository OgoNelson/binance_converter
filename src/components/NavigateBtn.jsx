import propTypes from "prop-types";

function NavigateBtn({ text, textColor, bg }) {
  return (
    <button
      className={`bg-${bg} text-${textColor} py-1 px-3 mr-5 rounded-md font-normal`}
    >
      {text}
    </button>
  );
}
export default NavigateBtn;

NavigateBtn.propTypes = {
  text: propTypes.string,
};
