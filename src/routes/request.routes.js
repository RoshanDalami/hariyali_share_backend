import express from "express";
import { upload } from "../middleware/multer.middlerware.js";
import {
  CreateShareRequest,
  GetShareRequest,
  GetShareRequestById,
  updateOpenStatus,
  declineRequest,
  acceptRequest,
  getAcceptedRequest,
  getDeclinedRequest
} from "../controller/request.controller.js";
import { validateToken } from "../middleware/verifyToken.js";
const RequestRouter = express.Router();

RequestRouter.route("/createRequest").post(
  upload.fields([
    {
      name: "citizenshipFrontImage",
      maxCount: 1,
    },
    {
      name: "citizenshipBackImage",
      maxCount: 1,
    },
  ]),
  CreateShareRequest
);
RequestRouter.route("/getRequest").get(GetShareRequest);
RequestRouter.route("/getRequestById/:id").get(GetShareRequestById);
RequestRouter.route("/requestOpen/:id").get(updateOpenStatus);
RequestRouter.route("/declineRequest").post(declineRequest);
RequestRouter.route("/acceptRequest").post(acceptRequest);
RequestRouter.route("/getAcceptedRequest").get(getAcceptedRequest)
RequestRouter.route("/getDeclinedRequest").get(getDeclinedRequest)

export default RequestRouter;
