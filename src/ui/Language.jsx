import FlagBase from "./FlagBase";

function Language() {
  return (
    <div className="my-2 ml-4 mr-2 flex cursor-pointer items-center">
      <FlagBase iconName="en" />
      <select
        value="en"
        className="flex cursor-pointer bg-transparent text-sm font-bold text-white"
      >
        <option value="en">EN</option>
        <option value="vn">VN</option>
      </select>
    </div>
  );
}

export default Language;
