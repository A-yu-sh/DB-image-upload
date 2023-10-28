"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SignInButton from "../components/Button";

const page = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("");

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(image);

    const res = await fetch("http://localhost:3000/api/ProductDB", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, image, number }),
    });
    if (res.ok) {
      alert("Uploaded");
    }
  };

  return (
    <div>
      <Navbar />
      <SignInButton />
      <h1 className="flex justify-center text-4xl mt-5 font-mono">
        Enter Product Details
      </h1>

      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex justify-center flex-col md:ml-auto w-full mt-15 mr-[32.5%] md:mt-0">
        <div className="relative mb-4">
          <label className="leading-7 text-sm text-gray-600">
            Product Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label className="leading-7 text-sm text-gray-600">
            Product Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div>
          <label className="leading-7 text-sm text-gray-600">
            Product Image
          </label>
          <input
            type="file"
            onChange={(e) => onFileChange(e)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div>
          <label className="leading-7 text-sm text-gray-600">
            Product Number
          </label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            accept="image/*, image/png, image/gif, image/jpeg"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          onClick={HandleSubmit}
          className="text-white bg-indigo-500 border-0 py-2 mt-5 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Upload
        </button>
      </div>
    </div>
  );
};

export default page;

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
