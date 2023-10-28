import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex space-x-5 justify-center mt-9">
      <Link href="/">Home Page</Link>
      <Link href="/user">Product Page</Link>
      <Link href="/admin">Admin Page</Link>
    </div>
  );
};

export default Navbar;
