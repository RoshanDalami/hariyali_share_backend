import * as dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import { Connect } from "./db/dbConfig.js";

import http from "http";

import app from "./app.js";

Connect(process.env.MONGODB_URI);

const httpServer = http.createServer(app);

httpServer.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
