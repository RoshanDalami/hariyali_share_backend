import express from "express";
import {
  CreateAdmin,
  LoginAdmin,
  admin,
} from "../controller/admin.controller.js";

const AdminRouter = express.Router();

AdminRouter.route("/createAdmin").post(CreateAdmin);
AdminRouter.route("/adminLogin").post(LoginAdmin);
AdminRouter.route("/me").get(admin);

export default AdminRouter;
