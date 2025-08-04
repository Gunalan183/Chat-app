import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import cloudinary from "../lib/cloudinary.js";


export const signup  = async (req, res) => {
    const {fullName, email, Password, profilePic} = req.body;
    try {
        if (!fullName || !email || !Password) {
            return res.status(400).json({message: "Please fill all the fields"});
        }
        // hashing the password
        if (Password.length < 6) {
            return res.status(400).json({message: "Password must be at least 6 characters long"});
        }

        const user = await User.findOne({email});

        if (user) {
            return res.status(400).json({message: "Email already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Password, salt);

        const newUser = new User({
            fullName,
            email,
            Password: hashedPassword
        })
        if (newUser) {
           generateToken(newUser._id, res)
           await newUser.save();

              res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
              });

        } else {
            res.status(400).json({message: "Invalid user data"});
        }


    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({message: "Internal server error"});
    }
};

export const login = async (req, res) => {

    const {email, Password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: "Invalid email or password"});
        }

       const isPasswordCorrect = await bcrypt.compare(Password, user.Password)
       if (!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid Credentials"});
        }
        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
        });

    } catch (error) {
        console.log("error in login controller", error.message);
        res.status(500).json({message: "Internal server error"});
    }
};

export const logout = (req, res) => {
    
    try {
        res.cookie("jwt", "", {maxAge:0})
        res.status(200).json({message: "Logged out successfully"});
        
    } catch (error) {
        console.log("error in logout controller", error.message);
        res.status(500).json({message: "Internal server error"});  
    }
};

export const updateProfile = async (req, res) => {
    try {
        const {profilePic} = req.body;
        const userID = req.user._id; 

        if(!profilePic) {
            return res.status(400).json({message: "Please provide a profile picture URL"});
        }

        const uploadResponse = await cloundinary.uploaded.upload(profilePic)
        const updateUser = await User.findByIdAndUpdate(userID, {profilePic: uploadResponse.secure_url}, {new: true});

        res.status(200).json(updateUser);
    } catch (error) {
        console.log("error in updateProfile controller", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("error in checkAuth controller", error.message);
        res.status(500).json({message: "Internal server error"});
    }
}