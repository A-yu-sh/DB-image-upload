import React from "react";
import Navbar from "../components/Navbar";
import SignInButton from "../components/Button";
import { GET_DATA } from "../api/Products/route";
const page = async () => {
  const data = await GET_DATA();

  return (
    <div>
      <Navbar />
      <SignInButton />
      <p className="flex justify-center text-4xl mt-5 font-mono">
        This is Admin page
      </p>
      {data.res &&
        data.res.map((e) => {
          return (
            <div key={e._id}>
              <h1>{e.name}</h1>
              <img src={e.image} />
            </div>
          );
        })}
    </div>
  );
};

export default page;
