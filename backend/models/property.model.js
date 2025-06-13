import mongoose from "mongoose";

const propertySchema = mongoose.Schema({
    image: {
        type: String,
        required: true,
        default: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true
    },
    bedRoom: {
        type: Number,
        required: true
    },
    bathRoom: {
        type: Number,
        required: true
    },
    car: {
        type: Number,
        default: 0
    },
    carpetArea: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    contactPhone: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
