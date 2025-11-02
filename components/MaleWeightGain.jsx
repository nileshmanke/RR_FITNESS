// src/components/MaleWeightGain.jsx
import React from "react";
import BackToHomeButton from "../components/BackToHomeButton";

const program = {
  id: "male-weight-gain",
  title: "Weight Gain / Bulking Program (Male)",
  priceBase: 3499,
  duration: "8–16 weeks",
  overview:
    "A clean bulking plan focused on strength, hypertrophy and calorie-dense nutrition to add lean muscle without excess fat.",
  split: "5-day split: Push / Pull / Legs / Upper / Accessory",
  nutrition:
    "High-protein, calorie-surplus diet with 5–6 meals/day. Carbs prioritized around workouts for energy and recovery.",
  sampleDay:
    "Breakfast: Eggs + toast + peanut butter • Lunch: Rice + chicken • Snack: Mass gainer shake • Dinner: Paneer + quinoa",
  expected:
    "Gain 3–6 kg lean mass with strength progression and visible size increase.",
  hero:
    "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?auto=format&fit=crop&w=1600&q=80",
};

function formatCurrency(n) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function MaleWeightGain() {
  const plans = [
    {
      key: "1m",
      label: "1 Month Plan",
      months: 1,
      price: program.priceBase,
      perks: ["Weekly check-ins", "Gym access", "Hypertrophy plan"],
    },
    {
      key: "6m",
      label: "6 Month Plan",
      months: 6,
      price: Math.round(program.priceBase * 6 * 0.9),
      perks: ["Bi-weekly coaching", "Meal templates", "Progress tracking"],
    },
    {
      key: "12m",
      label: "12 Month Plan",
      months: 12,
      price: Math.round(program.priceBase * 12 * 0.82),
      perks: ["Monthly 1-on-1", "Priority support", "Supplement guidance"],
    },
  ];

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-5xl mx-auto bg-gradient-to-b from-pink-50 via-rose-50 to-white rounded-3xl shadow-inner mt-25">
      {/* HERO SECTION */}
      <section className="relative rounded-2xl overflow-hidden mb-8 shadow-lg">
        <img
          src={program.hero}
          alt={program.title}
          className="w-full h-56 sm:h-72 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20 flex items-end">
          <div className="p-5 sm:p-8 text-white">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {program.title}
            </h1>
            <p className="text-xs sm:text-sm mt-1 opacity-90">
              {program.duration} • {program.split}
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* LEFT: Overview */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 border border-rose-100">
          <h2 className="text-xl font-semibold mb-3 text-rose-700">Overview</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">{program.overview}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-sm mb-1 text-rose-600">Sample Day</h3>
              <p className="text-gray-700 mb-3">{program.sampleDay}</p>

              <h3 className="font-semibold text-sm mb-1 text-rose-600">Nutrition Highlights</h3>
              <p className="text-gray-700 mb-3">{program.nutrition}</p>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-1 text-rose-600">Expected Results</h3>
              <p className="text-gray-700 mb-3">{program.expected}</p>

              <h3 className="font-semibold text-sm mb-1 text-rose-600">Duration</h3>
              <p className="text-gray-700 mb-3">{program.duration}</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Stacked plans (visible on small & md) */}
        <aside className="bg-white rounded-2xl shadow-md p-6 border border-rose-100">
          <h3 className="text-lg font-semibold mb-2 text-rose-700">Choose a Plan</h3>
          <p className="text-sm text-gray-600 mb-4">
            Select the commitment level that fits you. Longer plans include discounts and extra perks.
          </p>

          <div className="space-y-4 lg:hidden">
            {plans.map((plan) => (
              <div
                key={plan.key}
                className="border border-rose-100 rounded-lg p-3 flex flex-col bg-gradient-to-br from-rose-50 to-white shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-rose-700">{plan.label}</div>
                    <div className="text-xs text-gray-500">
                      {plan.months} month{plan.months > 1 ? "s" : ""}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Total</div>
                    <div className="text-lg font-semibold text-rose-700">
                      {formatCurrency(plan.price)}
                    </div>
                  </div>
                </div>

                <ul className="text-sm text-gray-600 mt-3 ml-3 space-y-1">
                  {plan.perks.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>

                <div className="mt-3">
                  <a
                    href={`/contact?program=${program.id}&plan=${plan.key}`}
                    className="w-full inline-block text-center px-3 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition text-sm"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs text-gray-500">
            <p>Prices indicative. Contact for custom packages or group rates.</p>
          </div>
        </aside>

        {/* FULL WIDTH PLANS GRID (for large screens) */}
        <div className="hidden lg:block lg:col-span-3">
          <h3 className="text-lg font-semibold mb-4 mt-6 text-rose-700">Plans</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.key}
                className="border border-rose-100 rounded-xl p-5 flex flex-col h-full bg-gradient-to-br from-rose-50 to-white shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-rose-700">{plan.label}</div>
                    <div className="text-xs text-gray-500">
                      {plan.months} month{plan.months > 1 ? "s" : ""}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Total</div>
                    <div className="text-lg font-semibold text-rose-700">
                      {formatCurrency(plan.price)}
                    </div>
                  </div>
                </div>

                <ul className="text-sm text-gray-600 mt-3 ml-3 space-y-1 flex-1">
                  {plan.perks.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>

                <div className="mt-4">
                  <a
                    href={`/contact?program=${program.id}&plan=${plan.key}`}
                    className="w-full inline-block text-center px-3 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition text-sm"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BackToHomeButton />
    </main>
  );
}
