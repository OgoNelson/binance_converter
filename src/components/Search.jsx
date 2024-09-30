import { FaTimes, FaSearch } from "react-icons/fa";

function Search({ placeholder, query, setQuery, outlineColor }) {
  return (
    <div className="flex items-center w-full border border-[#5e6673] rounded-lg py-2 px-3 my-4 focus-within:border-[#fcd535] hover:border-[#fcd535]">
      <FaSearch className="mr-2 text-[#848e9c]" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full text-[#848e9c] bg-transparent focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
export default Search;
