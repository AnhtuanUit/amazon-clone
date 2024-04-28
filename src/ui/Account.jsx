function Account({ className }) {
  const combineClassName = `flex items-center ${className}`;

  return (
    <div className={combineClassName}>
      <div className="flex cursor-pointer flex-col text-white">
        <span className="text-xs">Hello, sign in</span>
        <span className="text-sm font-bold">Account & List </span>
      </div>
    </div>
  );
}

export default Account;
