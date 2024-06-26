import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pingRoute from "./routes/ping";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use(cors());

app.use(pingRoute);

app.listen(port, () => {
  console.log(`Server successfully started on port ${port}`);
});