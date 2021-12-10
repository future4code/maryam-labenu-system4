import { connection } from "../../data/connection"
import { Request, Response } from "express"
import { Turma } from "../../types"

export default async function buscarTurmaAtiva (req: Request, res: Response): Promise<void> {
  try {
    const turmas: Turma[] = await connection("LabeSystem_Turma")
    .where('modulo','>',0)
    
    res.send(turmas)
    
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
}