import { Link } from "react-router-dom";
import IconSprite from "./IconSprite";

function LogoDelivery({ className }) {
  const combineClassName = `flex cursor-pointer items-center gap-1 ${className}`;

  return (
    <Link to="#" className={combineClassName}>
      <div className="flex items-end gap-1">
        <IconSprite
          name="2x-location"
          alt="Icon location"
          className="mb-[1.5px]"
        />
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-4 text-me-gray-300">
            Deliver to
          </span>
          <span className="text-sm font-bold leading-4 text-me-white">
            Vietnam
          </span>
        </div>
      </div>
    </Link>
  );
}

export default LogoDelivery;
