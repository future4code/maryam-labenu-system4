import {app} from "./app"
import {Request, Response} from "express"

// Teste
app.get("/", (req: Request, res: Response) => {
    res.send("Partiu Projeto!")
})