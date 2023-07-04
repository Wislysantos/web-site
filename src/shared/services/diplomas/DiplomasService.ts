import { Enviroment } from "../../environment"
import { Api } from "../axios-config"

export interface IListagemDiploma{
    id: number,
    img: string,
    titulo: string,
    paragrafo: string
}

interface IDetalheDiploma{
    id: number,
    img: string,
    titulo: string,
    paragrafo: string
}

type TDiplomasComTotalCount = {
    data: IListagemDiploma[];
    totalCount: number;
}

const getAll = async (page = 1): Promise<TDiplomasComTotalCount | Error> => {
    try {
        const urlRelativa = `/diplomas?_page=${page}&_limit=${Enviroment.LIMITE_DE_LINHA}`

        const { data, headers } = await Api.get(urlRelativa)
        if(data){
            return{
                data,
                totalCount: Number(headers['x-total-count'] || Enviroment.LIMITE_DE_LINHA),
            }
        }
        return new Error('Erro ao listar os registros.')
    } catch (error) {
        console.error(error)
        return new Error((error as {message: string}).message || 'Erro ao listar os registros.')
    }
}

const getById = async (id : number): Promise<IDetalheDiploma | Error> => {
   try {
        const urlRelativa = `/diplomas/${id}`

        const {data} = await Api.get(urlRelativa)

        if(data){
            return data            
        }
        return new Error('Error ao listar os registro.')
   } catch (error) {
        console.error(error)
        return new Error((error as {message: string}).message || 'Error ao listar os registro.')
   }
}

export const DiplomasService = {
    getAll,
    getById
}