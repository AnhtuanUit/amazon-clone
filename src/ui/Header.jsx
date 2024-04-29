import { HiOutlineBars3 } from "react-icons/hi2";
import Logo from "./Logo";
import LogoDelivery from "./LogoDelivery";
import SearchBox from "./SearchBox";
import Language from "./Language";
import Account from "./Account";
import Order from "./Order";
import CartButton from "./CartButton";

function Header({ onOpenMenu }) {
  const itemHoverClassName =
    "border border-transparent hover:border-white rounded-sm px-2 hover:ring-0";

  return (
    <header className="flex flex-col">
      <div className="bg-me-darkblue-500 flex items-stretch gap-x-0.5 p-1">
        <Logo className={itemHoverClassName} />
        <LogoDelivery className={itemHoverClassName} />
        <SearchBox className="mx-3 grow self-center" />
        <Language className={itemHoverClassName} />
        <Account className={itemHoverClassName} />
        <Order className={itemHoverClassName} />
        <CartButton className={itemHoverClassName} />
      </div>

      <div className="flex bg-[#232f3e]">
        <button
          className="flex items-center text-white"
          onClick={() => onOpenMenu()}
        >
          <HiOutlineBars3 className="inline-block h-8 w-8" />
          <span>All</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
