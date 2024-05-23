import { User } from "../Model/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
export async function CreateUser(req, res) {
  try {
    const { email, password, username, contactNumber } = req.body;

    if (!email || !password || !username || !contactNumber) {
      return res
        .status(400)
        .json(new ApiResponse(new ApiResponse(400, null, "All fields are required!!!")));
    }
    const user = await User.findOne({ email: email });
    if (user)
      return res
        .status(400)
        .json(new ApiResponse(400, null, "User already exist with this email"));

    const hashedPassword = await bcryptjs.hash(password,10)
    const newUser = new User({
      email,
      password:hashedPassword,
      username,
      contactNumber,
    });
    const savedUser = await newUser.save();
    return res.status(201).json(new ApiResponse(200,null, "user created successfully"));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function LoginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({email:email});
    console.log(user)
    if(!user) return res.status(400).json(new ApiResponse(400,null,"User doesn't exist with this email"));

    const isPasswordMatched = await bcryptjs.compare(password,user.password);

    if(!isPasswordMatched) return res.status(400).json(new ApiResponse(400,null,"Invalid password!!!"));
    
    const userWithoutPassword = await User.findOne({email:email}).select('-password');

    const token = await jwt.sign({
        user:{id:user._id},

    },process.env.TOKEN_SECRET,{
        expiresIn:'1d'
    });

    return res.status(200).json(new ApiResponse(200,{accessToken:token,userDetail:userWithoutPassword},"Login success"))

    return res.status(200).json(new ApiResponse(200,user,"Login success"))

  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function Me(req,res){
    try {
        const userId = req.user.id
        console.log(userId)
        const response = await User.findOne({_id:userId}).select("-password");
        return res.status(200).json(new ApiResponse(200,response,"User information generated"))

    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}

