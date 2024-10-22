import InputSearch from "@/components/molecules/inputsearch/inputsearch"
import Navbar from "@/components/molecules/nav/nav"
import styles from "./panel.module.scss"

const Panel = ()=>{
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <InputSearch/>

            </div>
        </>
    )
}

export default Panel