import mongoose from "mongoose";
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  completion: { type: Date },
  description: { type: String },
});
export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
