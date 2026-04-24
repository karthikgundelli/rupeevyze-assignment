import React from "react";
export default function Payments() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://cdn-icons-png.flaticon.com/512/2331/2331943.png"
          alt="cards"
          className="w-full max-w-sm mx-auto"
        />

        <div>
          <h2 className="text-3xl font-bold">
            Pay Your Way
          </h2>

          <p className="mt-4 text-gray-600">
            UPI, Cards, Wallets, Net Banking — all in one place.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ UPI Transfers</li>
            <li>✔ Credit/Debit Cards</li>
            <li>✔ Wallet Integration</li>
            <li>✔ Net Banking</li>
          </ul>
        </div>
      </div>
    </section>
  );
}