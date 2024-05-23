import * as dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());
import officeRoute from "./routes/office.routes.js";
import RequestRouter from "./routes/request.routes.js";
import UserRouter from "./routes/user.routes.js";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/office", officeRoute);
app.use("/api/v1/request", RequestRouter);
app.use("/api/v1/user", UserRouter);
app.get("/*", (req, res) => {
  res.status(200).json({ message: "Message form express server" });
});

export default app;
