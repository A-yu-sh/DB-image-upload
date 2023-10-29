import { CONNECT_MONGO_DB } from "@/lib/ConnectMongoDB";
import SignUpModel from "@/models/SignUpModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request) {
  const { FirstName, LastName, UserName, Email, Password } =
    await request.json();
  const Salt = await bcryptjs.genSalt(10);
  const SecPassword = await bcryptjs.hash(Password, Salt);
  await CONNECT_MONGO_DB();
  await SignUpModel.create({
    FirstName,
    LastName,
    UserName,
    Email,
    Password: SecPassword,
  });
  return NextResponse.json({ message: "Created" });
}
export async function GET(request) {
  await CONNECT_MONGO_DB();
  const res = await SignUpModel.find();
  return NextResponse.json(res);
}
