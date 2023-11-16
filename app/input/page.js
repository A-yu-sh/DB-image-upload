"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const page = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [value, setValue] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    const res = await fetch("http://localhost:3000/api/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FirstName,
        LastName,
        UserName,
        Email,
        Password,
        value,
      }),
    });
    if (res.ok) {
      alert("Uploaded");
    }
  };
  const HandleCart = async (e) => {
    e.preventDefault();
    console.log(value);
    const res = await fetch("http://localhost:3000/api/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Cart: value,
      }),
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
        <label>Choose a car:</label>
        <select value={value} onChange={(e) => setValue(e.target.value)}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <button onClick={(HandleSubmit, HandleCart)} className="">
          Log In
        </button>
      </div>
    </div>
  );
};

export default page;
