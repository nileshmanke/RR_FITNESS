// src/components/DietHero.jsx
import { useState } from "react";

export default function DietHero() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // replace with real submit logic (API call, mailto, modal, etc.)
    alert(`Thanks — we'll send a sample diet plan to ${email || "your email"}`);
    setEmail("");
  }

  return (
    <section className=" mt-6 relative flex items-center justify-center text-center min-h-[60vh] md:min-h-[72vh] px-6">
      {/* Responsive background image (shows top on small devices) */}
      <img
        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1153"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top md:object-center opacity-40 pointer-events-none"
        loading="lazy"
      />

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/25 md:bg-black/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="inline-block bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm mb-4">
              Personalized • Evidence-based • Sustainable
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              We provide the diet they deserve
              <span className="block text-yellow-300 mt-2 text-lg sm:text-xl font-semibold">
                — tailored to their goals, lifestyle & body type
              </span>
            </h1>

            <p className="mt-5 text-white/90 text-sm sm:text-base md:text-lg">
              Our certified nutrition coaches design simple, realistic meal plans for fat loss,
              muscle gain, improved performance and overall health. No fads — just results.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-center items-center">
              <a
                href="#programs"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:brightness-95 transition"
              >
                See Plans
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById("diet-email-input");
                  el?.focus();
                }}
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/5 transition"
              >
                Get Free Diet Sample
              </button>
            </div>

            {/* Small form (email input) */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 mx-auto max-w-xl flex flex-col sm:flex-row gap-3 items-center justify-center"
            >
              <label htmlFor="diet-email-input" className="sr-only">
                Email
              </label>
              <input
                id="diet-email-input"
                type="email"
                aria-label="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email to receive a free sample diet"
                className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Sample
              </button>
            </form>

            {/* Feature row */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90">
              <Feature title="Custom for Goals" subtitle="Fat loss, muscle gain, maintenance" />
              <Feature title="Practical Meals" subtitle="Easy, everyday ingredients" />
              <Feature title="Coach Support" subtitle="Weekly check-ins & adjustments" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, subtitle }) {
  return (
    <div className="flex items-start gap-3 px-3 py-2">
      <div className="flex-shrink-0 w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-yellow-300 font-bold">
        ✓
      </div>
      <div className="text-left">
        <div className="font-semibold text-white">{title}</div>
        <div className="text-sm text-white/80">{subtitle}</div>
      </div>
    </div>
  );
}
