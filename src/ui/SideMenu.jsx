import { HiOutlineXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { fakeDataCategories } from "@src/data/sideMenuData";
import IconSprite from "./IconSprite";

function SideMenu({ isOpen, onCloseMenu }) {
  return (
    <>
      <div
        onClick={onCloseMenu}
        className={`fixed h-full w-full bg-[#000000b3] ${isOpen ? "visible opacity-100" : "invisible opacity-0"} duration-500`}
      >
        <div className="ml-3 mt-3">
          <HiOutlineXMark className="ml-80 h-8 w-40 text-white" />
        </div>
      </div>

      <aside
        className={`fixed flex h-full w-96 ${isOpen ? "translate-x-0" : "translate-x-[-100%]"} items-center bg-white duration-500`}
      >
        <div className="flex h-full w-full flex-col items-start">
          <div className="text-bold flex w-full gap-x-3 bg-me-darkblue-300 px-9 py-2.5 text-lg font-bold text-me-white">
            <IconSprite name="2x-profile" />
            <span>Hello, Do</span>
          </div>
          <div className="w-full overflow-y-scroll">
            {/* Generate categories */}
            {Object.keys(fakeDataCategories).map((categoryName, i) => (
              <div key={i} className="m-1 w-full py-2.5">
                <span className="px-9 text-lg font-bold">{categoryName}</span>
                <ul className="flex flex-col" key={i}>
                  {/* Generate sub categories */}
                  {Object.keys(fakeDataCategories[categoryName]).map(
                    (subCategoryName, i) => (
                      <li
                        key={i}
                        className="cursor-pointer px-9 hover:bg-me-gray-200"
                      >
                        <div className="flex justify-between py-3 text-sm">
                          <span>{subCategoryName}</span>
                          {Object.keys(fakeDataCategories[categoryName])
                            .length && <IconSprite name="2x-arrow-right" />}
                        </div>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <ul className="hidden flex-col gap-4 p-8">
          <NavLink to="/" onClick={onCloseMenu}>
            Home
          </NavLink>
          <NavLink to="/search?k=smartphones" onClick={onCloseMenu}>
            Search
          </NavLink>
          <NavLink to="/products/1" onClick={onCloseMenu}>
            Product
          </NavLink>
          <NavLink to="/cart" onClick={onCloseMenu}>
            Cart
          </NavLink>
          <NavLink to="/payment" onClick={onCloseMenu}>
            Payment
          </NavLink>
          <NavLink to="/orders" onClick={onCloseMenu}>
            Orders
          </NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </ul>
      </aside>
    </>
  );
}

export default SideMenu;
