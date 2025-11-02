// src/components/BackToHomeButton.jsx
import { Link } from "react-router-dom";

export default function BackToHomeButton() {
  return (
    <div className="flex justify-center mt-8 mb-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-transform duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Home
      </Link>
    </div>
  );
}
