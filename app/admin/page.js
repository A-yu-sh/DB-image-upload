"use client";
import React from "react";
import Navbar from "../components/Navbar";
import SignInButton from "../components/Button";
import { GET_DATA } from "../api/Products/route";

const page = async () => {
  const DataFromDatabase = await GET_DATA();

  const DeleteData = async (id) => {
    const res = await fetch(`http://localhost:3000/ProductDB?id=${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      alert("deleted");
    }
  };

  return (
    <div>
      <Navbar />
      <SignInButton />
      <p className="flex justify-center text-4xl mt-5 font-mono">
        This is Admin page
      </p>
      <div>
        {DataFromDatabase.res &&
          DataFromDatabase.res.map((e) => {
            return (
              <div key={e._id}>
                <h1>{e.name}</h1>
                <img src={e.image} />
                <button onClick={DeleteData}>Delete</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default page;
