import Div from "@/components/template/div/div";
import Head from "@/components/organisms/head/head";
import ButtonAddCompanie from "@/components/molecules/button-add-companie/button-add-companie";
import CardsCompanieTemplate from "@/components/template/cards-companie-template/cards-companie-template";
import { CompanieService } from "@/services/companie.services";

interface IProps {
    searchParams: {
        page?: string;
        size?: string;
    };
}

export default async function Companie({ searchParams }: IProps) {
    const companyService = new CompanieService();

    const { page = "1", size = "3" } = searchParams;

    const pageNum = parseInt(page, 10);
    const sizeNum = parseInt(size, 10);

    const data = await companyService.findAll(pageNum, sizeNum);

    return (
        <Div>
            <Head title={"Compañía"}>
                <ButtonAddCompanie />
            </Head>
            <CardsCompanieTemplate data={data} />
        </Div>
    );
}
