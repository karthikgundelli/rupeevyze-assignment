import React from "react";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Smarter Payments with KwikPay
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Send money, pay bills, scan QR codes and manage finances instantly.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold">
              Get Started
            </button>

            <button className="border border-white px-6 py-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
          alt="payment"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
}