import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined";
}

export const Button = ({
  children,
  className,
  onClick,
  color = "primary",
  variant = "contained",
}: ButtonProps) => {
  const getColorClass = () => {
    switch (color) {
      case "secondary":
        return "bg-purple-600 text-white";
      default:
        return "bg-blue-600 text-white";
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case "outlined":
        return "border border-blue-600";
      default:
        return "";
    }
  };

  return (
    <button
      className={`px-4 py-2 rounded-md ${getColorClass()} ${getVariantClass()} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
