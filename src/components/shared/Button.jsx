const Button = ({ buttonClass, text, leadingIcon, trailingIcon }) => {
  return (
    <button
      className={`flex gap-3 text-xs text-black bg-violet-50 cursor-pointer rounded-full px-4 py-3 ${buttonClass}`}
    >
      {leadingIcon}
      <span className="font-general font-semibold uppercase tracking-wide">
        {text}
      </span>
      {trailingIcon}
    </button>
  );
};

export default Button;
