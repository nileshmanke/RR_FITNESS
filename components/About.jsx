// src/components/About.jsx
import React from "react";
import OpeningInfo from "./OpeningInfo";

export default function About() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto mt-12">
      {/* Hero */}
      <section className="relative mb-10 rounded-2xl overflow-hidden">
  {/* Background image */}
  <img
    src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1600&q=80"
    alt="Gym interior"
    className="absolute inset-0 w-full h-full object-cover object-center"
    loading="lazy"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content wrapper */}
  <div className="relative flex flex-col justify-center text-white px-6 py-12 sm:py-16 md:py-24 min-h-[60vh] sm:min-h-[70vh]">
    <div className="max-w-3xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3">
        About RR Fitness & Nutrition Club
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-white/90">
        We’re a community-first gym where evidence-based training meets practical nutrition.
        Our coaches design programs that are simple to follow, backed by science and tailored
        to your lifestyle — whether your goal is fat loss, muscle gain or overall health.
      </p>
      <div className="mt-5">
        <a
          href="/contact"
          className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:brightness-95 transition"
        >
          Contact / Visit Us
        </a>
      </div>
    </div>
  </div>
</section>



      <OpeningInfo/>

      {/* Two-column: About text + Opening info card */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
        {/* Left: About text (spans two cols on large screens) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold mb-3">Our Philosophy</h2>
          <p className="text-gray-700 mb-4">
            At RR Fitness & Nutrition Club we believe fitness is for everyone. We focus on
            sustainable progress — small, measurable wins you can build on. Trainers and nutrition
            coaches collaborate to create workouts and meal plans tailored to your goals, time
            availability and preferences.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">What you’ll find here</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Evidence-based strength & conditioning programs</li>
            <li>Personalized nutrition planning and coaching</li>
            <li>An in-house nutrition shop with top supplements</li>
            <li>Friendly group classes and one-on-one coaching</li>
            <li>Regular progress tracking and habit-based support</li>
          </ul>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Stat label="Years" value="8+" />
            <Stat label="Certified Coaches" value="10" />
            <Stat label="Happy Members" value="1,200+" />
          </div>
        </div>

        {/* Right: Opening info card */}
        <aside className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold mb-3">Opening Info</h3>

          <div className="text-sm text-gray-700 mb-4 space-y-2">
            <div>
              <strong>Address:</strong>
              <div className="mt-1">RR Fitness & Nutrition Club, Pisadevi, Maharashtra 431008</div>
            </div>

            <div>
              <strong>Phone:</strong>
              <div className="mt-1">
                <a href="tel:+919876543210" className="text-blue-600 hover:underline">
                  +91-98765-43210
                </a>
              </div>
            </div>

            <div>
              <strong>Email:</strong>
              <div className="mt-1">
                <a href="mailto:contact@rrfitnessclub.com" className="text-blue-600 hover:underline">
                  contact@rrfitnessclub.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">Opening Hours</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Mon – Fri: 5:30 AM – 10:00 PM</li>
              <li>Saturday: 6:00 AM – 8:00 PM</li>
              <li>Sunday: 7:00 AM – 6:00 PM</li>
            </ul>
          </div>

          <div className="mt-4">
            <a
              href="/contact"
              className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Book a Visit
            </a>
          </div>
        </aside>
      </section>

      {/* Facilities / Services grid */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Facilities & Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Strength Zone"
            img="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
            desc="Free weights, power racks, Olympic platforms and structured strength programs."
          />
          <FeatureCard
            title="Cardio & Conditioning"
            img="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80"
            desc="Rowers, assault bikes, treadmills and high-intensity conditioning classes."
          />
          <FeatureCard
            title="Nutrition Shop"
            img="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
            desc="Top-quality proteins, creatine, mass gainers and recovery supplements."
          />
          <FeatureCard
            title="Personal Coaching"
            img="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            desc="1-on-1 coaching and habit-based nutrition plans for long-term results."
          />
          <FeatureCard
            title="Group Classes"
            img="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
            desc="Small-group strength and conditioning classes for community-driven training."
          />
          <FeatureCard
            title="Recovery & Wellness"
            img="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
            desc="Stretch zones, mobility tools and guidance to stay injury-free."
          />
        </div>
      </section>

      {/* Small FAQ / Why choose us */}
      <section className="bg-white rounded-2xl shadow p-6 mb-12">
        <h3 className="text-xl font-semibold mb-3">Why choose RR Fitness & Nutrition Club?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <strong>Evidence-based plans</strong>
            <p className="mt-1">No fads — just proven training & nutrition methods.</p>
          </div>
          <div>
            <strong>Personalized coaching</strong>
            <p className="mt-1">Plans that fit your life, not the other way around.</p>
          </div>
          <div>
            <strong>Friendly community</strong>
            <p className="mt-1">Supportive members and small-group accountability.</p>
          </div>
          <div>
            <strong>Shop on-site</strong>
            <p className="mt-1">Grab quality supplements and recovery products at the gym.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Small presentational components */

function Stat({ label, value }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg text-center">
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function FeatureCard({ title, img, desc }) {
  return (
    <article className="bg-white rounded-2xl shadow overflow-hidden">
      <div className="w-full h-40">
        <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </article>
  );
}

