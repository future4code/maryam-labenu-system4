import { connection } from "../data/connection"
import { Request, Response } from "express"
import { Turma } from "../types"

export const buscarTurma = async (req: Request, res: Response) => {
  try {
    const turmas: Turma[] = await connection("LabeSystem_Turma")
    res.send(turmas)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
}