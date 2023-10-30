import mongoose from "mongoose";

const SignUpDetailsSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  UserName: String,
  Email: String,
  Password: String,
  value: String,
});

const SignUpModel =
  mongoose.models.admin || mongoose.model("admin", SignUpDetailsSchema);
export default SignUpModel;
