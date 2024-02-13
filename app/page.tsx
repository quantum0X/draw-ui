'use client'

import Live from "@/components/Live";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <h2 className="text-white text-center">Draw UI</h2>
      <Live />
    </div>
  );
}