import { Bool } from "@/_types/bool_type";
import { String } from "@/_types/string_type";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import clsx from "clsx";
import { Typographie } from "./Typography";

interface CTAProps {
  children: React.ReactNode;
  className?: String;
  variant: "primary" | "secondary";
  isDisabled?: Bool;
  isLoading?: Bool;
  onClick?: () => void;
}

export const CTA = ({
  children,
  className,
  variant,
  isDisabled,
  isLoading,
  onClick,
}: CTAProps) => {
  let variantSwitcher: String = "";

  switch (variant) {
    case "primary":
      variantSwitcher =
        "w-max h-max rounded-full border border-black py-2.5 px-4 cursor-pointer hover:opacity-70 transition-all duration-200 ease-in-out";
      break;
    case "secondary":
      variantSwitcher =
        "w-max h-max rounded-full bg-primary py-2.5 px-4 cursor-pointer hover:opacity-70 transition-all duration-200 ease-in-out";
      break;
  }

  return (
    <button
      className={clsx(
        isDisabled && "cursor-not-allowed opacity-50",
        className,
        variantSwitcher
      )}
      disabled={isDisabled || isLoading}
      onClick={isDisabled || isLoading ? (e) => e.preventDefault() : onClick}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        <Typographie
          variant="h6"
          color={variant === "primary" ? "black" : "white"}
          fontFamily="Inter"
        >
          {children}
        </Typographie>
      )}
    </button>
  );
};
