import React, { useState } from "react";
import styles from "./formvacancies.module.scss";
import Input from "@/components/atoms/input/input";
import Button from "@/components/atoms/button/button";
import Caption from "@/components/atoms/caption/caption";
import Label from "@/components/atoms/label/label";
import { IoMdClose } from "react-icons/io";

interface IFormVacanciesProps {
    onClose: () => void;
}

const FormVacancies: React.FC<IFormVacanciesProps> = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('OPEN');
    const [company, setCompany] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ title, description, status, company });
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.formContainer}>
                <div className={styles.closeIcon} onClick={onClose}>
                    <IoMdClose size={24} />
                </div>

                <Caption className={styles.title}>Agregar Vacante</Caption>

                <form onSubmit={handleSubmit}>
                    <Label className={styles.label}>Título</Label>
                    <Input
                        className={styles.input}
                        type="text"
                        placeHolder="Ingrese el título de la vacante"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <Label className={styles.label}>Descripción</Label>
                    <textarea
                        className={styles.textarea}
                        placeholder="Ingrese la descripción de la vacante"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <Label className={styles.label}>Estado</Label>
                    <select
                        className={styles.select}
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="OPEN">OPEN</option>
                        <option value="CLOSED">CLOSED</option>
                    </select>

                    <Label className={styles.label}>Compañía</Label>
                    <select
                        className={styles.select}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    >
                        <option value="">Selecciona una compañía</option>
                        <option value="company1">Compañía 1</option>
                        <option value="company2">Compañía 2</option>
                    </select>

                    <Button type="submit" className={styles.submitButton}>Agregar</Button>
                </form>
            </div>
        </div>
    );
};

export default FormVacancies;
