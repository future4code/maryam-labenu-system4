import { connection } from "../../data/connection"
import { Request, Response } from "express"

export default async function mudarEstudanteDeTurma (req: Request, res: Response): Promise<void> {
  try {
    const atualizarEstudante = async (id: string, turma_id: string): Promise<any> => {
      await connection("LabeSystem_Estudante")
        .update({
            turma_id: turma_id
        })
        .where("id", id)
    }

    await atualizarEstudante (req.params.id, req.body.turma_id)

    res.status(200).send("Sucesso! O estudante mudou de turma!")

  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
}