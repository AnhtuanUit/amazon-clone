import { useRef, useState } from "react";
import IconSprite from "./IconSprite";
import { Link } from "react-router-dom";

function CustomSelectButton() {
  const [selected, setSelected] = useState("all");
  const refCustomSelect = useRef();

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

  function renderOptions() {
    return options.map((item) => (
      <option key={item.value} value={item.value}>
        {item.text}
      </option>
    ));
  }

  return (
    <Link
      to="#"
      className="rounded-xs relative flex items-center gap-1.5  rounded-l-md border-r border-r-me-gray-400 bg-me-gray-200 px-2.5 text-xs text-me-gray-500 outline-2 outline-offset-0 outline-me-orange-200 hover:bg-me-gray-300 hover:text-black"
      ref={refCustomSelect}
    >
      {seletecText}
      <span
        alt="Icon arrow down"
        className="border-[4px] border-b-0 border-transparent border-t-me-gray-500 hover:border-t-black"
      >
        <select
          value={selected}
          className="rounded-xs absolute left-0 top-0 h-full w-full cursor-pointer rounded-l-md opacity-0"
          onFocus={toggleCustomSelectOutline}
          onBlur={toggleCustomSelectOutline}
          onChange={(e) => setSelected(e.target.value)}
        >
          {renderOptions()}
        </select>
      </span>
    </Link>
  );
}

function InputSearch({ refCustomSearchInput }) {
  function toggleCustomSearchInputOutline() {
    refCustomSearchInput.current.classList.toggle("outline");
  }

  return (
    <input
      type="text"
      placeholder="Search Amazon"
      className="grow rounded-none p-2 text-[15px] outline-none [-webkit-appearance:none] [-webkit-border-radius:0] placeholder:text-me-gray-450"
      onFocus={toggleCustomSearchInputOutline}
      onBlur={toggleCustomSearchInputOutline}
    />
  );
}

function ButtonSearch() {
  return (
    <button className="focus::bg-me-orange-60 rounded-r-md bg-me-orange-50 hover:bg-me-orange-60">
      <IconSprite name="2x-search" alt="Icon search" />
    </button>
  );
}

function SearchBox({ className }) {
  const refCustomSearchInput = useRef();

  return (
    <div className={className}>
      <div
        className="flex rounded-md outline-2 outline-offset-0 outline-me-orange-200"
        ref={refCustomSearchInput}
      >
        <CustomSelectButton />
        <InputSearch refCustomSearchInput={refCustomSearchInput} />
        <ButtonSearch />
      </div>
    </div>
  );
}

export default SearchBox;
