const Button = ({
  size = "medium",
  text,
  leadingIcon,
  trailingIcon,
  buttonClass = "",
  ...rest
}) => {
  const buttonClassBySize = () => {
    switch (size) {
      case "small":
        return "text-[10.5px] gap-2 px-5 py-2";
      case "medium":
      default:
        return "text-xs gap-3 px-7 py-3";
    }
  };
  return (
    <button
      className={`flex items-center ${buttonClassBySize()} ${buttonClass}`}
      {...rest}
    >
      {leadingIcon}
      <span>{text}</span>
      {trailingIcon}
    </button>
  );
};

export default Button;
