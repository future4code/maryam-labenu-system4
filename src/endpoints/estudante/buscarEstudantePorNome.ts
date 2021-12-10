import { connection } from "../../data/connection"
import { Request, Response } from "express"
import { Estudante } from "../../types"

export default async function buscarEstudantePorNome (req: Request, res: Response): Promise<void> {
  try {
    const nome = req.query.nome

    const estudantes: Estudante[] = await connection("LabeSystem_Estudante")
    .where({ nome })

    res.send(estudantes)

  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
}