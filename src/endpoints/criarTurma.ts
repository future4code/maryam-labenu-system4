import { connection } from "../data/connection";
import { Request, Response } from "express";
import { Turma } from "../types";

export default async function criarTurma(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { nome, docentes, estudantes, modulo } = req.body;

    if (!nome || !docentes || !estudantes || !modulo) {
      throw new Error("Está faltando parâmetros.");
    }

    const turmas: Turma = {
      id: Date.now().toString(),
      nome,
      docentes,
      estudantes,
      modulo,
    };

    await connection("Turma").insert(turmas);
    res.status(200).send("Turma criada com sucesso!");
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}
