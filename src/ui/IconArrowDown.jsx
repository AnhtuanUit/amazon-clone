function IconArrowDown({
  color = "border-t-me-gray-400",
  className,
  ...props
}) {
  return (
    <span
      alt="Icon arrow down"
      className={`border-[4px] border-b-0 border-transparent ${color} ${className} inline-block`}
      {...props}
    />
  );
}

export default IconArrowDown;
