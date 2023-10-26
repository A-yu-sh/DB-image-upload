import { CONNECT_MONGO_DB } from "@/lib/ConnectMongoDB";
import UserMODEL from "@/models/UserModel";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const { name, email, provider } = await request.json();
  await CONNECT_MONGO_DB();
  await UserMODEL.create({ name, email, provider });
  return NextResponse.json({ message: "user created" });
}

export async function GET() {
  await CONNECT_MONGO_DB();
  const res = await UserMODEL.find();
  return NextResponse.json({ res });
}
