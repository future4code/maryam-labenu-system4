import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Estudante } from "../types";

export default async function createStudent(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { nome, email, data_nasc, turma_id, hobbies } = req.body;

    if (!nome || !email || !data_nasc || turma_id || !hobbies) {
      throw new Error("Está faltando parâmetros.");
    }

    const estudantes: Estudante = {
      id: Date.now().toString(),
      nome,
      email,
      data_nasc,
      turma_id,
      hobbies,
    };

    await connection("Estudante").insert(estudantes);
    res.status(200).send("Estudante criado com sucesso!");
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}
