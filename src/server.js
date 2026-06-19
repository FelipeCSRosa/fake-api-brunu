import express from "express";
import { products } from "./data.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Rota raiz só para indicar que a API está no ar.
app.get("/", (req, res) => {
  res.json({
    message: "API no ar 🍰",
    endpoints: ["/products", "/products/:id"],
  });
});

// Rota GET principal: retorna todos os produtos.
app.get("/products", (req, res) => {
  res.json(products);
});

// Bônus: busca um produto pelo id.
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ error: "Produto não encontrado" });
  }

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
