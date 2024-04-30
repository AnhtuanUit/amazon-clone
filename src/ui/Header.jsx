import SearchBox from "./SearchBox";
import NavItem from "./NavItem";
import IconSprite from "./IconSprite";
import IconArrowDown from "./IconArrowDown";

function BottomNavItem({ children, text, arrowDown = false, className }) {
  return (
    <li
      className={`flex items-center rounded-[3px] border border-transparent px-0.5 text-sm text-white hover:border-white ${className}`}
    >
      {text && (
        <a
          href="#"
          className="flex items-center gap-x-1 px-2 py-1.5 hover:ring-0"
        >
          <span>{text}</span>
          {arrowDown && <IconArrowDown />}
        </a>
      )}
      {children}
    </li>
  );
}

function ThreeDotsIcon() {
  return (
    <div className="flex flex-col gap-1">
      <div className="h-[2px] w-4 bg-white" />
      <div className="h-[2px] w-4 bg-white" />
      <div className="h-[2px] w-4 bg-white" />
    </div>
  );
}

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
        <BottomNavItem className="ml-2.5 py-0.5">
          <button
            className="flex items-center gap-x-1 px-2 py-1.5 hover:ring-0"
            onClick={() => onOpenMenu()}
          >
            <ThreeDotsIcon />
            <span>All</span>
          </button>
        </BottomNavItem>

        <BottomNavItem text="Today's Deals" />
        <BottomNavItem text="Buy Again" />
        <BottomNavItem text="Do's Amazon.com" />
        <BottomNavItem text="Customer Service" />
        <BottomNavItem text="Sell" />
        <BottomNavItem text="Browsing History" arrowDown={true} />
        <BottomNavItem text="Registry" />
        <BottomNavItem text="Gift Cards" />
      </ul>
    </header>
  );
}

export default Header;
