import { Schema, model } from "mongoose";
import { TProduct } from "./Product.interface";

const ProductSchema = new Schema<TProduct>({
    productName: {
        type: String,
        required: true
    },
    price: {
      type: String,
      required: true
    },
    color: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    badge: {
        type: Boolean,
        default: true
    },
    img: {
        type: String,
        required: true
    },
    stockQuantity: {
        type: Number,
        default: 5
    },
    des: {
        type: String,
        required: true
    },
    cat: {
        type: String,
        required: true
    },
    
    ratings: {
        type: Number,
        default: 3
    },
    
   
},
{
    timestamps: true
})

export const ProductModel = model<TProduct>("Product", ProductSchema)