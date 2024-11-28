import express from "express";
import mongoose, { Schema } from "mongoose";
import "dotenv/config";

type Product = {
  name: string;
  price: number;
  description: string;
  image: string;
};

const ProductSchema: Product = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.model("Product", ProductSchema);