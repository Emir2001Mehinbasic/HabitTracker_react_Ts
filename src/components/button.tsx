import type { ComponentProps} from "react";
import { twMerge } from "tailwind-merge";

export type ButtonVariant = "primary" | "secondary" | "danger";

export type ButtonProps = {
  variant?: ButtonVariant;
}& ComponentProps<"button">;

export const Button = ({variant= "primary",className , ...props  }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(`${getVarientStyles(variant)} transition-colors py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed ${className || ""}`)}
    >
      {props.children}
    </button>
  );
};

 const getVarientStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return "bg-blue-800 hover:bg-blue-600 text-white";
    case "secondary":
      return "bg-gray-800 hover:bg-gray-600  text-gray-200";
    case "danger":
      return "bg-red-800 hover:bg-red-600  text-white";
    default:
      throw new Error(`Unknown variant: ${variant satisfies never}`);
  }
}
