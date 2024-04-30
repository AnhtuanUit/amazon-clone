function IconSprite({ name, className, ...props }) {
  const globalStyles = {
    "2x-logo": "w-[97px] h-[30px] bg-[length:350px] bg-[-10px_-51px]",
    "2x-location": "w-[15px] h-[18px] bg-[length:350px] bg-[-71px_-378px]",
    "2x-search": "w-[45px] h-[40px] bg-[length:350px] bg-[2px_-280px]",
    "2x-cart": "w-[38px] h-[26px] bg-[length:350px] bg-[-10px_-340px]",
  };

  const global1xStyles = {
    "1x-ads-privacy": "w-[29px] h-[14px] bg-[-136px_-380px]",
  };

  const flagStyles = {
    "flag-en": "w-[24px] h-[18px] bg-[length:194px_295px] bg-[0px_-130px]",
    "flag-vn": "w-[15px] h-[18px] bg-[length:350px] bg-[-71px_-378px]",
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
  const bgStyle = styleOptions?.[prefixStyle].backgroundPattern;
  const styleClassName = styleOptions?.[prefixStyle].styles[name];

  const baseStyle = "float-left";

  const combineClassName = `${bgStyle} ${baseStyle} ${styleClassName} ${className}`;

  return <span className={combineClassName} {...props}></span>;
}

export default IconSprite;
