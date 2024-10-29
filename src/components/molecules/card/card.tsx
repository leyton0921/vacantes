import DivContentText from "@/components/atoms/divcontenttext/content-text";
import Heading from "@/components/atoms/heading/heading";
import React from "react";
import styles from "./card.module.scss";
import Text from "@/components/atoms/text/text";
import Button from "@/components/atoms/button/button";
import { GoPencil } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { CompanieService } from "@/services/companie.services";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { VacancieService } from "@/services/vacancies.services";

interface ICardsProps {
    id: string;
    tittle: string;
    description: string;
    contact: string;
}
const Card: React.FC<ICardsProps> = ({ id, tittle, description, contact }) => {
const currentPath = usePathname();
const useCompaniServer = new CompanieService();
const useVacanciesServer = new VacancieService()
const router = useRouter();

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
        console.error("Error deleting coder:", error);
    } 

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
                <Button className={`${currentPath === "/companie"?styles.buttonEdit:styles.buttonEditVacancies}`} ><GoPencil/></Button>
                    <Button className={styles.buttonDelete} onClick={()=>`${currentPath === "/companie"?handleDeleteCompanie(id):handleDeleteVacancie(id)}`}><FaRegTrashAlt/></Button>

                </div>

            </DivContentText>
        </>
    )
}

export default Card