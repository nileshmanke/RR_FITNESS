// src/components/GetFreeDietPlan.jsx
import React, { useState, useEffect } from "react";
import { init, send } from "@emailjs/browser";

export default function GetFreeDietPlan() {
  // Replace these with your EmailJS values
  const SERVICE_ID = "service_q3msuai";
  const TEMPLATE_ID = "template_xpfaeog";
  const PUBLIC_KEY = "NgQKgn1W0l-4bPVA2";

  useEffect(() => {
    if (PUBLIC_KEY && PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
      init(PUBLIC_KEY);
    }
  }, [PUBLIC_KEY]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "male",
    heightCm: "",
    weightKg: "",
    activityLevel: "moderate",
    goals: "",
    allergies: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // success or error text
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    // simple email regex
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.heightCm || isNaN(Number(form.heightCm))) return "Please enter height in cm.";
    if (!form.weightKg || isNaN(Number(form.weightKg))) return "Please enter weight in kg.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    // prepare template params (match your EmailJS template variables)
    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone || "N/A",
      age: form.age || "N/A",
      gender: form.gender,
      heightCm: form.heightCm,
      weightKg: form.weightKg,
      activityLevel: form.activityLevel,
      goals: form.goals || "N/A",
      allergies: form.allergies || "N/A",
      notes: form.notes || "N/A",
      submittedAt: new Date().toLocaleString(),
    };

    try {
      setLoading(true);
      // send email via EmailJS
      const res = await send(SERVICE_ID, TEMPLATE_ID, templateParams);
      // res.status === 200 means success
      setMessage("Thank you — we received your info. We will send the diet plan you deserve to your email soon.");
      // optionally reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "male",
        heightCm: "",
        weightKg: "",
        activityLevel: "moderate",
        goals: "",
        allergies: "",
        notes: "",
      });
    } catch (err) {
      console.error("Email send error:", err);
      setError("Something went wrong while sending. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Get Free Diet Plan</h2>
      <p className="text-sm text-gray-600 text-center mb-6">
        Fill the form and we’ll email a personalized diet plan tailored for you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* name + email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Full name *</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="Rohit Patil"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email *</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="you@example.com"
            />
          </label>
        </div>

        {/* phone + age */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Phone</span>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="+91 9XXXXXXXXX"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Age</span>
            <input
              name="age"
              value={form.age}
              onChange={handleChange}
              type="number"
              min="10"
              max="120"
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="25"
            />
          </label>
        </div>

        {/* gender + activity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Gender</span>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other / Prefer not to say</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Activity level</span>
            <select
              name="activityLevel"
              value={form.activityLevel}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
            >
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="light">Light (1-3 workouts/week)</option>
              <option value="moderate">Moderate (3-5 workouts/week)</option>
              <option value="active">Active (6-7 workouts/week)</option>
              <option value="very-active">Very active (heavy training)</option>
            </select>
          </label>
        </div>

        {/* height + weight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Height (cm) *</span>
            <input
              name="heightCm"
              value={form.heightCm}
              onChange={handleChange}
              required
              type="number"
              min="50"
              max="300"
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="170"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Weight (kg) *</span>
            <input
              name="weightKg"
              value={form.weightKg}
              onChange={handleChange}
              required
              type="number"
              min="20"
              max="500"
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="70"
            />
          </label>
        </div>

        {/* goals */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Primary goals (short)</span>
          <input
            name="goals"
            value={form.goals}
            onChange={handleChange}
            placeholder="Fat loss / Muscle gain / Maintain / Improve energy"
            className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </label>

        {/* allergies */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Allergies / Food dislikes</span>
          <input
            name="allergies"
            value={form.allergies}
            onChange={handleChange}
            placeholder="e.g. lactose, peanuts, vegetarian"
            className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </label>

        {/* notes */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Notes (medical conditions / preferences)</span>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
            placeholder="Any injuries, medicines, fasting preferences, etc."
          />
        </label>

        {/* error / message */}
        {error && <div className="text-sm text-red-600">{error}</div>}
        {message && <div className="text-sm text-green-600">{message}</div>}

        {/* submit */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 active:scale-95 transition"
          >
            {loading ? "Sending..." : "Get Free Diet Plan"}
          </button>

          <button
            type="button"
            onClick={() =>
              setForm({
                name: "",
                email: "",
                phone: "",
                age: "",
                gender: "male",
                heightCm: "",
                weightKg: "",
                activityLevel: "moderate",
                goals: "",
                allergies: "",
                notes: "",
              })
            }
            className="px-3 py-2 border rounded-md text-sm"
          >
            Reset
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          By submitting you agree we may contact you by email/chat to deliver your plan.
        </p>
      </form>
    </section>
  );
}
