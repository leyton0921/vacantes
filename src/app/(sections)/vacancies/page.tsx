import Div from "@/components/template/div/div";
import Head from "@/components/organisms/head/head";
import ButtonAddVacancies from "@/components/molecules/button-add-vacancies/button-add-vacancies";
import CardsVacanciesTemplate from "@/components/template/cards-vacancies-template/cards-vacancies-template";
import { VacancieService } from "@/services/vacancies.services";


interface IProps {
    searchParams: {
        page?: string;  
        size?: string; 
        name?: string; 
    }
}

export default async function Vacants({ searchParams }: IProps) {
  

    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 3;


    const UseVacancieService = new VacancieService();
    const data = await UseVacancieService.findAll(page,size);
    const dataCompany = await UseVacancieService.findAllCompanies();


    return (
        <>
            <Div>
                <Head title={"Vacantes"}>
                    <ButtonAddVacancies data={dataCompany} />
                </Head>
                <CardsVacanciesTemplate data={data}  />
            </Div>
        </>
    );
}
