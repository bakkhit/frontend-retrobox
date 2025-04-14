import { Number } from "@/_types/num_type";

interface ContainerProps {
  paddingX?: Number;
  paddingY?: Number;
  children: React.ReactNode;
  className?: string;
}

export const Container = ({
  paddingX,
  paddingY,
  children,
  className,
}: ContainerProps) => {
  const style = {
    padding: `${paddingY}px ${paddingX}px`,
  };

  return (
    <section className={className} style={style}>
      {children}
    </section>
  );
};
