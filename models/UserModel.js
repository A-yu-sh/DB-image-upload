import mongoose from "mongoose";

const cartModel = new mongoose.Schema({
  name: String,
});

const UserSCHEMA = new mongoose.Schema(
  {
    name: String,
    email: String,
    provider: String,
    Cart: [cartModel],
  },
  { timeStamps: true }
);

const UserMODEL = mongoose.models.rbac || mongoose.model("rbac", UserSCHEMA);
export default UserMODEL;
