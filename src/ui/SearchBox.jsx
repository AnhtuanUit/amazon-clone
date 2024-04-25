import Selector from "./Selector";
import SearchIcon from "./icons/SearchIcon";

function SearchBox({ className }) {
  return (
    <div className={className}>
      <div className="my-3 flex overflow-hidden rounded-md">
        <Selector />
        <input placeholder="Search Amazon" className="grow p-2 text-base" />
        <button className="bg-[#febd69]">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
