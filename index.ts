import { connectToDatabase } from "./service/database.service";
import { router } from './routes/statement.route';
import express from "express";

const app = express();
const port = 8080;

connectToDatabase()
  .then(() => {
    app.use("/statement", router);

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

