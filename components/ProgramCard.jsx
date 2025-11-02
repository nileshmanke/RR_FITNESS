import ProgramCard from "../components/ProgramCard";

<div className="mb-12">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">
    Male Programs
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <ProgramCard
      id="male-weight-loss"
      title="Weight Loss Program"
      img="https://images.unsplash.com/photo-1634463278803-f9f71890e67d?auto=format&fit=crop&w=1170&q=80"
      desc="Customized calorie deficit, strength training, and cardio mix to help men burn fat efficiently."
    />

    <ProgramCard
      id="male-weight-gain"
      title="Weight Gain Program"
      img="https://images.unsplash.com/photo-1522844990619-4951c40f7eda?auto=format&fit=crop&w=1170&q=80"
      desc="Muscle-building workouts and high-protein diet plans designed to increase lean body mass safely."
    />

    <ProgramCard
      id="male-fat-loss"
      title="Fat Loss Program"
      img="https://plus.unsplash.com/premium_photo-1671717726440-48628d927404?auto=format&fit=crop&w=687&q=80"
      desc="Targeted routines and macro-focused nutrition to reduce body fat while preserving muscle."
    />
  </div>
</div>
