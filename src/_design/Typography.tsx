import { Bool } from "@/_types/bool_type";
import { String } from "@/_types/string_type";
import clsx from "clsx";

interface TypographieProps {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontFamily: "Inter";
  isBold?: Bool;
  color: "white" | "black" | "neon";
  className?: String;
}

export const Typographie = ({
  children,
  variant: Variant,
  color,
  fontFamily,
  isBold = false,
  className,
}: TypographieProps) => {
  let variantSwitcher: string = "";
  let fontFamilySwitcher: string = "";
  let colorSwitcher: string = "";

  switch (Variant) {
    case "h1":
      variantSwitcher = "text-h1 leading-h1";
      break;
    case "h2":
      variantSwitcher = "text-h2 leading-h2";
      break;
    case "h3":
      variantSwitcher = "text-h3 leading-h3";
      break;
    case "h4":
      variantSwitcher = "text-h4 leading-h4";
      break;
    case "h5":
      variantSwitcher = "text-h5 leading-h5";
      break;
    case "h6":
      variantSwitcher = "text-h6 leading-h6";
      break;
  }

  switch (fontFamily) {
    case "Inter":
      isBold
        ? (fontFamilySwitcher = "font-inter font-bold")
        : (fontFamilySwitcher = "font-inter font-normal");
      break;
  }

  switch (color) {
    case "white":
      colorSwitcher = "text-white";
      break;
    case "black":
      colorSwitcher = "text-black";
      break;
    case "neon":
      colorSwitcher = "text-primary";
      break;
  }

  return (
    <Variant
      className={clsx(
        variantSwitcher,
        fontFamilySwitcher,
        colorSwitcher,
        className
      )}
    >
      {children}
    </Variant>
  );
};
