import { Link } from "react-router-dom";
import IconArrowDown from "./IconArrowDown";
import IconSprite from "./IconSprite";

const TextGroup = ({ textTop, textBottom }) => (
  <div className="flex flex-col gap-0.5">
    <span
      className={`text-xs font-medium leading-none text-me-white ${!textTop && "invisible"}`}
    >
      {textTop || "i"}
    </span>
    <span className="text-sm font-bold leading-none text-me-white">
      {textBottom}
    </span>
  </div>
);

function NavItem({
  logo = false,
  iconLeft,
  textTop,
  textBottom,
  iconArrowDown = false,
  className,
  gap = "gap-1",
  ...props
}) {
  const renderIconLeft = () =>
    typeof iconLeft === "string" ? (
      <IconSprite name={iconLeft} className="mb-0" />
    ) : (
      iconLeft
    );

  return (
    <Link
      to="#"
      className={`flex cursor-pointer items-center rounded-sm border border-transparent px-[9px] hover:border-white hover:ring-0 ${className}`}
      {...props}
    >
      {logo && (
        <IconSprite name="2x-logo" alt="Amazon logo" className="mt-[12px]" />
      )}
      <div className={`flex items-end ${gap}`}>
        {iconLeft && renderIconLeft()}
        {textBottom && <TextGroup textTop={textTop} textBottom={textBottom} />}
        {iconArrowDown && <IconArrowDown className="mb-[2px]" />}
      </div>
    </Link>
  );
}

export default NavItem;
