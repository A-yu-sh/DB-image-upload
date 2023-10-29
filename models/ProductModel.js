import mongoose from "mongoose";

const ProductSCHEMA = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  number: Number,
});

const PRODUCT_MODEL =
  mongoose.models.product || mongoose.model("product", ProductSCHEMA);

export default PRODUCT_MODEL;
