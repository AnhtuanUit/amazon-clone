import CartIcon from "./icons/CartIcon";

function CartButton() {
  return (
    <div className="mr-4 flex cursor-pointer items-center justify-center text-white">
      <CartIcon />
      <span>Cart</span>
    </div>
  );
}

export default CartButton;
