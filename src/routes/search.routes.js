import express from "express";

import {
    GetApprovedShare
} from '../controller/search.controller.js';

const SearchRoutes = express.Router();


SearchRoutes.route('/getapproved').get(GetApprovedShare);

export default SearchRoutes