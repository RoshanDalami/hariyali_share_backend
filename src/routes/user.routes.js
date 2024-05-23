import express from 'express'
import {
    CreateUser,
    LoginUser,Me
} from '../controller/user.controller.js'
import { validateToken } from '../middleware/verifyToken.js';
const UserRouter = express.Router();


UserRouter.route('/register').post(CreateUser);
UserRouter.route('/login').post(LoginUser);
UserRouter.route('/me').get(validateToken,Me)

export default UserRouter