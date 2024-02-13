'use client'

import Live from "@/components/Live";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />

      <Live />
    </div>
  );
}