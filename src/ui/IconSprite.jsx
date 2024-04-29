function IconSprite({ name, className, ...props }) {
  const globalStyles = {
    logo: "w-[97px] h-[30px] bg-[length:350px] bg-[-10px_-51px]",
    location: "w-[15px] h-[18px] bg-[length:350px] bg-[-71px_-378px]",
    search: "w-[45px] h-[40px] bg-[length:350px] bg-[2px_-280px]",
    cart: "w-[38px] h-[26px] bg-[length:350px] bg-[-10px_-340px]",
  };

  const flagStyles = {
    "flag-en": "w-[24px] h-[18px] bg-[length:194px_295px] bg-[0px_-130px]",
    "flag-vn": "w-[15px] h-[18px] bg-[length:350px] bg-[-71px_-378px]",
  };

  const styles = name.startsWith("flag-") ? flagStyles : globalStyles;
  console.log(styles, name, name.startsWith("flag-"));
  const bgStyle = name.startsWith("flag-")
    ? "bg-flag-sprite"
    : "bg-global-sprite";

  const baseStyle = "float-left";

  const combineClassName = `${bgStyle} ${baseStyle} ${styles[name]} ${className}`;

  return <span className={combineClassName} {...props}></span>;
}

export default IconSprite;
