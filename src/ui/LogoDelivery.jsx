import LogoBase from "./LogoBase";

function LogoDelivery({ className = "" }) {
  return (
    <div
      className={`my-2 flex cursor-pointer items-center gap-1 px-3 ${className}`}
    >
      <span className="mt-3">
        <LogoBase logoName="position" />
      </span>
      <div className="flex flex-col text-white ">
        <span className="text-xs font-medium leading-4 text-gray-400">
          Delliver to
        </span>
        <span className="text-base font-bold  leading-4">Vietnam</span>
      </div>
    </div>
  );
}

export default LogoDelivery;
