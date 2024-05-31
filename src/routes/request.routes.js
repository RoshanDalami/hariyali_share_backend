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
  GetRequestByUserId,
  GetUserShareQuantity,
  GetUserShareAmount,
  GetUserTotalRequest,
  GetUserTotalAcceptedRequest,
  GetUserTotalDeclinedRequest,
  GetUserTotalPendingRequest,
  GetUserDetails
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
      name: "voucherImage",
      maxCount: 1,
    },
    {
      name:"personalImage",
      maxCount:1
    }
  ]),
  validateToken,
  CreateShareRequest
);
RequestRouter.route("/getRequest").get(validateToken, GetShareRequest);
RequestRouter.route("/getRequestById/:id").get(GetShareRequestById);
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
RequestRouter.route("/getRequestByUser").get(validateToken, GetRequestByUserId);
RequestRouter.route("/generateCertificate/:id").get(GenerateCertificate);
RequestRouter.route("/getNewRequestCount").get(GetNewRequestCount);
RequestRouter.route("/getApprovedCount").get(GetApprovedCount);
RequestRouter.route("/getDeclinedCount").get(GetDeclinedCount);
RequestRouter.route("/getShareQuantity").get(validateToken,GetUserShareQuantity);
RequestRouter.route("/getShareAmoutnByUser").get(validateToken,GetUserShareAmount)
RequestRouter.route("/getUserShareRequest").get(validateToken,GetUserTotalRequest)
RequestRouter.route("/getUserTotalPendingRequest").get(validateToken,GetUserTotalPendingRequest)
RequestRouter.route("/getUserAcceptedRequest").get(validateToken,GetUserTotalAcceptedRequest)
RequestRouter.route("/getUserDeclinedRequest").get(validateToken,GetUserTotalDeclinedRequest)
RequestRouter.route("/getDetailsWithNumber").get(validateToken,GetUserDetails)
export default RequestRouter;
