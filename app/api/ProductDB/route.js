import { CONNECT_MONGO_DB } from "@/lib/ConnectMongoDB";
import PRODUCT_MODEL from "@/models/ProductModel";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const { name, description, image, number } = await request.json();
  await CONNECT_MONGO_DB();
  await PRODUCT_MODEL.create({ name, description, image, number });
  return NextResponse.json({ message: "Data Uploaded" });
}

export async function GET() {
  await CONNECT_MONGO_DB();
  const res = await PRODUCT_MODEL.find();
  return NextResponse.json({ res });
}
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await CONNECT_MONGO_DB();
  await PRODUCT_MODEL.findByIdAndDelete(id);
  return NextResponse.json({ message: "Data Deleted" });
}
