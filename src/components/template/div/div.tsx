import styles from "./div.module.scss";
import Panel from "@/components/organisms/panel/panel";

const Div = () => {
    return(
        <div className={styles.divContainer}>
        <h1>Panel de Administración</h1>
        <Panel/>
       

     </div>
    )
  
}

export default Div