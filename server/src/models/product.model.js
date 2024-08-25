import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        countInStock: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export const productModel = mongoose.model('Product', productSchema);