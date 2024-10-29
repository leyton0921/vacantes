import Div from "@/components/template/div/div";
import Head from "@/components/organisms/head/head";
import ButtonAddCompanie from "@/components/molecules/button-add-companie/button-add-companie";
import CardsCompanieTemplate from "@/components/template/cards-companie-template/cards-companie-template";
import { CompanieService } from "@/services/companie.services";

interface IProps {
    searchParams: {
        page?: string;
        size?: string;
        name?: string;
    };
}

export default async function Companie({ searchParams }: IProps) {
    const companyService = new CompanieService();

   
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 3;

    const data = await companyService.findAll(page, size);

    return (
        <>
            <Div>
                <Head title={"Compañía"}>
                    <ButtonAddCompanie />
                </Head>
                <CardsCompanieTemplate data={data} />
            </Div>
        </>
    );
}
