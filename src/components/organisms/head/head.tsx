import React, { ReactNode } from "react";
import Caption from "@/components/atoms/caption/caption";
import styles from "./head.module.scss";

interface IHeadProps {
    title: string;
    children: ReactNode;

}

const Head: React.FC<IHeadProps> = ({ title, children }) => {
    return (
        <div className={styles.container}>
            <Caption className={styles.caption}>{title}</Caption>

            {children}

        </div>
    );
};

export default Head;
