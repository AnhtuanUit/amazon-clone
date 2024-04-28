function FlagIcon({ countryCode, className, ...props }) {
  const flagStyles = {
    en: "w-[24px] h-[18px] bg-[length:194px_295px] bg-[0px_-130px]",
    vn: "w-[15px] h-[18px] bg-[length:350px] bg-[-71px_-378px]",
  };

  const baseStyle = "bg-flag-sprite float-left";
  const combineClassName = `${baseStyle} ${flagStyles[countryCode]} ${className}`;

  return <span className={combineClassName} {...props}></span>;
}

export default FlagIcon;
