"use client"
import Button from "../../atoms/button/button"
import styles from "./button-add-companie.module.scss"
import { IoMdAddCircleOutline } from "react-icons/io";
import FormCompanies from "../formcompanies/formcompanies";
import { useState } from "react";
import React from "react";


const ButtonAddCompanie: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button className={styles.button} onClick={handleOpenModal}>
                <IoMdAddCircleOutline /> Agregar compañía
            </Button>


            {isModalOpen && <FormCompanies onClose={handleCloseModal} />
            }
        </>
    )
}

export default ButtonAddCompanie