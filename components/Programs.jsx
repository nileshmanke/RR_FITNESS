import React from "react";
import { MaleProgramDetails } from "./MaleProgramDetails";
import { FemaleProgramDetails } from "./FemaleProgramDetails";

export default function Programs() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Fitness Programs by Gender
      </h2>

      {/* ===== MALE SECTION ===== */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">
          Male Programs
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProgramCard
            title="Weight Loss Program"
            img="https://images.unsplash.com/photo-1634463278803-f9f71890e67d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            desc="Customized calorie deficit, strength training, and cardio mix to help men burn fat efficiently."
          />
          <ProgramCard
            title="Weight Gain Program"
            img="https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            desc="Muscle-building workouts and high-protein diet plans designed to increase lean body mass safely."
          />
          <ProgramCard
            title="Fat Loss Program"
            img="https://plus.unsplash.com/premium_photo-1671717726440-48628d927404?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
            desc="Targeted routines and macro-focused nutrition to reduce body fat while preserving muscle."
          />
        </div>
      </div>


      <MaleProgramDetails/>

      {/* ===== FEMALE SECTION ===== */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-pink-500 pl-3">
          Female Programs
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProgramCard
            title="Weight Loss Program"
            img="https://plus.unsplash.com/premium_photo-1661601767854-a92904fd10dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            desc="Smart, low-impact workouts and balanced diets tailored for sustainable weight loss."
          />
          <ProgramCard
            title="Weight Gain Program"
            img="https://images.unsplash.com/photo-1710972199108-d97f78053af9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
            desc="Personalized strength plans and nutrition to build tone, strength, and lean muscle safely."
          />
          <ProgramCard
            title="Fat Loss Program"
            img="https://images.unsplash.com/photo-1591384640699-9a85bd036da2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            desc="Effective fat-burning training with a focus on hormone balance, recovery, and long-term results."
          />
        </div>
      </div>



      <FemaleProgramDetails/>
    </section>
  );
}

/* ---- Card Component ---- */
function ProgramCard({ title, img, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition transform hover:-translate-y-1">
      <div className="h-44 w-full">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
