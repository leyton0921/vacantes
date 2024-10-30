"use client"
import DivContentText from "@/components/atoms/divcontenttext/content-text";
import Heading from "@/components/atoms/heading/heading";
import React, { useState } from "react";
import styles from "./card.module.scss";
import Text from "@/components/atoms/text/text";
import Button from "@/components/atoms/button/button";
import { GoPencil } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { CompanieService } from "@/services/companie.services";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { VacancieService } from "@/services/vacancies.services";
import FormVacanciesUpdate from "../formvacancieupdate/formvacancieupdate";
import { ICompany } from "@/models/companie";
import FormCompaniesUpdate from "../formcompanyupdate/formcompanyupdate";

interface ICardsProps {
    id: string;
    tittle: string;
    description: string;
    contact: string;
    data: ICompany[];
}

const Card: React.FC<ICardsProps> = ({ id, tittle, description, contact, data }) => {
    const currentPath = usePathname();
    const useCompaniServer = new CompanieService();
    const useVacanciesServer = new VacancieService();
    const router = useRouter();
    
    const [isModalOpen, setModalOpen] = useState(false);
    const [isCompanyModalOpen, setCompanyModalOpen] = useState(false); 

    const handleDeleteCompanie = async (id: string) => {
        const userConfirmed = window.confirm("Are you sure you want to delete this company?");
        if (!userConfirmed) return;

        try {
            await useCompaniServer.destroy(id);
            router.refresh();
        } catch (error) {
            console.error("Error deleting company:", error, id);
            alert("An error occurred while deleting the company. Please try again.");
        }
    };

    const handleDeleteVacancie = async (id: string) => {
        const userConfirmed = window.confirm("Are you sure you want to delete this Vacancie?");
        if (!userConfirmed) return;

        try {
            await useVacanciesServer.destroy(id);
            router.refresh();
        } catch (error) {
            console.error("Error deleting Vacancie:", error);
        }
    };

    const handleUpdateVacancie = () => {
        setModalOpen(true); 
    };

    const handleUpdateCompany = () => {
        setCompanyModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false); 
        setCompanyModalOpen(false); 
    };

    return (
        <>
            <DivContentText key={id}>
                <div className={styles.container}>
                    <Heading className={styles.title}>{tittle}</Heading>
                    <Text className={styles.text}>{description}</Text>
                    <Text className={styles.text}>{contact}</Text>
                </div>
                <div className={styles.actions}>
                    <Button 
                        className={`${currentPath === "/companie" ? styles.buttonEdit : styles.buttonEditVacancies}`} 
                        onClick={currentPath === "/companie" ? handleUpdateCompany : handleUpdateVacancie}
                    >
                        <GoPencil />
                    </Button>
                    <Button 
                        className={styles.buttonDelete} 
                        onClick={() => `${currentPath === "/companie" ? handleDeleteCompanie(id) : handleDeleteVacancie(id)}`}
                    >
                        <FaRegTrashAlt />
                    </Button>
                </div>
            </DivContentText>

            {isModalOpen && (
                <FormVacanciesUpdate vacancyId={id} onClose={closeModal} data={data} />
            )}
            {isCompanyModalOpen && (
                <FormCompaniesUpdate companyID={id} onClose={closeModal} />
            )}
        </>
    );
}

export default Card;
