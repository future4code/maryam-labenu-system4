import { connection } from "../data/connection";
import { Request, Response } from "express";
import { Estudante } from "../types";

export const buscarEstudante = async (req: Request, res: Response) => {
  try {
    const estudantes: Estudante[] = await connection("LabeSystem_Estudante");
    res.send(estudantes);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};
