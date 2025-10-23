export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-8rem)] px-6 bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
          Welcome to <span className="text-blue-600">RR Fitness</span>
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Transform your body, mind, and lifestyle with our professional fitness guidance.
          Join the RR Fitness community today and take your first step toward a stronger you!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#programs"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Programs or Highlights Section */}
      <div id="programs" className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Strength Training</h2>
          <p className="text-gray-600 text-sm">
            Build muscle and improve endurance with customized strength routines.
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Cardio Workouts</h2>
          <p className="text-gray-600 text-sm">
            Burn fat and boost stamina with effective, science-backed programs.
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Nutrition Coaching</h2>
          <p className="text-gray-600 text-sm">
            Get personalized meal plans and guidance from certified nutrition experts.
          </p>
        </div>
      </div>
    </section>
  );
}
