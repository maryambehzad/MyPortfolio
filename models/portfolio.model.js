import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
});

export default mongoose.models.Portfolio ||
  mongoose.model("Portfolio", PortfolioSchema);
