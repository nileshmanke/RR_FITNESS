import { useState, useRef, useEffect } from "react";

/**
 * MaleProgramDetails
 * - Blue themed
 * - Use on page: <MaleProgramDetails />
 */

function getShort(full) {
  if (!full) return "";
  const lower = full.toLowerCase();
  if (lower.includes("weight loss")) return "Weight Loss";
  if (lower.includes("weight gain") || lower.includes("bulking")) return "Weight Gain";
  if (lower.includes("fat loss") || lower.includes("fat") || lower.includes("definition")) return "Fat Loss";
  return full.split(" ").slice(0, 2).join(" ");
}

export function MaleProgramDetails() {
  const [open, setOpen] = useState(null);
  const panelRefs = useRef({});

  useEffect(() => {
    Object.keys(panelRefs.current).forEach((key) => {
      const el = panelRefs.current[key];
      if (!el) return;
      if (open === key) {
        el.style.maxHeight = el.scrollHeight + "px";
      } else {
        el.style.maxHeight = "0px";
      }
    });
  }, [open]);

  const programs = [
    {
      id: "male-weight-loss",
      title: "Weight Loss Program (Male)",
      mobileTitle: "Weight Loss",
      price: "₹2,999 / month",
      duration: "12 weeks",
      overview:
        "A structured calorie-deficit program combining resistance training, HIIT cardio, and habit-based nutrition to reduce body fat while preserving muscle mass.",
      split: "3–4 strength sessions + 2 HIIT/cardio sessions / week",
      nutrition:
        "Moderate protein (1.6–2.2 g/kg), balanced carbs, slight calorie deficit (~10–20%). Emphasis on whole foods and recovery.",
      sampleDay:
        "Breakfast: Oats + whey + fruit • Lunch: Chicken + brown rice + veggies • Snack: Greek yogurt • Dinner: Fish + salad",
      expected:
        "Lose 4–8 kg fat, improved endurance, and a more defined physique.",
    },
    {
      id: "male-weight-gain",
      title: "Weight Gain / Bulking Program (Male)",
      mobileTitle: "Weight Gain",
      price: "₹3,499 / month",
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
    },
    {
      id: "male-fat-loss",
      title: "Fat Loss & Definition Program (Male)",
      mobileTitle: "Fat Loss",
      price: "₹3,199 / month",
      duration: "10–14 weeks",
      overview:
        "Targeted recomposition plan to drop fat and enhance muscle definition using intense strength training and metabolic conditioning.",
      split: "4 strength + 2 metabolic conditioning sessions / week",
      nutrition:
        "Slight calorie deficit, higher protein, and carb cycling for optimized energy and recovery.",
      sampleDay:
        "Breakfast: Veg omelet + oats • Lunch: Fish + salad • Snack: Nuts & banana • Dinner: Chicken + veggies",
      expected:
        "Reduce body fat %, sharper muscle definition and improved performance.",
    },
  ];

  return (
    <section id="male-program-details" className="mt-10 px-6 max-w-6xl mx-auto mb-8">
      <h4 className="text-2xl font-semibold mb-4 text-gray-800">Male Programs — Details</h4>

      <div className="space-y-4">
        {programs.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-blue-100 transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Header */}
            <button
              onClick={() => setOpen(open === p.id ? null : p.id)}
              aria-expanded={open === p.id}
              aria-controls={`${p.id}-panel`}
              className="w-full flex items-center justify-between px-5 py-4 md:py-5 focus:outline-none"
            >
              <div className="text-left">
                <div className="flex items-baseline gap-3">
                  <h5 className="text-lg font-semibold text-blue-700">
                    {/* mobile short / desktop full */}
                    <span className="inline sm:hidden">{p.mobileTitle || getShort(p.title)}</span>
                    <span className="hidden sm:inline">{p.title}</span>
                  </h5>
                  <span className="text-sm text-gray-500 ml-2">{p.duration}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{p.split}</p>
              </div>

              <div className="ml-4 flex items-center gap-4">
                <div className="text-sm text-blue-700 font-semibold">{p.price}</div>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${open === p.id ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </div>
            </button>

            {/* Panel */}
            <div
              id={`${p.id}-panel`}
              ref={(el) => (panelRefs.current[p.id] = el)}
              className={`px-5 pb-5 pt-0 max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out ${open === p.id ? "bg-gradient-to-r from-blue-50 via-sky-50 to-white" : ""}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div>
                  <h6 className="text-sm font-semibold text-blue-700">Overview</h6>
                  <p className="text-sm text-gray-700 mb-3">{p.overview}</p>

                  <h6 className="text-sm font-semibold text-blue-700">Training Split</h6>
                  <p className="text-sm text-gray-700 mb-3">{p.split}</p>

                  <h6 className="text-sm font-semibold text-blue-700">Nutrition Highlights</h6>
                  <p className="text-sm text-gray-700 mb-3">{p.nutrition}</p>

                  <h6 className="text-sm font-semibold text-blue-700">Sample Day</h6>
                  <p className="text-sm text-gray-700 mb-3">{p.sampleDay}</p>
                </div>

                <div>
                  <h6 className="text-sm font-semibold text-blue-700">Expected Results</h6>
                  <p className="text-sm text-gray-700 mb-3">{p.expected}</p>

                  <h6 className="text-sm font-semibold text-blue-700">Price</h6>
                  <p className="text-sm text-gray-700 mb-4">{p.price}</p>

                  <div className="flex gap-3">
                    <a href="/contact" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition">Enquire / Join</a>
                    <a href="#contact" className="inline-block px-4 py-2 border border-blue-300 rounded-md text-sm text-gray-700 hover:bg-blue-50 transition">Ask a Question</a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MaleProgramDetails;
