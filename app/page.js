"use client";
import Navbar from "./components/Navbar";
import SignInButton from "./components/Button";
import { GET_DATA, GET_DATAA } from "./api/Products/route";
import { useState } from "react";

export default function Home() {
  return (
    <main>
      <h1 className="flex justify-center text-4xl mt-5 font-mono">
        RBAC_role based access control(rba)
      </h1>
      <Navbar />
      <SignInButton />
    </main>
  );
}
