function IconSprite({ name, className, ...props }) {
  const globalStyles = {
    logo: "w-[97px] h-[30px] bg-[length:350px] bg-[-10px_-51px]",
    location: "w-[15px] h-[18px] bg-[length:350px] bg-[-71px_-378px]",
    search: "w-[45px] h-[40px] bg-[length:350px] bg-[2px_-280px]",
    cart: "w-[38px] h-[26px] bg-[length:350px] bg-[-10px_-340px]",
  };

  const baseStyle = "bg-global-sprite float-left";
  const combineClassName = `${baseStyle} ${globalStyles[name]} ${className}`;

  return <span className={combineClassName} {...props}></span>;
}

export default IconSprite;
