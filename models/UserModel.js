import mongoose from "mongoose";

const UserSCHEMA = new mongoose.Schema(
  {
    name: String,
    email: String,
    provider: String,
  },
  { timeStamps: true }
);

const UserMODEL = mongoose.models.rbac || mongoose.model("rbac", UserSCHEMA);
export default UserMODEL;
