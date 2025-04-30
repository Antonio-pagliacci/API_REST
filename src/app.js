import express from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";

const app = express();

// indicar para o express ler body com json
app.use(express.json());

// ROTAS
// Lista as Seleções
app.get("/selecoes", SelecaoController.index);
// Lista as Seleções por id
app.get("/selecoes/:id", SelecaoController.show);
// Cria seleções
app.post("/selecoes", SelecaoController.store);
// Edita seleções por id
app.put("/selecoes/:id", SelecaoController.update);
// Deleta seleções por id
app.delete("/selecoes/:id", SelecaoController.delete);

export default app;
