import styles from "./div.module.scss";
import Panel from "@/components/organisms/panel/panel";
import Tittle from "@/components/atoms/tittle/tittle";
import React ,{ ReactNode } from "react";

interface IDivProps{

    children:ReactNode
}
const Div:React.FC<IDivProps>= ({children}) => {
    return (
        <div className={styles.divContainer}>
            <Tittle className={styles.tittle}>{"Panel de Administración"}</Tittle>
            <Panel />
            {children}

        </div>
    )

}

export default Div