import React from "react";

export default function Security() {
  return (
    <section className="bg-indigo-600 text-white py-20 text-center px-6">
      <h2 className="text-4xl font-bold">
        Your Money is Safe
      </h2>

      <p className="mt-4 text-lg text-indigo-100">
        Advanced encryption, fraud protection and secure authentication.
      </p>

      <img
        src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
        alt="security"
        className="mx-auto mt-8 w-40"
      />
    </section>
  );
}