const options = {
  logo: {
    width: "w-[97px]",
    height: "h-[30px]",
    size: "bg-[length:350px]",
    position: "bg-[-10px_-51px]",
  },
  position: {
    width: "w-[15px]",
    height: "h-[18px]",
    size: "bg-[length:350px]",
    position: "bg-[-71px_-378px]",
  },
  search: {
    width: "w-[45px]",
    height: "h-[40px]",
    size: "bg-[length:350px]",
    position: "bg-[2px_-280px]",
  },
  arrowDown: {
    width: "w-[0px]",
    height: "h-[0px]",
    size: "bg-[length:350px]",
    position: "bg-[0_1000px]",
  },
  cart: {
    width: "w-[38px]",
    height: "h-[26px]",
    size: "bg-[length:350px]",
    position: "bg-[-10px_-340px]",
  },
};

function LogoBase({ logoName, className = "" }) {
  const { height, width, size, position } = options[logoName];

  const classNameTailwind = `bg-logo-pattern float-left ${height} ${width} ${size} ${position} ${className}`;

  return <span className={classNameTailwind}></span>;
}

export default LogoBase;
