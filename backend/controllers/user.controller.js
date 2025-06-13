import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";


export const signUp = async (req, res) => {
    try {
        const { username, email, password } = await req.body;
        const user = await User.findOne({ email: email })
        if (user) {
            return res.status(400).json({ msg: "user already exists" })
        }
        const hashPassword = await bcryptjs.hash(password, 10)
        const createUser = new User({
            username: username,
            email: email,
            password: hashPassword
        })
        await createUser.save()
        res.status(200).json({
            msg: "user created successfully", user: {
                _id: createUser._id,
                username: createUser.username,
                email: createUser.email,
            }
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ msg: "internal server error" })
    }

}
export const login = async (req, res) => {
    try {
        const { email, password } = await req.body;
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(400).json({
                msg: "invalid email or password"
            })
        }
        const isMatch = await bcryptjs.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                msg: "invalid email or password"

            })
        } else {
            res.status(200).json({
                msg: "Login Successfully", user: {
                    email: user.email,
                    username: user.username,
                    _id: user._id

                }
            })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ msg: "internal server error" })
    }


}