import { Link } from "react-router-dom";
import LogoBase from "./LogoBase";

function Logo({ className = "" }) {
  return (
    <Link to="/" className={`px-3 ${className}`}>
      <LogoBase logoName="logo" className="mt-[12px]" />
    </Link>
  );
}

export default Logo;
