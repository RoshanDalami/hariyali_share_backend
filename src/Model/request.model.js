import mongoose, { Schema } from "mongoose";

const addressSchema = new Schema({
  stateId: {
    type: Number,
  },
  districtId: {
    type: Number,
  },
  palikaId: {
    type: Number,
  },
  ward: {
    type: String,
  },
  tole: {
    type: String,
  },
  houseNo: {
    type: String,
  },
});

const nomineeSchema = new Schema({
name:{
  type:String,
  required:true 
},
pernamentAddress:addressSchema,
temporaryAddress:addressSchema,
contactNumber:{
  type:Number,
  required:true
},
email:{
  type:String,
  required:true 
},
relation:{
  type:String,
  required:true
},
citizenship:{
  type:String,
  required:true
}, 
})
const requestSchema = new Schema({
  userId:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  name: {
    type: String,
    required: true,
  },
  personalImage:{
type:String
  },
  grandFatherName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  spouseName: {
    type: String,
    
  },
  citizenshipNo: {
    type: String,
    required: true,
  },
  citizenshipFrontImage: {
    type: String,
  },
  citizenshipBackImage: {
    type: String,
  },
  email: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  shareRate: {
    type: Number,
  },
  shareQuantity: {
    type: Number,
  },
  totalShareAmount: {
    type: Number,
  },
  permanentAddress: addressSchema,
  temporaryAddress: addressSchema,
  isApproved: {
    type: Boolean,
    default: null,
  },
  isDeclined: {
    type: Boolean,
    default: null,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  shareNumberStart: {
    type: Number,
    default: 0,
  },
  shareNumberEnd: {
    type: Number,
    default: 0,
  },
  isOpened: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
  },
  identityNumber:{
    type:String, 
  },
  remarks:{
    type:String
  },
  shareCertificateNumber:{
    type:String
  },
  voucherImage:{
    type:String
  },
  isPaid:{
    type:Boolean,
    default:false
  },
  nid:{
    type:String,
  },
  dateofBirth:{
    type:String
  },
  shareApprovedDate:{
    type:String,
  },
  nominee:nomineeSchema
  
});

export const Request =
  mongoose.models.Request || mongoose.model("Request", requestSchema);
