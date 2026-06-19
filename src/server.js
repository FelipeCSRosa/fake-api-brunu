import express from "express";
import { products } from "./data.js";

const app = express();
const PORT = process.env.PORT || 3333;

// Loga todas as requisições que chegam na API.
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

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

const server = app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(
      `\n⚠️  A porta ${PORT} já está em uso por outro programa.\n` +
        `   Rode em outra porta, por exemplo:\n` +
        `   PowerShell:  $env:PORT=4567; npm start\n` +
        `   CMD:         set PORT=4567 && npm start\n`
    );
    process.exit(1);
  }
  throw err;
});
