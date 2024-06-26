import { District } from "../Model/office/district.model.js";
import { Palika } from "../Model/office/palika.model.js";
import { State } from "../Model/office/state.model.js";
import { Request } from "../Model/request.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import { getDistrictCode } from "../utils/GetDistrictCode.js";
import { Fiscal } from "../Model/office/fiscal.model.js";
export async function CreateShareRequest(req, res) {
  try {
    const fiscalYear = await Fiscal.findOne({status:true})
    const body = req?.body;
    const userId = req.user.id;
    if (body?._id) {
      const response = await Request.findOneAndUpdate(
        { _id: body._id },
        {
          ...body,
          fiscalYear:fiscalYear._id,
          permanentAddress: JSON.parse(body.permanentAddress),
          temporaryAddress: JSON.parse(body.temporaryAddress),
          totalShareAmount: JSON.parse(body.totalShareAmount),
          nominee: JSON.parse(body?.nominee),
          userId: userId,
        },
        { new: true }
      );
      return res
        .status(200)
        .json(new ApiResponse(200, response, "Updated successfully"));
    } else {
      const frontImage = req?.files?.citizenshipFrontImage[0]?.path;
      const personalImage = req?.files?.personalImage[0]?.path;
      let voucherImage;
      if (
        req.files &&
        Array.isArray(req?.files?.voucherImage) &&
        req.files.voucherImage.length > 0
      ) {
        voucherImage = req?.files?.voucherImage[0]?.path;
      }

      const frontImageCloudinary = await uploadOnCloudinary(frontImage);
      const voucherImageCloudinary = await uploadOnCloudinary(voucherImage);
      const personalImageCloudinary = await uploadOnCloudinary(personalImage);

      const newRequest = new Request({
        ...body,
        permanentAddress: JSON.parse(body.permanentAddress),
        temporaryAddress: JSON.parse(body.temporaryAddress),
        citizenshipFrontImage: frontImageCloudinary.url,
        voucherImage: voucherImageCloudinary.url || "",
        personalImage: personalImageCloudinary?.url,
        totalShareAmount: JSON.parse(body.totalShareAmount),
        nominee: JSON.parse(body?.nominee),
        userId: userId,
      });
      const savedData = await newRequest.save();
    }

    return res
      .status(200)
      .json(new ApiResponse(200, body, "Share request created"));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GetShareRequest(req, res) {
  //
  try {
    const reponse = await Request.find({
      $and: [{ isDeclined: null, isApproved: null }],
    }).sort({ _id: "desc" });
    return res
      .status(200)
      .json(
        new ApiResponse(200, reponse, "Share request generated successfullly")
      );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GetShareRequestById(req, res) {
  try {
    const { id } = req.params;
    const responseById = await Request.findOne({ _id: id });
    // for user
    const permanentState = await State.findOne({
      stateId: responseById?.permanentAddress?.stateId,
    });
    const tempState = await State.findOne({
      stateId: responseById?.temporaryAddress?.stateId,
    });
    console.log(permanentState?.stateNameNep);
    const permanentDistrict = await District.findOne({
      districtId: responseById?.permanentAddress?.districtId,
    });
    const tempDistrict = await District.findOne({
      districtId: responseById?.temporaryAddress?.districtId,
    });
    console.log(permanentDistrict?.districtNameNep);
    const permanentPalika = await Palika.findOne({
      palikaId: responseById?.permanentAddress?.palikaId,
    });
    const tempPalika = await Palika.findOne({
      palikaId: responseById?.temporaryAddress?.palikaId,
    });
    console.log(permanentPalika?.palikaNameNep);

    // for nominee

    const nomineePermanentState = await State.findOne({
      stateId: responseById?.nominee?.permanentAddress?.stateId,
    });
    const nomineeTempState = await State.findOne({
      stateId: responseById?.nominee?.temporaryAddress?.stateId,
    });

    const nomineePermanentDistrict = await District.findOne({
      districtId: responseById?.nominee?.permanentAddress?.districtId,
    });
    const nomineeTempDistrict = await District.findOne({
      districtId: responseById?.nominee?.temporaryAddress?.districtId,
    });
    const nomineePernamentPalika = await Palika.findOne({
      palikaId: responseById?.nominee?.permanentAddress?.palikaId,
    });
    const nomineeTempPalika = await Palika.findOne({
      palikaId: responseById?.nominee?.temporaryAddress?.palikaId,
    });

    const data = {
      ...responseById?._doc,
      pernamentStateName: permanentState?.stateNameNep,
      tempStateName: tempState?.stateNameNep,
      pernamentDistrictName: permanentDistrict?.districtNameNep,
      tempDistrictName: tempDistrict?.districtNameNep,
      pernamentPalikaName: permanentPalika?.palikaNameNep,
      tempPalikaName: tempPalika?.palikaNameNep,
      nomineePernamentStateName: nomineePermanentState?.stateNameNep,
      nomineeTepmStateName: nomineeTempState?.stateNameNep,
      nomineePernamentDistrictName: nomineePermanentDistrict?.districtNameNep,
      nomineeTempDistrictName: nomineeTempDistrict?.districtNameNep,
      nomineePernamentPalikaName: nomineePernamentPalika?.palikaNameNep,
      nomineeTempPalikaName: nomineeTempPalika?.palikaNameNep,
    };

    return res
      .status(200)
      .json(new ApiResponse(200, data, "Request generated by Id"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function updateOpenStatus(req, res) {
  try {
    const { id } = req.params;
    const response = await Request.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          isOpened: true,
        },
      }
    );
    console.log(response);
    return res
      .status(200)
      .json(new ApiResponse(200, null, "Open status updated successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}
export async function declineRequest(req, res) {
  try {
    const { id, remarks } = req.body;
    const response = await Request.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          isDeclined: true,
          remarks: remarks,
        },
      }
    );
    return res
      .status(200)
      .json(new ApiResponse(200, null, "Application declined successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}
export async function GetApprovedRequestOfUser(req,res){
  try {
    const userId = req.user.id;
    const response = await Request.find({$and:[{userId:userId},{isApproved:true}]});
    if(!response ){
      return res.status(400).json(new ApiResponse(400,null,"No Record with that userId"))
    }
    console.log(response);
    return res.status(200).json(new ApiResponse(200,response,"List of Approved Request of User"))
  } catch (error) {
    return res.status(500).json(new ApiResponse(200,null,"Internal Server Error"))
  }
}

// export async function acceptRequest(req, res) {
//   try {
//     const { id, shareQuantity, shareApprovedDate } = req.body;
//     let shareNumberStart = 0;
//     let shareNumberEnd = shareQuantity;

//     const lastElement = await Request.findOne({ isApproved: true }).sort({
//       _id: -1,
//     });
//     if (lastElement) {
//       shareNumberStart = lastElement.shareNumberEnd + 1;
//       shareNumberEnd = shareNumberStart + (shareQuantity + 1);
//     }
//     const response = await Request.findOneAndUpdate(
//       { _id: id },
//       {
//         $set: {
//           isApproved: true,
//           shareNumberStart: shareNumberStart,
//           shareNumberEnd: shareNumberEnd,
//           shareApprovedDate: shareApprovedDate,
//         },
//       }
//     );
//     if (response) {
//       const response = await Request.findOne({ _id: id });
//       console.log(response);
//       const districtId = response?.permanentAddress?.districtId;
//       const code = getDistrictCode(districtId);
//       const latestRequest = await Request.find({
//         isApproved: true,
//         shareCertificateNumber: { $ne: null, $ne: "" },
//       }).sort({ shareCertificateNumber: -1 });
//       let finalCode;
//       if (latestRequest?.shareCertificateNumber != "") {
//         const latestNumber = parseInt(
//           latestRequest?.shareCertificateNumber?.split("-")[1],
//           10
//         );

//         finalCode = code + "-" + (latestNumber + 1).toString().padStart(4, "0");
//       } else {
//         finalCode = `${code}-0001`;
//       }

//       await Request.findOneAndUpdate(
//         { _id: id },
//         {
//           $set: {
//             shareCertificateNumber: finalCode,
//           },
//         },
//         { new: true }
//       );
//     }
//     return res
//       .status(200)
//       .json(new ApiResponse(200, null, "Application Accepted successfully"));
//   } catch (error) {
//     return res
//       .status(500)
//       .json(new ApiResponse(500, null, "Internal Server Error"));
//   }
// }
export async function acceptRequest(req, res) {
  try {
    const { id, shareQuantity, shareApprovedDate } = req.body;
    let shareNumberStart = 0;
    let shareNumberEnd = shareQuantity;

    // Fetch the last approved request to determine the starting share number
    const lastElement = await Request.findOne({ isApproved: true }).sort({ _id: -1 });
    if (lastElement) {
      shareNumberStart = lastElement.shareNumberEnd + 1;
      shareNumberEnd = shareNumberStart + shareQuantity;
    }

    // Update the request to be approved and set the share numbers and approval date
    const response = await Request.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          isApproved: true,
          shareNumberStart: shareNumberStart,
          shareNumberEnd: shareNumberEnd,
          shareApprovedDate: shareApprovedDate,
        },
      }
    );

    if (response) {
      const updatedRequest = await Request.findOne({ _id: id });
      console.log(updatedRequest);

      const districtId = updatedRequest?.permanentAddress?.districtId;
      const code = getDistrictCode(districtId);

      // Fetch the latest approved request with a non-null, non-empty share certificate number
      const latestRequest = await Request.find({
        isApproved: true,
        shareCertificateNumber: { $ne: null, $ne: "" },
      }).sort({ shareCertificateNumber: -1 }).limit(1);

      let finalCode;
      if (latestRequest.length > 0 && latestRequest[0].shareCertificateNumber) {
        const latestNumber = parseInt(latestRequest[0].shareCertificateNumber.split("-")[1], 10);

        if (!isNaN(latestNumber)) {
          finalCode = code + "-" + (latestNumber + 1).toString().padStart(4, "0");
        } else {
          finalCode = `${code}-0001`;
        }
      } else {
        finalCode = `${code}-0001`;
      }

      await Request.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            shareCertificateNumber: finalCode,
          },
        },
        { new: true }
      );
    }

    return res.status(200).json(new ApiResponse(200, null, "Application Accepted successfully"));
  } catch (error) {
    return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function getAcceptedRequest(req, res) {
  try {
    const response = await Request.find({ isApproved: true }).sort({
      _id: "desc",
    });
    return res
      .status(200)
      .json(
        new ApiResponse(200, response, "Accepted Share request list generated")
      );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function getDeclinedRequest(req, res) {
  try {
    const response = await Request.find({ isDeclined: true }).sort({
      _id: "desc",
    });
    return res
      .status(200)
      .json(
        new ApiResponse(200, response, "Decliend Share request list generated")
      );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GenerateCertificate(req, res) {
  try {
    const { id } = req.params;

    // Fetch the request by ID
    const response = await Request.findOne({ _id: id });
    if (!response) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Request not found"));
    }

    // Get the district ID from the request's permanent address
    const districtId = response?.permanentAddress?.districtId;
    if (!districtId) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "District ID not found in request"));
    }

    // Generate the district code
    const code = getDistrictCode(districtId);

    // Find the latest approved request to get the latest share certificate number
    const latest = await Request.find({
      isApproved: true,
      shareCertificateNumber: { $ne: null, $ne: "" },
    }).sort({ shareCertificateNumber: -1 });
    let latestRequest = latest[0];
    console.log(latestRequest);
    let finalCode;
    if (latestRequest?.shareCertificateNumber) {
      // Parse the latest share certificate number and increment it
      const latestNumber = parseInt(
        latestRequest.shareCertificateNumber.split("-")[1],
        10
      );
      const incrementedNumber = latestNumber + 1;
      finalCode = `${code}-${incrementedNumber.toString().padStart(4, "0")}`;
    } else {
      // If no previous share certificate number is found, start with 0001
      finalCode = `${code}-0001`;
    }

    console.log(finalCode);

    // Update the request with the new share certificate number
    const finalResponse = await Request.findOneAndUpdate(
      { _id: id },
      { $set: { shareCertificateNumber: finalCode } },
      { new: true }
    );

    return res
      .status(200)
      .json(new ApiResponse(200, finalResponse, "Certificate generated"));
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GetNewRequestCount(req, res) {
  try {
    const response = await Request.find({
      $and: [{ isApproved: null, isDeclined: null }],
    });
    return res
      .status(200)
      .json(new ApiResponse(200, response.length, "New request count"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GetApprovedCount(req, res) {
  try {
    const response = await Request.find({ isApproved: true });
    return res
      .status(200)
      .json(new ApiResponse(200, response.length, "Approved request count"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GetDeclinedCount(req, res) {
  try {
    const response = await Request.find({ isDeclined: true });
    return res
      .status(200)
      .json(new ApiResponse(200, response.length, "Declined request Count"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GetRequestByUserId(req, res) {
  try {
    const userId = req.user.id;
    const response = await Request.find({ userId: userId });
    return res
      .status(200)
      .json(new ApiResponse(200, response, "Request generated ..."));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GetUserShareQuantity(req, res) {
  try {
    const userId = req.user.id;
    const response = await Request.find({ userId: userId });
    const totalShare = response
      ?.map((item) => {
        return item.shareQuantity;
      })
      .reduce((acc, amount) => acc + amount, 0);

    return res
      .status(200)
      .json(new ApiResponse(200, totalShare, "Share Quantity"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GetUserShareAmount(req, res) {
  try {
    const userId = req.user.id;
    const response = await Request.find({ userId: userId });
    const totalAmount = response
      ?.map((item) => {
        return item.totalShareAmount;
      })
      .reduce((acc, amount) => acc + amount, 0);
    return res
      .status(200)
      .json(new ApiResponse(200, totalAmount, "Total share amount"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GetUserTotalRequest(req, res) {
  try {
    const userId = req.user.id;
    const response = await Request.find({ userId: userId });
    return res
      .status(200)
      .json(
        new ApiResponse(200, response?.length, "Total Share Request generated ")
      );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GetUserTotalPendingRequest(req, res) {
  try {
    const userId = req.user.id;
    const response = await Request.find({
      $and: [{ userId: userId, isDeclined: null, isApproved: null }],
    });
    return res
      .status(200)
      .json(new ApiResponse(200, response.length, "Pending request "));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GetUserTotalAcceptedRequest(req, res) {
  try {
    const userId = req.user.id;
    const response = await Request.find({
      $and: [{ userId: userId, isApproved: true }],
    });
    return res
      .status(200)
      .json(new ApiResponse(200, response?.length, "Total Accepted Request"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}
export async function GetUserTotalDeclinedRequest(req, res) {
  try {
    const userId = req.user.id;
    const response = await Request.find({
      $and: [{ userId: userId, isDeclined: true }],
    });
    return res
      .status(200)
      .json(new ApiResponse(200, response?.length, "Total Accepted Request"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GetUserDetails(req, res) {
  try {
    const { certificateNumber, contactNumber } = req.query;
    const response = await Request.findOne({
      $and: [
        {
          shareCertificateNumber: certificateNumber.trim(),
          contactNumber: contactNumber.trim(),
        },
      ],
    });
    if (!response) {
      return res.status(400).json(new ApiResponse("Invalid details"));
    }
    return res
      .status(200)
      .json(
        new ApiResponse(200, response, "Generated with certificate Numeber and")
      );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}
export async function DeleteRequest(req, res) {
  try {
    const { id } = req.params;
    const response = await Request.findOneAndDelete({ _id: id });
    return res
      .status(200)
      .json(new ApiResponse(200, { success: true }, "Deleted successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}
