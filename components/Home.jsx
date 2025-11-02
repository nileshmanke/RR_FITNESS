import { useEffect, useState } from "react";
import DietHero from "./DietCompo";
import { NavLink } from "react-router-dom";


export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
  // Check if the popup was shown before
  const hasSeenPopup = localStorage.getItem("rr_welcome_shown");

  // If not shown before, set timer and show it after 5 seconds
  if (!hasSeenPopup) {
    const timer = setTimeout(() => {
      setShowWelcome(true);
      localStorage.setItem("rr_welcome_shown", "true"); // mark as shown
    }, 5000);

    return () => clearTimeout(timer);
  }
}, []);

  return (
    <>
      {/* Welcome Popup */}
      {showWelcome && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowWelcome(false)}
          />

          {/* Popup content */}
          <div className="relative z-10 w-full max-w-md sm:max-w-lg bg-white rounded-2xl p-6 shadow-xl animate-[pop_0.3s_ease]">
            <button
              aria-label="Close welcome popup"
              onClick={() => setShowWelcome(false)}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <div className="flex flex-col items-center text-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80"
                alt="Welcome illustration"
                className="w-28 h-28 rounded-full object-cover"
              />
              <h2 className="text-2xl font-bold text-gray-800">
                Welcome to RR Fitness & Nutrition Club
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Glad to have you here! Start your transformation journey today with
                our fitness and nutrition experts.
              </p>
              <div className="flex gap-3 mt-3">
                <a
                  href="#programs"
                  onClick={() => setShowWelcome(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-sm"
                >
                  See Programs
                </a>
                <button
                  onClick={() => setShowWelcome(false)}
                  className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 transition"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center min-h-[calc(100vh-8rem)] px-6"
        aria-labelledby="hero-title"
      >
        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 md:opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-3xl text-gray-900">
          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
          >
            Welcome to{" "}
            <span className="text-blue-600">RR Fitness & Nutrition Club</span>
          </h1>
          <p className="text-black font-bold md:font-semibold mb-6 text-base sm:text-lg leading-relaxed">
            Transform your body, mind, and lifestyle with expert trainers and
            personalized nutrition plans. Join our community and begin your
            transformation today!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#programs"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-sm sm:text-base"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-sm sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>


<div className="relative flex flex-col items-center justify-center text-center py-10 px-4 overflow-hidden rounded-2xl shadow-lg bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900 text-white mt-8">
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')] opacity-20 bg-cover bg-center"></div>

  <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide">
    Male Section
  </h1>
  <p className="relative z-10 text-blue-200 text-sm sm:text-base mt-2">
    Transform Strength • Power • Endurance
  </p>
  <div className="relative z-10 mt-4 w-28 h-[3px] bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full"></div>
</div>




    {/* Three responsive program cards (1 column mobile, 2 on md, 3 on lg) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 sm:p-20  md:p-40">
  {/* Card 1 - Weight Loss */}

  

  <article className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
    <div className="h-48 md:h-56 w-full">
      <img
        src="https://images.unsplash.com/photo-1634463278803-f9f71890e67d?auto=format&fit=crop&w=1170&q=80"
        alt="Weight loss training"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    <div className="p-5 flex-1 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Weight Loss</h3>
      <p className="text-sm text-gray-600 mb-4 flex-1">
        Customized calorie-deficit plans with strength & cardio to burn fat efficiently and retain muscle.
      </p>

      <div className="mt-4">

        <NavLink to="/weightlossmale" >
        <a
          href="/programs/male-weight-loss"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          Read more
        </a>
        </NavLink>
      </div>
    </div>
  </article>

  

  {/* Card 2 - Weight Gain */}
  <article className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
    <div className="h-48 md:h-56 w-full">
      <img
        src="https://images.unsplash.com/photo-1522844990619-4951c40f7eda?auto=format&fit=crop&w=1170&q=80"
        alt="Weight gain / bulking training"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    <div className="p-5 flex-1 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Weight Gain</h3>
      <p className="text-sm text-gray-600 mb-4 flex-1">
        Evidence-backed bulking programs with progressive overload and calorie-dense nutrition for lean mass.
      </p>

      <div className="mt-4">

        <NavLink to="/maleweightgain" >
        <a
          href="/programs/male-weight-gain"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          Read more
        </a>
        </NavLink>
      </div>
    </div>
  </article>

  {/* Card 3 - Fat Loss */}
  <article className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
    <div className="h-48 md:h-56 w-full">
      <img
        src="https://plus.unsplash.com/premium_photo-1671717726440-48628d927404?auto=format&fit=crop&w=687&q=80"
        alt="Fat loss and conditioning"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    <div className="p-5 flex-1 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Fat Loss</h3>
      <p className="text-sm text-gray-600 mb-4 flex-1">
        Targeted routines and macro-focused nutrition to reduce body fat while preserving strength and performance.
      </p>

      <div className="mt-4">
        <NavLink to="/fatlossmale" >
        <a
          href="/programs/male-fat-loss"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          Read more
        </a>

        </NavLink>
      </div>
    </div>
  </article>
</div>



<div className="relative flex flex-col items-center justify-center text-center py-10 px-4 overflow-hidden rounded-2xl shadow-lg bg-gradient-to-r from-pink-600 via-rose-700 to-fuchsia-800 text-white">
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1600&q=80')] opacity-25 bg-cover bg-center"></div>

  <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide">
    Female Section
  </h1>
  <p className="relative z-10 text-pink-100 text-sm sm:text-base mt-2">
    Strength • Confidence • Balance
  </p>
  <div className="relative z-10 mt-4 w-28 h-[3px] bg-gradient-to-r from-pink-200 via-rose-300 to-fuchsia-400 rounded-full"></div>
</div>


{/* Three responsive program cards (1 column mobile, 2 on md, 3 on lg) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  p-8 sm:p-20  md:p-40">
  {/* Card 1 - Weight Loss */}
  <article className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
    <div className="h-48 md:h-56 w-full">
      <img
        src="https://images.unsplash.com/photo-1634463278803-f9f71890e67d?auto=format&fit=crop&w=1170&q=80"
        alt="Weight loss training"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    <div className="p-5 flex-1 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Weight Loss</h3>
      <p className="text-sm text-gray-600 mb-4 flex-1">
        Customized calorie-deficit plans with strength & cardio to burn fat efficiently and retain muscle.
      </p>

      <div className="mt-4">
        <NavLink to="/femaleweightloss">
        <a
          href="/programs/male-weight-loss"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          Read more
        </a>
        </NavLink>
      </div>
    </div>
  </article>

  {/* Card 2 - Weight Gain */}
  <article className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
    <div className="h-48 md:h-56 w-full">
      <img
        src="https://images.unsplash.com/photo-1522844990619-4951c40f7eda?auto=format&fit=crop&w=1170&q=80"
        alt="Weight gain / bulking training"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    <div className="p-5 flex-1 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Weight Gain</h3>
      <p className="text-sm text-gray-600 mb-4 flex-1">
        Evidence-backed bulking programs with progressive overload and calorie-dense nutrition for lean mass.
      </p>

      <div className="mt-4">
        <NavLink to="/femaleweightgain">
        <a
          href="/programs/male-weight-gain"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          Read more
        </a>
        </NavLink>
      </div>
    </div>
  </article>

  {/* Card 3 - Fat Loss */}
  <article className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
    <div className="h-48 md:h-56 w-full">
      <img
        src="https://plus.unsplash.com/premium_photo-1671717726440-48628d927404?auto=format&fit=crop&w=687&q=80"
        alt="Fat loss and conditioning"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    <div className="p-5 flex-1 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Fat Loss</h3>
      <p className="text-sm text-gray-600 mb-4 flex-1">
        Targeted routines and macro-focused nutrition to reduce body fat while preserving strength and performance.
      </p>

      <div className="mt-4">
        <NavLink to="/femalefatloss">
        <a
          href="/programs/male-fat-loss"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          Read more
        </a>
        </NavLink>
      </div>
    </div>
  </article>
</div>








































        

      
      {/* Programs Section */}
      <section id="programs" className="relative z-10 mt-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Popular Programs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Strength Training */}
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=80"
              alt="Strength Training"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                Strength Training
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Build lean muscle and endurance with expert-designed strength
                programs.
              </p>
            </div>
          </div>


           

          

           

          {/* Cardio Workouts */}
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80"
              alt="Cardio Workouts"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                Cardio Workouts
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Improve stamina and burn calories with our dynamic cardio
                routines.
              </p>
            </div>
          </div>

          {/* Nutrition Coaching */}
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
              alt="Nutrition Coaching"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                Nutrition Coaching
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Get customized meal plans and dietary advice from our certified
                experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DietHero/>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 mt-16 mb-24 text-center px-6 max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-bold mb-3 text-gray-800">
          Ready to Start Your Journey?
        </h3>
        <p className="text-gray-600 text-base mb-4">
          Contact us today and let’s build a better, stronger you!
        </p>
        <a
          href="mailto:contact@rrfitnessclub.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Email: contact@rrfitnessclub.com
        </a>
      </section>

      {/* Popup Animation */}
      <style>{`
        @keyframes pop {
          0% { opacity: 0; transform: translateY(8px) scale(.95); }
          60% { opacity: 1; transform: translateY(-4px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}
