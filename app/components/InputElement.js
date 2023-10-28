"use client";
import React from "react";

const InputElement = () => {
  const [email, setEmail] = React.useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();

    const res = fetch("http://localhost:3000/api/AccessDB", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(email),
    });
    if (res.ok) {
      setEmail("");
    }
  };
  return (
    <div className="flex justify-center">
      <input
        type="text"
        className=" outline-black mt-20 relative left-[6%]"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={HandleSubmit}>Continue With Email</button>
    </div>
  );
};

export default InputElement;
