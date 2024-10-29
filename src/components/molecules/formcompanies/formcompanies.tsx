import React, { useState } from "react";
import styles from "./formompanie.module.scss";
import Input from "@/components/atoms/input/input";
import Button from "@/components/atoms/button/button";
import Label from "@/components/atoms/label/label";
import Overlay from "@/components/atoms/overlay/overlay";
import FormContainer from "@/components/atoms/form-container/form-cotainer";
import { CompanieService } from "@/services/companie.services";
import { useRouter } from "next/navigation";


interface IFormCompaniesProps {
    onClose: () => void;
}

const FormCompanies: React.FC<IFormCompaniesProps> = ({ onClose }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [contact, setContact] = useState('');

    const router = useRouter()

    const companieService = new CompanieService();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const newCompany = await companieService.createCompany({ name, location, contact });
            console.log('Company created:', newCompany);
            onClose()
            router.refresh();

        } catch (err) {
            console.error(err);
        } 
    };

    return (
        <Overlay>
            <FormContainer onClick={onClose} tittle="Agregar compañía">
                <form onSubmit={handleSubmit}>
                    
                    <Label className={styles.label}>Nombre</Label>
                    <Input
                        className={styles.input}
                        type="text"
                        placeHolder="Ingrese el nombre de la compañía"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Label className={styles.label}>Ubicación</Label>
                    <Input
                        className={styles.input}
                        type="text"
                        placeHolder="Ingrese la ubicación"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />

                    <Label className={styles.label}>Contacto</Label>
                    <Input
                        className={styles.input}
                        type="text"
                        placeHolder="Ingrese el contacto"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />

                    <Button type="submit" className={styles.submitButton} >
                      Agregar
                    </Button>
                </form>
            </FormContainer>
        </Overlay>
    );
};

export default FormCompanies;
