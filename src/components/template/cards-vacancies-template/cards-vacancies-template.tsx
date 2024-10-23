"use client";
import React, { useState } from "react";
import Card from "@/components/molecules/card/card";
import Pagination from "@/components/molecules/paginaton/pagination";
import styles from "./cards-vacancies-template.module.scss";

interface IVacancies {
    id: string;
    tittle: string;
    description: string;
    contact: string;
}

const CardsVacanciesTemplate: React.FC = () => {

const vacancie: IVacancies[] = [
    { id: "1", tittle: "Company1", description: "Mexico City", contact: "Contact: 555-0101" },
    { id: "2", tittle: "Company2", description: "Guadalajara", contact: "Contact: 555-0202" },
    { id: "3", tittle: "Company 3", description: "City 3", contact: "Contact: 555-0303" },
    { id: "4", tittle: "Company 4", description: "City 4", contact: "Contact: 555-0404" },
    { id: "5", tittle: "Company 5", description: "City 5", contact: "Contact: 555-0505" },
    { id: "6", tittle: "Company 6", description: "City 6", contact: "Contact: 555-0606" },
    { id: "7", tittle: "Company 7", description: "City 7", contact: "Contact: 555-0707" },
    { id: "8", tittle: "Company 8", description: "City 8", contact: "Contact: 555-0808" },
    { id: "9", tittle: "Company 9", description: "City 9", contact: "Contact: 555-0909" },
    { id: "10", tittle: "Company 10", description: "City 10", contact: "Contact: 555-1010" },
    { id: "11", tittle: "Company 11", description: "City 11", contact: "Contact: 555-1111" },
    { id: "12", tittle: "Company 12", description: "City 12", contact: "Contact: 555-1212" }
];


    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCompany = currentPage * itemsPerPage;
    const indexOfFirstCompany = indexOfLastCompany - itemsPerPage;
    const currentCompanies = vacancie.slice(indexOfFirstCompany, indexOfLastCompany);
    const totalPages = Math.ceil(vacancie.length / itemsPerPage);

    return (
        <div className={styles.container}>
            <div className={styles.cardsGrid}>
                {currentCompanies.map((company) => (
                    <Card
                        key={company.id}
                        id={company.id}
                        tittle={company.tittle}
                        description={company.description}
                        contact={company.contact}
                    />
                ))}
            </div>
      
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={setCurrentPage}
            />
        </div>
    );
};

export default CardsVacanciesTemplate;
