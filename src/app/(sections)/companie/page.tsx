import Div from "@/components/template/div/div";
import Head from "@/components/organisms/head/head";
import ButtonAddCompanie from "@/components/molecules/button-add-companie/button-add-companie";
import CardsCompanieTemplate from "@/components/template/cards-companie-template/cards-companie-template";


export default function Companie() {
    return (
        <>
            <Div>
            <Head title={"Compañía"}><ButtonAddCompanie/></Head>
            <CardsCompanieTemplate/>
            </Div>
        </>
    );
}