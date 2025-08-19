import mongoose from 'mongoose';
import Passage from 'next-auth/providers/passage';

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        Password: {
            type: String,
            required: true,
            minlength: 6
        },
        profilePic: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true
    }
);


const User = mongoose.model('User', userSchema);

export default User;