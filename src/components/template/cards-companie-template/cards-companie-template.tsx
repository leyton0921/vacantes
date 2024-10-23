// templates/cards-template/CardsCompanieTemplate.tsx
"use client";
import React, { useState } from "react";
import Card from "@/components/molecules/card/card";
import Pagination from "@/components/molecules/paginaton/pagination";
import styles from "./cards-template.module.scss";

interface ICompany {
    id: string;
    tittle: string;
    description: string;
    contact: string;
}

const CardsCompanieTemplate: React.FC = () => {
    const companies: ICompany[] = [
        { id: "1", tittle: "Compañía1", description: "Ciudad de México", contact: "Contacto: 555-0101" },
        { id: "2", tittle: "Compañía2", description: "Guadalajara", contact: "Contacto: 555-0202" },
        { id: "3", tittle: "Compañía 3", description: "Ciudad 3", contact: "Contacto: 555-0303" },
        { id: "4", tittle: "Compañía 4", description: "Ciudad 4", contact: "Contacto: 555-0404" },
        { id: "5", tittle: "Compañía 5", description: "Ciudad 5", contact: "Contacto: 555-0505" },
        { id: "6", tittle: "Compañía 6", description: "Ciudad 6", contact: "Contacto: 555-0606" },
        { id: "7", tittle: "Compañía 7", description: "Ciudad 7", contact: "Contacto: 555-0707" },
        { id: "8", tittle: "Compañía 8", description: "Ciudad 8", contact: "Contacto: 555-0808" },
        { id: "9", tittle: "Compañía 9", description: "Ciudad 9", contact: "Contacto: 555-0909" },
        { id: "10", tittle: "Compañía 10", description: "Ciudad 10", contact: "Contacto: 555-1010" },
        { id: "11", tittle: "Compañía 11", description: "Ciudad 11", contact: "Contacto: 555-1111" },
        { id: "12", tittle: "Compañía 12", description: "Ciudad 12", contact: "Contacto: 555-1212" }
    ];

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCompany = currentPage * itemsPerPage;
    const indexOfFirstCompany = indexOfLastCompany - itemsPerPage;
    const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany);
    const totalPages = Math.ceil(companies.length / itemsPerPage);

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

export default CardsCompanieTemplate;
