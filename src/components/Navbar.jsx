import React from "react";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
      <div className="flex justify-between items-center px-6 py-4">
        
        <h1 className="text-2xl font-bold text-indigo-600">
          KwikPay
        </h1>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-indigo-600 cursor-pointer">Features</li>
          <li className="hover:text-indigo-600 cursor-pointer">Payments</li>
          <li className="hover:text-indigo-600 cursor-pointer">Security</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
        </ul>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <ul className="flex flex-col gap-4">
            <li>Features</li>
            <li>Payments</li>
            <li>Security</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}