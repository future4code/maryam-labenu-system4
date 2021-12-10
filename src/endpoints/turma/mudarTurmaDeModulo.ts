import { connection } from "../../data/connection"
import { Request, Response } from "express"

export default async function mudarTurmaDeModulo (req: Request, res: Response): Promise<void> {
  try {
    const atualizarModulo = async (id: string, modulo: number): Promise<any> => {
      await connection("LabeSystem_Turma")
        .update({
          modulo: modulo
        })
        .where("id", id)
    }

    await atualizarModulo (req.params.id, req.body.modulo)
    
    res.status(200).send("Sucesso! A turma avançou para um novo módulo.")
    
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
}