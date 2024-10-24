import React, { useState } from "react";
import styles from "./formompanie.module.scss";
import Input from "@/components/atoms/input/input";
import Button from "@/components/atoms/button/button";
import Caption from "@/components/atoms/caption/caption";
import Label from "@/components/atoms/label/label";
import { IoMdClose } from "react-icons/io";

interface IFormCompaniesProps {
    onClose: () => void;
}

const FormCompanies: React.FC<IFormCompaniesProps> = ({ onClose }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, location, contact });
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.formContainer}>
                <Button className={styles.closeIcon} onClick={onClose}>
                    <IoMdClose size={24} />
                </Button>

                <Caption className={styles.title}>Agregar Compañía</Caption>

                <form onSubmit={handleSubmit}>
                    <div>
                        <Label className={styles.label}>Nombre</Label>
                        <Input
                            className={styles.input}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <Label className={styles.label}>Ubicación</Label>
                        <Input
                            className={styles.input}
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label className={styles.label}>Contacto</Label>
                        <Input
                            className={styles.input}
                            type="text"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </div>

                    <div>
                        <Button type="submit" className={styles.submitButton}>Agregar</Button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormCompanies;
