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
          iconLeft="2x-location"
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
              <IconSprite name="2x-cart" alt="Icon cart" />
            </div>
          }
          textBottom="Cart"
          gap="gap-0"
        />
      </nav>

      <ul className="flex bg-[#232f3e] pb-[1px]">
        <li
          className="flex items-center rounded-[3px] border border-transparent px-0.5 py-0.5 text-sm text-white hover:border-white
            "
        >
          <button
            className="flex items-center gap-x-1 px-3.5 py-1.5 hover:ring-0"
            onClick={() => onOpenMenu()}
          >
            <div className="flex flex-col gap-1">
              <div className="h-[2px] w-4 bg-white" />
              <div className="h-[2px] w-4 bg-white" />
              <div className="h-[2px] w-4 bg-white" />
            </div>
            <span>All</span>
          </button>
        </li>
        {[
          "Today's Deals",
          "Buy Again",
          "Do's Amazon.com",
          "Customer Service",
          "Sell",
          "Browsing History",
          "Registry",
          "Gift Cards",
        ].map((item, i) => (
          <li
            key={i}
            className="flex items-center rounded-[3px] border border-transparent px-0.5 text-sm text-white hover:border-white"
          >
            <a href="#" className="px-3.5 py-1.5 hover:ring-0">
              <span>{item}</span>
            </a>
          </li>
        ))}

        <a></a>
      </ul>
    </header>
  );
}

export default Header;
