import Button from "../../atoms/button/button"
import styles from "./button-add-vacancies.module.scss"
import { IoMdAddCircleOutline } from "react-icons/io";


const ButtonAddVacancies = ()=>{
    return(
        <>
        <Button className={styles.buton}><IoMdAddCircleOutline/> Agregar vacantes</Button></>
    )
}

export default ButtonAddVacancies