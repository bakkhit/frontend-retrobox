import { Number } from "@/_types/num_type";

interface ContainerProps {
  paddingX?: Number;
  paddingY?: Number;
  children: React.ReactNode;
}

export const Container = ({ paddingX, paddingY, children }: ContainerProps) => {
  const style = {
    padding: `${paddingY}px ${paddingX}px`,
  };

  return <section style={style}>{children}</section>;
};
