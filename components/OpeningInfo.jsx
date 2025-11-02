// src/components/OpeningInfo.jsx
import React from "react";

export default function OpeningInfo() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto ">
      <h2 className="text-3xl font-bold text-center mb-8">
        Grand Opening of RR Fitness & Nutrition Club
      </h2>

      {/* Photo Card with overlay text */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-10">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
          alt="Inauguration Ceremony"
          className="w-full h-64 sm:h-80 md:h-[28rem] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Official Gym Inauguration
          </h3>
          <p className="text-white/90 text-sm sm:text-base max-w-xl">
            Celebrating the grand launch of RR Fitness & Nutrition Club — built for
            strength, discipline, and results.
          </p>
        </div>
      </div>

      {/* About Inauguration / Timeline info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h4 className="text-xl font-semibold mb-2">Inauguration Highlights</h4>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            RR Fitness & Nutrition Club officially opened its doors on{" "}
            <strong>10th January 2024</strong> with an inspiring ceremony attended by
            fitness enthusiasts, coaches, and local community members.
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Ribbon cutting ceremony by co-owners <strong>Rohit Patil</strong> and <strong>Rushabh Mishra</strong></li>
            <li>Exclusive gym tour and equipment showcase</li>
            <li>Free diet consultation and workout trial sessions</li>
            <li>Special guest speech by local sports coach</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base mb-6">
            Since the opening, our mission remains clear — to offer science-backed training,
            personalized nutrition, and a friendly community space for every fitness level.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-center"
            >
              Visit Us
            </a>
            <a
              href="#gallery"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-center"
            >
              See Gallery
            </a>
          </div>
        </div>

        {/* Structure image */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=80"
            alt="Gym structure"
            className="w-full h-64 md:h-80 object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Extra small cards (Key features of facility structure) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <InfoCard
          title="3-Floor Facility"
          desc="Separate floors for strength, cardio, and group sessions."
          icon="🏋️‍♂️"
        />
        <InfoCard
          title="Nutrition Zone"
          desc="Dedicated in-house supplement shop for proteins and health snacks."
          icon="🥤"
        />
        <InfoCard
          title="Parking & Lounge"
          desc="Spacious parking and waiting lounge for members and visitors."
          icon="🚗"
        />
      </div>
    </section>
  );
}

/* Small card component for key facility features */
function InfoCard({ title, desc, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg hover:scale-[1.02] transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h5 className="font-semibold text-lg mb-1">{title}</h5>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
