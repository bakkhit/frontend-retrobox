import { Bool } from "@/_types/bool_type";
import { String } from "@/_types/string_type";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import clsx from "clsx";
import { Typographie } from "./Typography";

interface CTAProps {
  children: React.ReactNode;
  className?: String;
  variant: "primary" | "secondary" | "tertiary" | "quaternary";
  isDisabled?: Bool;
  isLoading?: Bool;
  onClick?: () => void;
  href?: String;
}

export const CTA = ({
  children,
  className,
  variant,
  isDisabled,
  isLoading,
  onClick,
  href,
}: CTAProps) => {
  let variantSwitcher: String = "";

  switch (variant) {
    case "primary":
      variantSwitcher =
        "w-max rounded-full border border-white py-2.5 px-4 cursor-pointer hover:opacity-70 transition-all duration-200 ease-in-out";
      break;
    case "secondary":
      variantSwitcher =
        "w-max rounded-full bg-primary py-2.5 px-4 cursor-pointer hover:opacity-70 transition-all duration-200 ease-in-out";
      break;
    case "tertiary":
      variantSwitcher =
        "w-full rounded-full bg-primary py-4 h-max px-4 cursor-pointer hover:opacity-70 transition-all duration-200 ease-in-out";
      break;
    case "quaternary":
      variantSwitcher =
        "w-full rounded-full bg-[#0A1834] py-4 h-max px-4 cursor-pointer hover:opacity-70 transition-all duration-200 ease-in-out";
      break;
  }

  return (
    <button
      className={clsx(
        isDisabled && "cursor-not-allowed opacity-50",
        className,
        variantSwitcher,
        "h-9"
      )}
      disabled={isDisabled || isLoading}
      onClick={isDisabled || isLoading ? (e) => e.preventDefault() : onClick}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        <Typographie
          href={href ?? undefined}
          variant={href ? "a" : "h6"}
          color={"white"}
          fontFamily="Inter"
        >
          {children}
        </Typographie>
      )}
    </button>
  );
};
