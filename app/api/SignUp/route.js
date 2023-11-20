import { CONNECT_MONGO_DB } from "@/lib/ConnectMongoDB";
import SignUpModel from "@/models/SignUpModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  const { FirstName, LastName, UserName, Email, Password, value } =
    await request.json();
  const Salt = await bcrypt.genSalt(10);
  const SecPassword = await bcrypt.hash(Password, Salt);
  await CONNECT_MONGO_DB();
  await SignUpModel.create({
    FirstName,
    LastName,
    UserName,
    Email,
    Password: SecPassword,
    value,
  });
  return NextResponse.json({ message: "Created" });
}
export async function GET() {
  await CONNECT_MONGO_DB();
  const res = await SignUpModel.find();
  return NextResponse.json(res);
}
