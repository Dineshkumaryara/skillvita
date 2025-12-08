"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

interface ApplyNowDialogProps {
  handleCloseDialog: () => void;
  courseTitle: string;
  courseLink: string;
}

const ApplyNowDialog: React.FC<ApplyNowDialogProps> = ({
  handleCloseDialog,
  courseTitle,
  courseLink,
}) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onClickHandler = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    event.preventDefault();
    router.push(path);
    window.scrollTo(0, 0);
  };

  const handleDownload = async () => {
    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/course/applyNow`,
        {
          fullName: name,
          emailId,
          number: mobileNum,
          courseName: courseTitle,
        }
      );
      setName("");
      setEmailId("");
      setMobileNum("");
      window.open(courseLink, "_blank");
      handleCloseDialog();
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } 
catch (error: unknown) {
  const err = error as AxiosError<{ message?: string }>;
  console.error(
    "Error subscribing:",
    err.response?.data?.message || err.message
  );
}finally {
      setLoading(false);
    }
  };

  const validation = () => {
    const mobileNumRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) {
      setMessage("Please enter Full name");
      return false;
    } else if (!emailId.trim() || !emailRegex.test(emailId)) {
      setMessage("Please enter valid Email Id");
      return false;
    } else if (
      !mobileNum.trim() ||
      mobileNum.length !== 10 ||
      !mobileNumRegex.test(mobileNum)
    ) {
      setMessage("Please enter valid mobile number");
      return false;
    } else {
      setMessage("");
      handleDownload();
      return true;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm">
      <div className="bg-white text-right relative w-[90%] max-w-md rounded-xl shadow-lg">
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={handleCloseDialog}
        >
          <Image
            src="/images/findYourCareer/Cancel.svg"
            alt="Cancel"
            width={24}
            height={24}
          />
        </div>

        <div className="px-6 pt-6 pb-8 text-left">
          <h2 className="text-center font-outfit font-semibold text-[20px] text-[#0f002e] mb-1">
            Start Your Application Process
          </h2>

          <div className="mt-4 flex flex-col">
            <label
              className="text-[#939393] font-outfit text-[12px] mb-1"
              htmlFor="name"
            >
              Full Name*
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-[#939393] px-3 py-2 text-[14px] focus:outline-none focus:border-[#7233f7]"
            />
          </div>

          <div className="mt-4 flex flex-col">
            <label
              className="text-[#939393] font-outfit text-[12px] mb-1"
              htmlFor="email"
            >
              Email ID*
            </label>
            <input
              id="email"
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="w-full rounded-md border border-[#939393] px-3 py-2 text-[14px] focus:outline-none focus:border-[#7233f7]"
            />
          </div>

          <div className="mt-4 flex flex-col">
            <label
              className="text-[#939393] font-outfit text-[12px] mb-1"
              htmlFor="mobile"
            >
              Mobile Number*
            </label>
            <input
              id="mobile"
              type="text"
              value={mobileNum}
              onChange={(e) => setMobileNum(e.target.value)}
              maxLength={10}
              className="w-full rounded-md border border-[#939393] px-3 py-2 text-[14px] focus:outline-none focus:border-[#7233f7]"
            />
          </div>

          {message && (
            <p className="text-red-600 font-outfit font-medium text-[14px] pt-2">
              {message}
            </p>
          )}

          <button
            onClick={validation}
            disabled={loading}
            className="mt-5 w-full h-10 bg-[#7233f7] text-white font-outfit font-medium text-[14px] rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Apply Now"}
          </button>

          <p className="text-[#5a5a5a] font-outfit text-[14px] font-normal leading-6 pt-2 text-center">
            By filling this form, you agree to our{" "}
            <a
              href="/terms"
              onClick={(e) => onClickHandler(e, "/terms")}
              className="text-[#7234F7] no-underline"
            >
              Terms and conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplyNowDialog;
