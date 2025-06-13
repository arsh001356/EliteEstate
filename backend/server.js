import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import propertyRoute from "./routes/property.route.js";
import cors from "cors";
import cloudinary from "cloudinary";

const app = express();
dotenv.config();


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json());

const port = process.env.PORT || 3000;
const mongoDbUri = process.env.MONGO_DB_URI;
const Development_frontend = process.env.DEV_FRONTEND_URL;

app.use(cors({
    origin: Development_frontend,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

async function main() {
    await mongoose.connect(mongoDbUri);
    console.log("DB connected");
}
main().catch((err) => {
    console.log(err);
});

app.get("/", function (req, res) {
    res.send("API Working!");
});
app.use("/user", userRoute);
app.use("/property", propertyRoute);

app.listen(port, () => {
    console.log("server is running on port", port);
});