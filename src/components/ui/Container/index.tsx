import { ReactNode, FC } from "react";
import styles from "./styles.module.scss";

type Props = {
    children: ReactNode;
    className?: string;
};

export const Container: FC<Props> = ({ children, className }) => {
    return <div className={`${styles.container} ${className ? className : ""}`}>{children}</div>;
};
