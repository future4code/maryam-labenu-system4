import { app } from "./app";
import { Request, Response } from "express";
import criarTurma from "./endpoints/turma/criarTurma";
import buscarTurmaAtiva from "./endpoints/turma/buscarTurmaAtiva";
import mudarTurmaDeModulo from "./endpoints/turma/mudarTurmaDeModulo";
import criarEstudante from "./endpoints/estudante/criarEstudante";
import buscarEstudantePorNome from "./endpoints/estudante/buscarEstudantePorNome";
import mudarEstudanteDeTurma from "./endpoints/estudante/mudarEstudanteDeTurma";

// Teste
app.get("/", (req: Request, res: Response) => {
  res.send("Partiu Projeto!");
});

app.post("/turma", criarTurma);
app.get("/turma", buscarTurmaAtiva);
app.put("/turma/:id", mudarTurmaDeModulo);

app.post("/estudante", criarEstudante);
app.get("/estudante", buscarEstudantePorNome);
app.put("/estudante/:id", mudarEstudanteDeTurma)