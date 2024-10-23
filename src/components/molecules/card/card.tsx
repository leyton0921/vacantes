import DivContentText from "@/components/atoms/divcontenttext/content-text";
import Heading from "@/components/atoms/heading/heading";
import React from "react";
import styles from "./card.module.scss";
import Text from "@/components/atoms/text/text";
import Button from "@/components/atoms/button/button";
import { GoPencil } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface ICardsProps {
    id: string;
    tittle: string;
    description: string;
    contact: string;
}
const Card: React.FC<ICardsProps> = ({ id, tittle, description, contact }) => {
const currentPath = usePathname();

    return (
        <>
            <DivContentText key={id}>
                <div className={styles.container}>
                    <Heading className={styles.title}>{tittle}</Heading>
                    <Text className={styles.text}>{description}</Text>
                    <Text className={styles.text}>{contact}</Text>
                </div>
                <div className={styles.actions}>
                <Button className={`${currentPath === "/companie"?styles.buttonEdit:styles.buttonEditVacancies}`}><GoPencil/></Button>
                    <Button className={styles.buttonDelete}><FaRegTrashAlt/></Button>

                </div>

            </DivContentText>
        </>
    )
}

export default Card