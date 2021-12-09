import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Turma } from "../types";

const getTurma = async (req: Request, res: Response) => {
  try {
    const turmas: Turma[] = await connection("Turma");
    res.send(turmas);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};

export default getTurma;
