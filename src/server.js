import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import productRouter from './productRoutes.js';
import cartRouter from './cartRoutes.js';

const app = express();
const PORT = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const productFilePath = join(__dirname, 'products.json');
const cartFilePath = join(__dirname, 'cart.json');

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Bienvenido al servidor de productos y carritos!");
});

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`));
