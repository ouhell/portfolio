import classNames from "classnames";
import React from "react";

type Props = {
  type?: React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
  className?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  error?: string;
};

const Input = ({
  type = "text",
  name,
  onChange,
  className = "",
  placeholder = "",
  value,
  error,
}: Props) => {
  return (
    <div className={className}>
      <div className="max-h-4 pl-2 h-4 text-xs text-red-500">{error}</div>
      <input
        name={name}
        value={value}
        type={type}
        autoComplete="off"
        className={classNames(
          "hover:outline-none hover:border-accent/70 focus:outline-none focus:border-accent border-2 border-gray-200/20 rounded-md bg-transparent h-8 p-1 transition-colors ease-in-out duration-150 placeholder:text-gray-400/50 pl-3 w-full",
          {
            "border-red-600": !!error,
          }
        )}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
