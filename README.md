# fake-api-brunu

API Node simples feita com Express. Tem uma rota `GET` que retorna uma lista
de sobremesas. Os dados ficam embutidos no próprio projeto
(em [src/data.js](src/data.js)) — a API **não** lê o arquivo `data.json` em
runtime, ele serviu apenas como fonte original dos dados.

## Requisitos

- Node.js 18+ (recomendado 20+)

## Como rodar

```bash
npm install
npm start
```

O servidor sobe em `http://localhost:3333` (ou na porta definida na variável de
ambiente `PORT`).

> Se a porta estiver ocupada, rode em outra:
>
> ```bash
> # PowerShell
> $env:PORT=4567; npm start
> # CMD
> set PORT=4567 && npm start
> ```

Durante o desenvolvimento, dá pra usar o modo watch (reinicia ao salvar):

```bash
npm run dev
```

## Rotas

| Método | Rota             | Descrição                          |
| ------ | ---------------- | ---------------------------------- |
| GET    | `/`              | Status da API e lista de endpoints |
| GET    | `/products`      | Retorna todos os produtos          |
| GET    | `/products/:id`  | Retorna um produto pelo `id`       |

### Exemplos

```bash
curl http://localhost:3333/products
curl http://localhost:3333/products/1
```

## Estrutura

```
.
├── src/
│   ├── data.js     # dados embutidos (copiados do data.json original)
│   └── server.js   # servidor Express com as rotas
├── data.json       # arquivo original (apenas referência, não é lido)
├── package.json
└── README.md
```
