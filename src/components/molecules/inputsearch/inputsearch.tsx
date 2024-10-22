"use client"
import Input from "@/components/atoms/input/input";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import styles from "./inputsearch.module.scss"

const InputSearch = ()=>{
    const [inputValue, setInputValue] = useState("");

    return(
        <>
        <div className={styles.container}>
        <IoSearchSharp className={styles.icon}/>
            <Input type="text" placeHolder="Search..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </div>
        </>
    )
}

export default InputSearch