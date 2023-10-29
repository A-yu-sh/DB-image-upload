export async function GET_DATA() {
  const res = await fetch("http://localhost:3000/api/ProductDB", {
    cache: "no-store",
  });
  return await res.json();
}
