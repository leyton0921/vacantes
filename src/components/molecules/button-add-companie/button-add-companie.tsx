import Button from "../../atoms/button/button"
import styles from "./button-add-companie.module.scss"
import { IoMdAddCircleOutline } from "react-icons/io";


const ButtonAddCompanie = ()=>{
    return(
        <>
        <Button className={styles.button}><IoMdAddCircleOutline/> Agregar compañía</Button></>
    )
}

export default ButtonAddCompanie