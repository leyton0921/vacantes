import React from "react";
import styles from "./content-text.module.scss";

interface DivProps{
	children: React.ReactNode;

}

const DivContentText :React.FC<DivProps> = ({children}) => {
    return(
        <div className={styles.divContainer}>
            {children}
     </div>
    )
  
}

export default DivContentText