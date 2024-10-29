"use client";
import React from "react";
import Card from "@/components/molecules/card/card";
import Pagination from "@/components/molecules/paginaton/pagination";
import styles from "./cards-template.module.scss";
import { IGetCompanyResponse } from "@/models/companie";


interface IProps {
    data: IGetCompanyResponse;
 

}

function CardsCompanieTemplate({ data }: IProps) {

    return (
        <div className={styles.container}>
            <div className={styles.cardsGrid}>
                {data.content.map((company) => (
                    <Card
                        key={company.id}
                        id={company.id}
                        tittle={company.name}
                        description={company.location}
                        contact={company.contact}
                    />
                ))}
            </div>
      
            <Pagination
         data={data}
            />
        </div>
    );
};

export default CardsCompanieTemplate;
