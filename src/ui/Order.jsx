import { Link } from "react-router-dom";

function Order({ className }) {
  const combineClassName = `flex cursor-pointer items-center ${className}`;
  return (
    <Link className={combineClassName}>
      <div className="flex flex-col text-white">
        <span className="text-xs">Returns</span>
        <span className="text-sm font-bold">& Orders</span>
      </div>
    </Link>
  );
}

export default Order;
