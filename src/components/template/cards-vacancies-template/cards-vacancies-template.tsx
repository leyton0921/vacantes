"use client";
import React from "react";
import Card from "@/components/molecules/card/card";
import Pagination from "@/components/molecules/paginaton/pagination";
import styles from "./cards-vacancies-template.module.scss";
import { IVacancies } from "@/models/vacancies";


interface IProps {
   data: IVacancies ;

}


function CardsVacanciesTemplate({ data }: IProps) {

    console.log(data)

    return (
        <div className={styles.container}>
            <div className={styles.cardsGrid}>
                {data.content.map((vacant) => (
                        <Card
                            key={vacant.id}
                            id={vacant.id}
                            tittle={vacant.title}
                            description={vacant.description}
                            contact={vacant.status}
                        />
                    )
                )}
            </div>

                <Pagination
                data={data}
            />
        </div>

        
    );
};

export default CardsVacanciesTemplate;
