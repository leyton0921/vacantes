import Div from "@/components/template/div/div";
import Head from "@/components/organisms/head/head";
import ButtonAddVacancies from "@/components/molecules/button-add-vacancies/button-add-vacancies";
import CardsVacanciesTemplate from "@/components/template/cards-vacancies-template/cards-vacancies-template";


export default function Vacants() {
    return (
        <>
            <Div>
            <Head title={"Vacantes"}><ButtonAddVacancies/></Head>
            <CardsVacanciesTemplate/>
            </Div>
        </>
    );
}