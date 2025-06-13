import Property from "../models/property.model.js";
import cloudinary from "cloudinary";
import fs from "fs";

export const addProperty = async (req, res) => {
    try {
        let imageUrl = req.body.image;
        if (req.file) {
            const result = await cloudinary.v2.uploader.upload(req.file.path, {
                folder: "properties",
            });
            imageUrl = result.secure_url;
            try {
                fs.unlinkSync(req.file.path);
            } catch (unlinkError) {
                console.error("Failed to delete file:", unlinkError.message);
            }
        }
        const { title, location, price, bedRoom, bathRoom, car, carpetArea, description, createdBy, contactPhone } = req.body;
        const newProperty = new Property({
            image: imageUrl,
            title,
            location,
            price,
            bedRoom,
            bathRoom,
            car,
            carpetArea,
            description,
            contactPhone,
            createdBy: createdBy || undefined,
        });
        await newProperty.save();
        res.status(201).json({ msg: "Property added successfully", property: newProperty });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};

export const getProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};

export const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate("createdBy", "username email");
        if (!property) {
            return res.status(404).json({ msg: "Property not found" });
        }
        res.status(200).json(property);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};