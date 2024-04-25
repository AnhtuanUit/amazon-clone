import LogoBase from "../LogoBase";

function CartIcon({ number = 0 }) {
  return (
    <div className="relative">
      <span className="absolute left-[17px] top-[-2px] text-base font-bold leading-none text-[#f08804]">
        {number}
      </span>
      <LogoBase logoName="cart" />
    </div>
  );
}

export default CartIcon;
