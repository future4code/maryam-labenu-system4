import { app } from "./app";
import { Request, Response } from "express";
import criarTurma from "./endpoints/criarTurma";
import { buscarTurma } from "./endpoints/buscarTurma";
import mudarTurmaDeModulo from "./endpoints/mudarTurmaDeModulo";

// Teste
app.get("/", (req: Request, res: Response) => {
  res.send("Partiu Projeto!");
});

app.post("/turma", criarTurma);
app.get("/turma", buscarTurma);
app.put("/turma", mudarTurmaDeModulo);
