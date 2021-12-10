import { connection } from "../../data/connection"
import { Request, Response } from "express"
import { Docente } from "../../types"

export default async function criarDocente (req: Request, res: Response): Promise<void> {
    const { nome, email, data_nasc, turma_id } = req.body
    
    const formatarData = (date: string) => {
        const dia = date.split('/')[0];
        const mes = date.split('/')[1];
        const ano = date.split('/')[2];
        return `${ano}/${mes}/${dia}`;
    }

    const dataDeNascimentoFormatada = formatarData(data_nasc)

    try {
        if(!nome || !email || !data_nasc || !turma_id) { 
            throw new Error("Está faltando parâmetros!")


        }

        const docentes: Docente = {
            id: Date.now().toString(),
            nome,
            email,
            data_nasc: dataDeNascimentoFormatada,
            turma_id
        }

        await connection("LabeSystem_Docente").insert(docentes)
          
        res.status(200).send("Docente criado com sucesso!")

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}