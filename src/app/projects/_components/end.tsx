"use client";

import { useState } from "react";
import axios from "axios";

const End = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleClick = async () => {
    setLoading(true);

    if (!validateEmail(email)) {
      setSuccessMessage("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/addProjectRequirement`,
        { email }
      );
      setEmail("");
      setSuccessMessage("You have been subscribed successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setSuccessMessage(
          error.response?.data?.message || "Something went wrong."
        );
        console.error("Axios error subscribing:", error);
      } else {
        setSuccessMessage("An unexpected error occurred.");
        console.error("Unknown error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-12 mt-10 px-4">
      <div
        className="
          relative w-full max-w-7xl mx-auto rounded-lg
          bg-cover bg-center bg-no-repeat
          px-4 py-10 sm:px-8 sm:py-16 text-center
          border border-[#E4E4E7] dark:border-[#27272A]
        "
        style={{
          minHeight: "300px",
          backgroundImage: "url('/images/ProjectsPage/background.svg')",
        }}
      >
        <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-black dark:text-white">
          Let&apos;s Build Great Projects Together
        </h2>
        <p className="font-outfit text-sm sm:text-base font-light mb-8 max-w-xl mx-auto text-gray-700 dark:text-gray-300">
          Inviting startups and students to collaborate and help in building
          innovative projects with real-world impact.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md w-full mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full sm:w-auto flex-1 rounded
              border border-[#E4E4E7] dark:border-[#27272A]
              bg-white dark:bg-black
              text-black dark:text-white
              px-4 py-2 font-outfit text-sm
              placeholder-black dark:placeholder-gray-400
              focus:outline-none focus:ring-0
            "
          />
          <button
            onClick={handleClick}
            disabled={loading}
            className="
              w-full sm:w-auto bg-[#FE7465] hover:bg-[#e75a53]
              text-white px-5 py-2 font-outfit text-sm font-medium rounded
              transition-colors
            "
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>

        <div
          className={`
            mt-4 font-outfit text-sm ${
              successMessage.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }
          `}
        >
          {successMessage}
        </div>
      </div>
    </div>
  );
};

export default End;
