import { HiOutlineXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function SideMenu({ isOpen, onCloseMenu }) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onCloseMenu}
          className="fixed h-screen w-full bg-black opacity-70 transition-opacity"
        >
          <HiOutlineXMark className="ml-80 h-8 w-8 text-white  transition-opacity" />
        </div>
      )}

      <aside
        className={`fixed flex h-screen w-80 ${isOpen ? "translate-x-0" : "translate-x-[-100%]"} items-center bg-white duration-500`}
      >
        <ul className="flex flex-col gap-4 p-8">
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
        </ul>
      </aside>
    </>
  );
}

export default SideMenu;
