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
    }
  }

export default async function Companie({ searchParams}: IProps) {
    const UseCompanyService = new CompanieService()

    const params = await searchParams;

    const page = params.page ? parseInt(params.page) : 1;
    const size = params.size ? parseInt(params.size) : 3;

    const data = await UseCompanyService.findAll(page,size)

 



    return (
        <>
            <Div>
            <Head title={"Compañía"}><ButtonAddCompanie/></Head>
            <CardsCompanieTemplate data={data} />
            </Div>
        </>
    );
}