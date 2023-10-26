import React from "react";
import Navbar from "../components/Navbar";
import SignInButton from "../components/Button";
const page = () => {
  return (
    <div>
      <Navbar />
      <SignInButton />
      <p className="flex justify-center text-4xl mt-5 font-mono">
        This is Admin page
      </p>
    </div>
  );
};

export default page;
