import { CONNECT_MONGO_DB } from "@/lib/ConnectMongoDB";
import UserMODEL from "@/models/UserModel";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const { name, email, provider, Cart } = await request.json();
  await CONNECT_MONGO_DB();
  await UserMODEL.create({ name, email, provider, Cart });
  return NextResponse.json({ message: "user created" });
}

export async function GET() {
  await CONNECT_MONGO_DB();
  const res = await UserMODEL.find();
  return NextResponse.json({ res });
}
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await CONNECT_MONGO_DB();
  await UserMODEL.findByIdAndDelete(id);
  return NextResponse.json({ message: "Data Deleted" });
}
