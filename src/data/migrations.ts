import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const criarTabelas = () => connection.raw(`
    CREATE TABLE IF NOT EXISTS LabeSystem_Turma (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        module INT DEFAULT 0
   );
`)
    .then(() => { console.log("Tabela Criada!") })
    .catch(printError)

criarTabelas()