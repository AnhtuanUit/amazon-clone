import { HiOutlineBars3 } from "react-icons/hi2";
import SearchBox from "./SearchBox";
import NavItem from "./NavItem";
import IconSprite from "./IconSprite";

function Header({ onOpenMenu }) {
  return (
    <header className="flex flex-col">
      <nav className="flex items-stretch gap-x-0.5 bg-me-darkblue-500 px-2.5 py-1">
        <NavItem logo={true} className="pl-4px py-1 pr-[2px]" />
        <NavItem
          iconLeft="location"
          textTop={<span className="text-me-gray-300">Deliver to</span>}
          textBottom="Vietnam"
        />
        <SearchBox className="mx-3 grow self-center" />
        <NavItem iconLeft="flag-en" textBottom="EN" iconArrowDown={true} />
        <NavItem
          textTop="Hello, Do"
          textBottom="Account & Lists"
          iconArrowDown={true}
        />
        <NavItem textTop="Returns" textBottom="& Orders" />
        <NavItem
          iconLeft={
            <div className="relative">
              <span className="absolute left-[16.5px] top-[-5px] text-base font-bold leading-none text-me-orange-200">
                3
              </span>
              <IconSprite name="cart" alt="Icon cart" />
            </div>
          }
          textBottom="Cart"
          gap="gap-0"
        />
      </nav>

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
