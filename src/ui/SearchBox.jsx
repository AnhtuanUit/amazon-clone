import { useRef, useState } from "react";
import IconSprite from "./IconSprite";
import { Link } from "react-router-dom";

function SearchBox({ className }) {
  const [selected, setSelected] = useState("all");
  const refCustomSelect = useRef();
  const refCustomSearchInput = useRef();

  const options = [
    { text: "All", value: "all" },
    { text: "Smart Phone", value: "smartphones" },
    { text: "Option 1", value: "option1" },
    { text: "Option 2", value: "option2" },
    { text: "Option 3", value: "option3" },
  ];

  const seletecText = options.find((option) => option.value === selected).text;

  function toggleCustomSelectOutline() {
    refCustomSelect.current.classList.toggle("outline");
  }

  function toggleCustomSearchInputOutline() {
    refCustomSearchInput.current.classList.toggle("outline");
  }

  return (
    <div className={className}>
      <div
        className="outline-me-orange-200 flex rounded-md outline-2 outline-offset-0"
        ref={refCustomSearchInput}
      >
        <Link
          to="#"
          className="bg-me-gray-200 border-r-me-gray-400 text-me-gray-500 rounded-xs outline-me-orange-200  hover:bg-me-gray-300 relative flex items-center gap-1.5 rounded-l-md border-r px-2.5 text-xs outline-2 outline-offset-0 hover:text-black"
          ref={refCustomSelect}
        >
          {seletecText}
          <span
            alt="Icon arrow down"
            className="border-t-me-gray-500 border-[4px] border-b-0 border-transparent hover:border-t-black"
          >
            <select
              value={selected}
              className="rounded-xs absolute left-0 top-0 h-full w-full cursor-pointer rounded-l-md opacity-0"
              onFocus={toggleCustomSelectOutline}
              onBlur={toggleCustomSelectOutline}
              onChange={(e) => setSelected(e.target.value)}
            >
              {options.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.text}
                </option>
              ))}
            </select>
          </span>
        </Link>
        <input
          type="text"
          placeholder="Search Amazon"
          className="placeholder:text-me-gray-450 grow p-2 text-[15px] outline-none"
          onFocus={toggleCustomSearchInputOutline}
          onBlur={toggleCustomSearchInputOutline}
        />
        <button className="bg-me-orange-50 hover:bg-me-orange-60 focus::bg-me-orange-60 rounded-r-md">
          <IconSprite name="search" alt="Icon search" />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
