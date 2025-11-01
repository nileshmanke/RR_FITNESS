// src/components/Contact.jsx
import React, { useState } from "react";

/**
 * Contact page with two co-owner cards (Rohit Patil & Rushabh Mishra),
 * plus contact form and extras. Buttons are responsive (stack on mobile).
 */

const owners = [
  {
    id: 1,
    name: "Rohit Patil",
    role: "Co-Owner & Head Coach",
    img:
      // male portrait from Unsplash
      "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    email: "rohit@rrfitnessclub.com",
    phone: "+91-98765-11111",
    insta: "https://instagram.com/rohit_rrfitness",
    bio:
      "Certified strength & conditioning coach focused on progressive strength programs, mobility and sustainable training.",
    experience: "7 years",
    certs: "NASM, Sports Nutrition",
    socials: {
      instagram: "rohit_rrfitness",
      linkedin: "https://www.linkedin.com/in/rohit-patil",
    },
  },
  {
    id: 2,
    name: "Rushabh Mishra",
    role: "Co-Owner & Nutrition Specialist",
    img:
      // male portrait from Unsplash
      "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    email: "rushabh@rrfitnessclub.com",
    phone: "+91-91234-22222",
    insta: "https://instagram.com/rushabh_rrnutrition",
    bio:
      "Nutrition coach with a practical, habit-based approach to fat loss, muscle gain and sports performance.",
    experience: "8 years",
    certs: "Precision Nutrition Level 1, PG Dip. Dietetics",
    socials: {
      instagram: "rushabh_rrnutrition",
      linkedin: "https://www.linkedin.com/in/rushabh-mishra",
    },
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder: replace with real API / EmailJS integration
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent — we will contact you soon!");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 4000);
    }, 1000);
  }

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto mt-12">
      <h1 className="text-3xl font-bold text-center mb-6">Contact & Meet the Owners</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Have a question about our programs or supplements? Reach out to the co-owners directly
        or use the contact form below.
      </p>

      {/* Owner cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {owners.map((o) => (
          <article
            key={o.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row"
            aria-labelledby={`owner-${o.id}-name`}
          >
            <div className="md:w-1/3 h-56 md:h-auto relative">
              <img
                src={o.img}
                alt={`${o.name} photo`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-6 md:w-2/3 flex flex-col justify-between">
              <div>
                <h2 id={`owner-${o.id}-name`} className="text-2xl font-semibold">
                  {o.name}
                </h2>
                <div className="text-sm text-gray-500 mb-3">{o.role}</div>

                <p className="text-gray-700 mb-4">{o.bio}</p>

                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>
                    <strong>Experience:</strong> {o.experience}
                  </li>
                  <li>
                    <strong>Certifications:</strong> {o.certs}
                  </li>
                </ul>
              </div>

              {/* contact buttons / links: responsive layout */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 items-stretch">
                <a
                  href={`mailto:${o.email}`}
                  className="w-full sm:w-auto inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-sm justify-center"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Email
                </a>

                <a
                  href={`tel:${o.phone}`}
                  className="w-full sm:w-auto inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 transition justify-center"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h2.2a2 2 0 011.8 1.1l.9 1.8a2 2 0 01-.45 2.12L8.2 10.8a16 16 0 006.95 6.95l1.7-1.75a2 2 0 012.12-.45l1.8.9A2 2 0 0121 18.8V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 4V3z"
                    ></path>
                  </svg>
                  {o.phone}
                </a>

                <a
                  href={o.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 transition justify-center"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm6.5-.75a1.25 1.25 0 11-1.25-1.25A1.25 1.25 0 0118.5 7.75z"></path>
                  </svg>
                  Instagram
                </a>

                <a
                  href={o.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto ml-0 sm:ml-auto text-sm text-blue-600 hover:underline flex items-center justify-center"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Extras after cards */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact form */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold mb-3">Send us a message</h3>
          <p className="text-sm text-gray-600 mb-4">
            Use this form for enquiries about memberships, supplements, or diet plans.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-200 outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-200 outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-200 outline-none"
                placeholder="How can we help?"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                Send Message
              </button>
              {status && <div className="text-sm text-green-600">{status}</div>}
            </div>
          </form>
        </div>

        {/* Location & hours */}
        <aside className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold mb-3">Visit Us</h3>

          <div className="text-sm text-gray-700 mb-4">
            <p>
              <strong>Address:</strong> RR Fitness & Nutrition Club, 42 Fitness Street, Pune,
              MH
            </p>
            <p className="mt-2">
              <strong>Phone:</strong> +91-98765-43210
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@rrfitnessclub.com"
                className="text-blue-600 hover:underline"
              >
                contact@rrfitnessclub.com
              </a>
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Opening Hours</h4>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>Mon - Fri: 5:30 AM – 10:00 PM</li>
              <li>Sat: 6:00 AM – 8:00 PM</li>
              <li>Sun: 7:00 AM – 6:00 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Find us on map</h4>
           <div className="w-full rounded-md overflow-hidden">
  <div className="relative" style={{ paddingTop: "56.25%" /* 16:9 */ }}>
    <iframe
      title="RR Fitness & Nutrition Club location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.2555550983197!2d75.38564092468563!3d19.913632925144242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbbcd57f54abb1%3A0xaedb8b5adf9647dc!2sPisadevi%2C%20Maharashtra%20431008!5e0!3m2!1sen!2sin!4v1762021567676!5m2!1sen!2sin"
      className="absolute inset-0 w-full h-full border-0"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                className="text-pink-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://youtube.com"
                className="text-red-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
