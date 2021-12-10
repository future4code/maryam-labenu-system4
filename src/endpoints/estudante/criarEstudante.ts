import { connection } from "../../data/connection"
import { Request, Response } from "express"
import { Estudante } from "../../types"

export default async function criarEstudante (req: Request, res: Response): Promise<void> {
  try {
    const { nome, email, data_nasc, turma_id } = req.body

    if (!nome || !email || !data_nasc || !turma_id) {
      throw new Error("Está faltando parâmetros!")
    }

    const estudantes: Estudante = {
      id: Date.now().toString(),
      nome,
      email,
      data_nasc,
      turma_id,
    }

    await connection("LabeSystem_Estudante").insert(estudantes)
    
    res.status(200).send("Estudante criado com sucesso!")

  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
}