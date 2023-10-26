import Image from "next/image";
import Navbar from "./components/Navbar";
import SignInButton from "./components/Button";

export default function Home() {
  return (
    <main>
      <h1 className="flex justify-center text-4xl mt-5 font-mono">
        Role Based Access Control
      </h1>
      <Navbar />
      <SignInButton />
    </main>
  );
}
