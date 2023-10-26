import React from "react";
import Navbar from "../components/Navbar";
const page = () => {
  return (
    <div>
      <Navbar />
      <p className="flex justify-center text-4xl mt-5 font-mono">
        This is User page
      </p>
    </div>
  );
};

export default page;
