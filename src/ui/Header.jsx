import { HiOutlineBars3 } from "react-icons/hi2";
import Logo from "./Logo";
import LogoDelivery from "./LogoDelivery";
import SearchBox from "./SearchBox";
import Language from "./Language";
import Account from "./Account";
import Order from "./Order";
import CartButton from "./CartButton";

function Header({ onOpenMenu }) {
  return (
    <header className="flex flex-col">
      <div className="flex bg-[#131921]">
        <Logo className="ml-2" />
        <LogoDelivery />
        <SearchBox className="grow" />
        <Language />
        <Account />
        <Order />
        <CartButton />
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
