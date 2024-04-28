import { Link } from "react-router-dom";
import IconSprite from "./IconSprite";

function CartButton({ className }) {
  const combineClassName = `flex cursor-pointer items-center pt-1 group ${className}`;

  return (
    <Link className={combineClassName}>
      <div className="flex items-end">
        {/* Start - Cart Icon */}
        <div className="relative mb-1 group-hover:pt-[1px] group-focus:pt-[1px]">
          <span className="text-me-orange-200 absolute left-[17px] top-[-2px] text-base font-bold leading-none group-hover:top-[-3px] group-focus:top-[-3px]">
            0
          </span>
          <IconSprite name="cart" alt="Icon cart" />
        </div>
        {/* End - Cart Icon */}
        <span className="text-sm font-bold text-white">Cart</span>
      </div>
    </Link>
  );
}

export default CartButton;
