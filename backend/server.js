import express from "express";

import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config({ path: "../.env" });
connectDB();
const port = process.env.PORT || 5000;

console.log(process.env.PORT, "PORTTT");

const app = express();

app.get("/", (req, res) => {
  res.send(`Api is running ...`);
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
