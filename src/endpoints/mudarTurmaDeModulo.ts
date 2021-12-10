import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function mudarTurmaDeModulo(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id, modulo } = req.body;

    if (!id || typeof modulo !== "number") {
      throw new Error("Está faltando parâmetros.");
    }

    await connection.raw(`
      UPDATE LabeSystem_Turma
      SET modulo = ${modulo}
      WHERE id = ${id}
    `);

    res.status(200).send("Sucesso! A turma avançou para um novo módulo.");
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}
