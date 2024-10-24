import { ICompanie } from "@/models/companie";
import { HttpClient } from "@/utils/client-http";

export class CompanieService{

    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient()
    }

    async findAll(){
        try{
            const companie = this.httpClient.get<ICompanie[]>("cambiar")
            return companie
        }catch (error){
            console.log(error);
            throw error
        }
    };

    async destroy(id:string){
        try{
            const companie = this.httpClient.delete<ICompanie>(`cambiar/${id}`);

            return companie;
        }catch(error){
            console.log(error);
            throw error;
        }
    };

}