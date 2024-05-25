import express from "express";
import { 
    InsertDistrict,
    InsertPalika,
    InsertState,
    GetDistrict,
    GetPalika,
    GetState
} from '../controller/officesetup.controller.js'
import {
    createFiscal,
    getFiscal,
    getFiscalYearById,
    updateFiscalYearStatus
} from '../controller/fiscal.controller.js'
const officeRoute = express.Router();

officeRoute.route('/insertState').post(InsertState)
officeRoute.route('/insertDistrict').post(InsertDistrict)
officeRoute.route('/insertPalika').post(InsertPalika)
officeRoute.route('/getState').get(GetState)
officeRoute.route('/getDistrict').get(GetDistrict)
officeRoute.route('/getPalika').get(GetPalika)
officeRoute.route('/createFiscal').post(createFiscal)
officeRoute.route('/getFiscal').get(getFiscal);
officeRoute.route('/getFiscalYearById/:id').get(getFiscalYearById);
officeRoute.route('/updateFiscalYearStatus/:id').get(updateFiscalYearStatus)
export default officeRoute