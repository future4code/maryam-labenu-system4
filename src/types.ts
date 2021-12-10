export type Turma = {
  id: string;
  nome: string;
  docentes?: string[];
  estudantes?: string[];
  modulo: number;
};

export type Estudante = {
  id: string;
  nome: string;
  email: string;
  data_nasc: string;
  turma_id: number;
  hobbies?: string[];
};

export type Docente = {
  id: string;
  nome: string;
  email: string;
  data_nasc: string;
  turma_id: number;
  especialidades: string[];
};
