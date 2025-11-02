import { useState, useRef, useEffect } from "react";

/**
 * FemaleProgramDetails
 * - Pink / rose themed
 * - Use on page: <FemaleProgramDetails />
 */

function getShort(full) {
  if (!full) return "";
  const lower = full.toLowerCase();
  if (lower.includes("weight loss")) return "Weight Loss";
  if (lower.includes("weight gain") || lower.includes("bulking")) return "Weight Gain";
  if (lower.includes("fat loss") || lower.includes("fat") || lower.includes("definition")) return "Fat Loss";
  return full.split(" ").slice(0, 2).join(" ");
}

export function FemaleProgramDetails() {
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
      id: "female-weight-loss",
      title: "Weight Loss Program (Female)",
      mobileTitle: "Weight Loss",
      price: "₹2,999 / month",
      duration: "12 weeks",
      overview:
        "Holistic weight-loss tailored for women’s metabolic needs. Low-impact strength, cardio intervals, and balanced nutrition for sustainable results.",
      split: "3 strength + 2 cardio + 1 mobility session / week",
      nutrition:
        "High-protein, nutrient-dense meals with focus on hormone balance and consistent meal timing.",
      sampleDay:
        "Breakfast: Smoothie bowl • Lunch: Grilled paneer wrap • Snack: Nuts & fruit • Dinner: Lentil soup + salad",
      expected:
        "3–6 kg reduction, improved energy and visible toning in key areas.",
    },
    {
      id: "female-weight-gain",
      title: "Weight Gain / Lean Muscle Program (Female)",
      mobileTitle: "Weight Gain",
      price: "₹3,499 / month",
      duration: "10–14 weeks",
      overview:
        "Designed to add healthy weight and lean muscle with progressive resistance and nutrient-rich calorie surplus.",
      split: "4 sessions: Push, Pull, Legs, Glutes/Accessory",
      nutrition:
        "Slight calorie surplus (+300 kcal), emphasis on protein and complex carbs, with portion and meal timing guidance.",
      sampleDay:
        "Breakfast: Eggs + toast • Lunch: Rice + lentils • Snack: Protein shake + almonds • Dinner: Chicken + quinoa",
      expected:
        "2–4 kg lean muscle gain and noticeable strength improvements.",
    },
    {
      id: "female-fat-loss",
      title: "Fat Loss & Toning (Female)",
      mobileTitle: "Fat Loss",
      price: "₹3,199 / month",
      duration: "10–14 weeks",
      overview:
        "Targeted plan emphasizing stubborn fat loss (waist, thighs, arms) while retaining muscle and improving posture.",
      split: "3 strength + 2 HIIT + 1 yoga/stretching session weekly",
      nutrition:
        "Balanced macros with calorie cycling, hydration focus, and micronutrient optimization for hormonal support.",
      sampleDay:
        "Breakfast: Oats + fruit + nuts • Lunch: Chicken salad • Snack: Yogurt + seeds • Dinner: Veg stir-fry + brown rice",
      expected:
        "Reduced body fat %, leaner look, better energy and posture.",
    },
  ];

  return (
    <section id="female-program-details" className="mt-10 px-6 max-w-6xl mx-auto">
      <h4 className="text-2xl font-semibold mb-4 text-gray-800">Female Programs — Details</h4>

      <div className="space-y-4">
        {programs.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-pink-100 transition transform hover:-translate-y-1 hover:shadow-lg"
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
                  <h5 className="text-lg font-semibold text-rose-600">
                    <span className="inline sm:hidden">{p.mobileTitle || getShort(p.title)}</span>
                    <span className="hidden sm:inline">{p.title}</span>
                  </h5>
                  <span className="text-sm text-gray-500 ml-2">{p.duration}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{p.split}</p>
              </div>

              <div className="ml-4 flex items-center gap-4">
                <div className="text-sm text-rose-700 font-semibold">{p.price}</div>
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
              className={`px-5 pb-5 pt-0 max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out ${open === p.id ? "bg-gradient-to-r from-rose-50 via-pink-50 to-white" : ""}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div>
                  <h6 className="text-sm font-semibold text-rose-700">Overview</h6>
                  <p className="text-sm text-gray-700 mb-3">{p.overview}</p>

                  <h6 className="text-sm font-semibold text-rose-700">Training Split</h6>
                  <p className="text-sm text-gray-700 mb-3">{p.split}</p>

                  <h6 className="text-sm font-semibold text-rose-700">Nutrition Highlights</h6>
                  <p className="text-sm text-gray-700 mb-3">{p.nutrition}</p>

                  <h6 className="text-sm font-semibold text-rose-700">Sample Day</h6>
                  <p className="text-sm text-gray-700 mb-3">{p.sampleDay}</p>
                </div>

                <div>
                  <h6 className="text-sm font-semibold text-rose-700">Expected Results</h6>
                  <p className="text-sm text-gray-700 mb-3">{p.expected}</p>

                  <h6 className="text-sm font-semibold text-rose-700">Price</h6>
                  <p className="text-sm text-gray-700 mb-4">{p.price}</p>

                  <div className="flex gap-3">
                    <a href="/contact" className="inline-block px-4 py-2 bg-rose-500 text-white rounded-md text-sm hover:bg-rose-600 transition">Enquire / Join</a>
                    <a href="#contact" className="inline-block px-4 py-2 border border-rose-300 rounded-md text-sm text-gray-700 hover:bg-rose-50 transition">Ask a Question</a>
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

export default FemaleProgramDetails;
