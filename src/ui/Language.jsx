import { Link } from "react-router-dom";
import FlagIcon from "./FlagIcon";

function Language({ className }) {
  const combineClassName = `flex cursor-pointer items-center gap-1 ${className}`;

  return (
    <Link to="#" className={combineClassName}>
      <div className="mt-4 flex items-end gap-0.5">
        <FlagIcon
          countryCode="en"
          alt="Flag of the United States"
          className="mb-0.5 scale-90"
        />
        <span className="text-sm font-bold text-white">EN</span>
        <span
          alt="Icon arrow down"
          className="border-t-me-gray-400 mb-[5px] border-[4px] border-b-0 border-transparent"
        />
      </div>
    </Link>
  );
}

export default Language;
