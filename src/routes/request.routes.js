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
  getDeclinedRequest,
  GenerateCertificate,
  GetApprovedCount,
  GetDeclinedCount,
  GetNewRequestCount,
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
RequestRouter.route("/getRequest").get(validateToken, GetShareRequest);
RequestRouter.route("/getRequestById/:id").get(
  validateToken,
  GetShareRequestById
);
RequestRouter.route("/requestOpen/:id").get(validateToken, updateOpenStatus);
RequestRouter.route("/declineRequest").post(validateToken, declineRequest);
RequestRouter.route("/acceptRequest").post(validateToken, acceptRequest);
RequestRouter.route("/getAcceptedRequest").get(
  validateToken,
  getAcceptedRequest
);
RequestRouter.route("/getDeclinedRequest").get(
  validateToken,
  getDeclinedRequest
);
RequestRouter.route("/generateCertificate/:id").get(GenerateCertificate);
RequestRouter.route("/getNewRequestCount").get(GetNewRequestCount);
RequestRouter.route("/getApprovedCount").get(GetApprovedCount);
RequestRouter.route("/getDeclinedCount").get(GetDeclinedCount);

export default RequestRouter;
