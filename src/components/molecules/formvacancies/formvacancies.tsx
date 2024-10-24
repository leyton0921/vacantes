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
                <Button className={styles.closeIcon} onClick={onClose}>
                    <IoMdClose size={24} />
                </Button>

                <Caption className={styles.title}>Agregar Vacante</Caption>

                <form onSubmit={handleSubmit}>
                    <div>
                        <Label className={styles.label}>Título</Label>
                        <Input
                            className={styles.input}
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div>

                        <Label className={styles.label}>Descripción</Label>
                        <textarea
                            className={styles.textarea}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div>

                        <Label className={styles.label}>Estado</Label>
                        <select
                            className={styles.select}
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="OPEN">OPEN</option>
                            <option value="CLOSED">CLOSED</option>
                        </select>
                    </div>

                    <div>

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
                    </div>

                    <div>
                        <Button type="submit" className={styles.submitButton}>Agregar</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormVacancies;
