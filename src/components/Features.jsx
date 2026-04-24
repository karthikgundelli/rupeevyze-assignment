import React from "react";
export default function Features() {
  const features = [
    { title: "Instant Transfer", icon: "⚡" },
    { title: "UPI Payments", icon: "📲" },
    { title: "Bill Payments", icon: "💡" },
    { title: "Recharge", icon: "📶" },
    { title: "QR Scan", icon: "🔍" },
    { title: "History", icon: "📊" },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Powerful Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-4xl">{f.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{f.title}</h3>
            <p className="text-gray-500 mt-2">
              Experience seamless and secure transactions.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}