import clsx from "clsx";

interface EllipseProps {
    left: number;
    top: number;
    backgroundColor?: string;
    className?: string;
    width: number;
    blur: number;
}

export const Ellipse = ({ left, top, backgroundColor, width, blur, className }: EllipseProps) => {
    const ellipseStyle = {
        left: `${left}vw`,
        top: `${top}vw`,
        width: `${width}vw`,
        height: `${width}vw`,
        borderRadius: "50%",
        zIndex: -1,
        backgroundColor,
        filter: `blur(${blur}px)`,
    };

    return (
        <div className={clsx(className, "absolute")} style={ellipseStyle}></div>
    );
};