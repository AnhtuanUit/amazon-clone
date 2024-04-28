import { Link } from "react-router-dom";
import IconSprite from "./IconSprite";

function Logo({ className }) {
  return (
    <Link to="/" className={`h-[50px] group ${className}`}>
        <IconSprite name="logo" alt="Amazon logo" className="mt-[12px] group-hover:mt-[11px]" />
    </Link>
  );
}

export default Logo;
