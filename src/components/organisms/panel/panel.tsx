"use client"
import InputSearch from "@/components/molecules/inputsearch/inputsearch"
import Navbar from "@/components/molecules/nav/nav"
import styles from "./panel.module.scss"
import { useState } from "react"
import { Content } from "@/models/vacancies"
import { VacancieService } from "@/services/vacancies.services"
import Card from "@/components/molecules/card/card"
import { ICompany } from "@/models/companie"
import Overlay from "@/components/atoms/overlay/overlay"
import FormContainer from "@/components/atoms/form-container/form-cotainer"

interface IProps{
    data:ICompany[]
}

const Panel:React.FC<IProps> = ({data}) => {
    const [searchResults, setSearchResults] = useState<Content[]>([]);
    const vacancieService = new VacancieService();

    const handleSearch = async (query: string) => {
        console.log("Buscar:", query);
        try {
            const allVacancies = await vacancieService.findAll();
            const filteredResults = allVacancies.content.filter(vacancy =>
                vacancy.title.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredResults);
        } catch (err) {

            console.error(err);
        }

    };
    return (
        <>
       
            <div className={styles.container}>
                <Navbar />
                <InputSearch onSearch={handleSearch} />

                {searchResults.map(vacancy => (
                     
                    <div key={vacancy.id}>
                         <Card
                            key={vacancy.id}
                            id={vacancy.id}
                            tittle={vacancy.title}
                            description={vacancy.description}
                            contact={vacancy.status}
                            data={data}
                        />
                    </div>
                ))}
  
            </div>
        </>
    )
}

export default Panel