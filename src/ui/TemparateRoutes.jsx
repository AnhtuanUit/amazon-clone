import { NavLink } from "react-router-dom";

function TemparateRoutes({ onCloseMenu, className }) {
  return (
    <ul
      className={`flex flex-col gap-4 px-9 py-5 ${className}`}
      onClick={onCloseMenu}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/search?k=smartphones">Search</NavLink>
      <NavLink to="/products/1">Product</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/payment">Payment</NavLink>
      <NavLink to="/orders">Orders</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </ul>
  );
}

export default TemparateRoutes;
