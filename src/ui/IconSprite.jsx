function IconSprite({ name, className, ...props }) {
  const globalStyles = {
    "2x-logo": "w-[97px] h-[30px] bg-[length:350px] bg-[-10px_-51px]",
    "2x-location": "w-[15px] h-[18px] bg-[length:350px] bg-[-71px_-378px]",
    "2x-search": "w-[45px] h-[40px] bg-[length:350px] bg-[2px_-280px]",
    "2x-cart": "w-[38px] h-[26px] bg-[length:350px] bg-[-10px_-340px]",
    "2x-profile": "w-[25px] h-[27px] bg-[length:350px] bg-[-137px_-339px]",
    "2x-arrow-right": "w-[10px] h-[14px] bg-[length:350px] bg-[-137px_-288px]",
    "2x-arrow-left": "w-[16px] h-[16px] bg-[length:350px] bg-[-137px_-308.5px]",
    "2x-arrow-right-black":
      "w-[10px] h-[14px] bg-[length:350px] bg-[-166px_-288px]",
  };

  const global1xStyles = {
    "1x-ads-privacy": "w-[29px] h-[14px] bg-[-136px_-380px]",
    "1x-logo": "w-[76px] h-[23px] bg-[-10px_-90px]",
  };

  const flagStyles = {
    "flag-en":
      "w-[24px] h-[18px] bg-[length:194px_295px] bg-[0px_-129px] scale-90",
    "flag-vn": "w-[15px] h-[18px] bg-[length:350px] bg-[-71px_-378px]",
    "flag-globe": "w-[15px] h-[15px] bg-[length:194px_295px] bg-[-77px_-24px]",
    "flag-up-down-arrow":
      "w-[12px] h-[12px] bg-[length:194px_295px] bg-[-77px_-80px]",
    "flag-globe-gray":
      "w-[15px] h-[15px] bg-[length:194px_295px] bg-[-77px_-51px]",
  };

  const styleOptions = {
    flag: {
      backgroundPattern: "bg-flag-sprite",
      styles: flagStyles,
    },
    "1x": {
      backgroundPattern: "bg-global-sprite-1x",
      styles: global1xStyles,
    },
    "2x": {
      backgroundPattern: "bg-global-sprite",
      styles: globalStyles,
    },
  };

  const prefixStyle = name.split("-")[0];
  const bgStyle = styleOptions?.[prefixStyle]?.backgroundPattern;
  const styleClassName = styleOptions?.[prefixStyle]?.styles[name];

  const baseStyle = "float-left";

  const combineClassName = `${bgStyle} ${baseStyle} ${styleClassName} ${className}`;

  return <span className={combineClassName} {...props}></span>;
}

export default IconSprite;
