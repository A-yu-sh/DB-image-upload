"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import bcryptjs from "bcryptjs";

const page = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ FirstName, LastName, UserName, Email, Password }),
    });
    if (res.ok) {
      alert("Uploaded");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-10">
        <input
          type="text"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border-gray-300k"
          placeholder="Enter FirstName"
        />
        <input
          type="text"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border-gray-300k"
          placeholder="Enter Last Name"
        />
        <input
          type="text"
          value={UserName}
          onChange={(e) => setUserName(e.target.value)}
          className="border-gray-300k"
          placeholder="Enter Username"
        />
        <input
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-gray-300k"
          placeholder="Enter Email"
        />
        <input
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-gray-300k"
          placeholder="Enter Password"
        />{" "}
        <button onClick={HandleSubmit} className="">
          Log In
        </button>
      </div>
    </div>
  );
};

export default page;
