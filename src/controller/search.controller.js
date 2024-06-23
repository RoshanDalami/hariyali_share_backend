import { Request } from "../Model/request.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export async function GetApprovedShare(req, res) {
  try {
    const { filter } = req.query;
    if (!filter) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "Filter parameter is required"));
    }
    const response = await Request.find({$and: [
        { isApproved: true },
        {
          $or: [
            { name: { $regex: filter, $options: 'i' } },
            { shareCertificateNumber: { $regex: filter, $options: 'i' } },
            { contactNumber: { $regex: filter, $options: 'i' } },
            { citizenshipNo: { $regex: filter, $options: 'i' } }
          ]
        }
      ]
    });
    if (!response) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "No record Found!!!"));
    }
    return res.status(200).json(new ApiResponse(200, response, "Generated"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}
