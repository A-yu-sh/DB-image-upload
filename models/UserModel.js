import mongoose from "mongoose";

const UserSCHEMA = new mongoose.Schema({
  email: String,
  provider: String,
  role: String,
});

const UserMODEL = mongoose.models.rbac || mongoose.model("rbac", UserSCHEMA);
export default UserMODEL;
