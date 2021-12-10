import { connection } from "../../data/connection"
import { Request, Response } from "express"
import { Docente } from "../../types"

export default async function buscarTurmaAtiva (req: Request, res: Response): Promise<void>  {
    try {
        const docentes: Docente[] = await connection("LabeSystem_Docente")
    
        res.send(docentes)
    
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}