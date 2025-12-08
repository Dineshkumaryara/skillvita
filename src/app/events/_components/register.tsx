// app/(info)/events/[id]/_components/RegistrationForm.tsx
"use client";

import { useState } from "react";

interface RegistrationFormProps {
  event: { title: string };
  isWaitlist: boolean;
  onClose: () => void;
}

export const RegistrationForm = ({ event, isWaitlist, onClose }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventTitle: event.title,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const requestData = {
        eventTitle: formData.eventTitle,
        fullname: formData.fullName,
        email: formData.email,
        phone: formData.phone,
      };

      const endpoint = isWaitlist
        ? `${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/joinevent`
        : `${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/registerevent`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Something went wrong");

      setSuccess(true);
      setFormData({ ...formData, fullName: "", email: "", phone: "" });
   } catch (err: unknown) {
  if (err instanceof Error) {
    setError(err.message);
  } else {
    setError("Something went wrong");
  }
}

  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h3 className="text-xl font-semibold to-brand-500">
            {isWaitlist ? "Join Waitlist" : "Register for Event"}
          </h3>
          <button className="text-2xl" onClick={onClose}>&times;</button>
        </div>

        {success ? (
          <div className="text-center">
            <h4 className="text-green-600 text-lg mb-2">
              Thank you for your {isWaitlist ? "interest" : "registration"}!
            </h4>
            <p className="mb-4">
              {isWaitlist
                ? "You've been added to the waitlist."
                : "Your registration was successful."}
            </p>
            <button className="bg-brand-500 text-white px-4 py-2 rounded" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm">Event</label>
              <input
                type="text"
                value={formData.eventTitle}
                disabled
                className="w-full p-2 border bg-gray-100 rounded"
              />
            </div>

            <div>
              <label htmlFor="fullName" className="text-sm">Full Name*</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm">Phone*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your phone number"
              />
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                className="border px-4 py-2 rounded text-brand-500"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-brand-500 text-white px-4 py-2 rounded"
              >
                {loading ? "Processing..." : isWaitlist ? "Join Waitlist" : "Register Now"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
