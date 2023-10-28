"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

const SignInButton = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <p className="flex justify-center mt-5">Hello, {session.user.name}</p>
        <button className="relative ml-[48%] mt-3" onClick={() => signOut()}>
          sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-9">
      <div className="">
        <button onClick={() => signIn("google")}>sign In with Google</button>
      </div>
    </div>
  );
};

export default SignInButton;
