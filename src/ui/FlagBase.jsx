const options = {
  en: {
    width: "w-[24px]",
    height: "h-[18px]",
    size: "bg-[length:194px_295px]",
    position: "bg-[0px_-130px]",
  },
  vn: {
    width: "w-[15px]",
    height: "h-[18px]",
    size: "bg-[length:350px]",
    position: "bg-[-71px_-378px]",
  },
};

function FlagBase({ iconName, className = "" }) {
  const { height, width, size, position } = options[iconName];

  const classNameTailwind = `bg-flag-pattern float-left ${height} ${width} ${size} ${position} ${className}`;

  return <span className={classNameTailwind}></span>;
}

export default FlagBase;
