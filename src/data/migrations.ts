import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const criarTabelas = () => connection.raw(`
    CREATE TABLE IF NOT EXISTS LabeSystem_Turma (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        module INT DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS LabeSystem_Estudante (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (turma_id) REFERENCES LabeSystem_Turma (id)
    );

    CREATE TABLE IF NOT EXISTS LabeSystem_Hobby (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS LabeSystem_Estudante_Hobby (
        id VARCHAR(255) PRIMARY KEY,
        estudante_id VARCHAR(255) NOT NULL,
        hobby_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (estudante_id) REFERENCES LabeSystem_Estudante (id),
        FOREIGN KEY (hobby_id) REFERENCES LabeSystem_Hobby (id)
    );

    CREATE TABLE IF NOT EXISTS LabeSystem_Docente (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (turma_id) REFERENCES LabeSystem_Turma (id)
    );

    CREATE TABLE IF NOT EXISTS LabeSystem_Especialidade (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS LabeSystem_Docente_Especialidade (
        id VARCHAR(255) PRIMARY KEY,
        docente_id VARCHAR(255) NOT NULL,
        especialidade_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (docente_id) REFERENCES LabeSystem_Docente (id),
        FOREIGN KEY (especialidade_id) REFERENCES LabeSystem_Especialidade (id)
    );
`)
    .then(() => { console.log("Tabela Criada!") })
    .catch(printError)

criarTabelas()