export async function GET_DATA() {
  const res = await fetch("http://localhost:3000/api/ProductDB", {
    cache: "no-store",
  });
  return await res.json();
}
export async function GET_DATAA() {
  const res = await fetch("http://localhost:3000/api/Product", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
