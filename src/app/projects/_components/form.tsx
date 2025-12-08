 "use client";

import React, { useState } from "react";
import { isEmpty } from "lodash";
import axios from "axios";

interface ProjectsFormProps {
  handleCloseDialog: () => void;
  title: string;
}

export default function Projectsform({ handleCloseDialog, title }: ProjectsFormProps) {
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [teamname, setTeamname] = useState("");
  const [teamsize, setTeamsize] = useState(1);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
    setMessage("");
  };

  const handleDownload = async () => {
    setLoading(true);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/forms/projects`, {
        projecttitle: title,
        fullname: name,
        email: emailId,
        phone: mobileNum,
        ...(activeTab === 1 && { teamname, teamsize }),
      });

      setName("");
      setEmailId("");
      setMobileNum("");
      setTeamname("");
      setTeamsize(1);
      setSuccessMessage("Form submitted successfully!");

      setTimeout(() => {
        setSuccessMessage("");
        handleCloseDialog();
      }, 3000);
    } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    console.error("Error submitting form:", error.response?.data?.message || error.message);
  } else {
    console.error("Error submitting form:", (error as Error).message);
  }
}
 finally {
      setLoading(false);
    }
  };

  const validation = () => {
    const mobileNumRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (isEmpty(name)) {
      setMessage("Please enter Full name");
    } else if (isEmpty(emailId) || !emailRegex.test(emailId)) {
      setMessage("Please enter valid Email Id");
    } else if (isEmpty(mobileNum) || !mobileNumRegex.test(mobileNum)) {
      setMessage("Please enter valid mobile number");
    } else if (activeTab === 1 && isEmpty(teamname)) {
      setMessage("Please enter team name");
    } else {
      setMessage("");
      handleDownload();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-black text-black dark:text-white rounded-t-[25px] p-6 text-start relative">
      <div className="absolute top-3 right-3 cursor-pointer" onClick={handleCloseDialog}>
        {/* Replacing missing Cancel.svg with inline SVG cross icon */}
        <span title="Cancel" aria-label="Cancel" className="inline-block w-6 h-6 align-middle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="18" x2="18" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </div>

      <h2 className="text-xl font-semibold text-center mb-4">Join Waitlist Application</h2>

      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={() => handleTabChange(0)}
          className={`px-4 py-2 text-sm font-medium border-b-2 ${
            activeTab === 0 ? "border-[#7234F7] text-[#7234F7]" : "border-transparent text-gray-500"
          }`}
        >
          Individual
        </button>
        <button
          onClick={() => handleTabChange(1)}
          className={`px-4 py-2 text-sm font-medium border-b-2 ${
            activeTab === 1 ? "border-[#7234F7] text-[#7234F7]" : "border-transparent text-gray-500"
          }`}
        >
          Team
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm text-gray-500 mb-1">
            {activeTab === 0 ? "Full Name*" : "Full Name (Leader Name)*"}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-500 mb-1">Email ID*</label>
          <input
            type="email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-500 mb-1">Mobile Number*</label>
          <input
            type="tel"
            value={mobileNum}
            onChange={(e) => setMobileNum(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {activeTab === 1 && (
          <>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Team Name*</label>
              <input
                type="text"
                value={teamname}
                onChange={(e) => setTeamname(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Team Size* (2–6)</label>
              <select
                value={teamsize}
                onChange={(e) => setTeamsize(Number(e.target.value))}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {[2, 3, 4, 5, 6].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        {message && <p className="text-red-500 text-sm pt-1">{message}</p>}
        {successMessage && <p className="text-green-600 text-sm pt-1">{successMessage}</p>}

        <button
          onClick={validation}
          disabled={loading}
          className="bg-[#7234F7] text-white font-medium text-sm py-2 rounded mt-2 hover:bg-[#7234F7] transition disabled:opacity-50"
        >
          {loading ? "Processing..." : "Join Now"}
        </button>
      </div>
    </div>
  );
}
