'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';

interface BrochureDownloadDialogProps {
  handleCloseDialog: () => void;
  courseTitle: string;
  brochureUrl: string;
}

const BrochureDownloadDialog: React.FC<BrochureDownloadDialogProps> = ({
  handleCloseDialog,
  courseTitle,
  brochureUrl,
}) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleDownload = async () => {
    const currentUrl = window.location.href;
    const pageDescription = `The user downloaded the brochure from ${courseTitle} course page`;

    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/downloadCurriculum`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: name,
          emailId: emailId,
          number: mobileNum,
          course: courseTitle,
          captchaToken: captchaToken,
          currentUrl: currentUrl,
          pageDescription: pageDescription,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Reset form
      setName('');
      setEmailId('');
      setMobileNum('');
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
      
      // Open brochure in new tab
      window.open(brochureUrl, '_blank');
      
      // Close dialog
      handleCloseDialog();
    } catch (error) {
      console.error('Error downloading brochure:', error);
      setMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const validation = () => {
    const mobileNumRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      setMessage('Please enter Full name');
      return false;
    } else if (!emailId.trim() || !emailRegex.test(emailId)) {
      setMessage('Please enter valid Email Id');
      return false;
    } else if (!mobileNum.trim() || !mobileNumRegex.test(mobileNum)) {
      setMessage('Please enter valid mobile number');
      return false;
    } else if (!captchaToken) {
      setMessage('Please verify the captcha');
      return false;
    } else {
      setMessage('');
      handleDownload();
      return true;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-lg w-full max-w-md p-10 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={handleCloseDialog}
        >
          <Image
            src="/coursePreview/Cancel.svg"
            alt="Cancel"
            width={24}
            height={24}
          />
        </button>

        <h2 className="text-2xl font-semibold text-center mb-2 text-black dark:text-white">
          Download the curriculum today!
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Please fill out the form to download the curriculum
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
              Full Name*
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-[#27272A] dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
              Email ID*
            </label>
            <input
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-[#27272A] dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
              Mobile Number*
            </label>
            <input
              type="tel"
              value={mobileNum}
              onChange={(e) => setMobileNum(e.target.value)}
              maxLength={10}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-[#27272A] dark:text-white"
            />
          </div>

          {message && (
            <p className="text-red-500 text-sm">{message}</p>
          )}

          <div className="pb-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_APP_CAPTCHA_KEY!}
              onChange={(token) => setCaptchaToken(token)}
              theme="light"
            />
          </div>

          <button
            onClick={validation}
            disabled={loading}
            className="w-full bg-[#7234F7] text-white py-3 rounded-md font-semibold hover:bg-[#6B46FE] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Downloading...' : 'Download'}
          </button>

          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            By filling this form, you agree to our{' '}
            <a href="/terms-and-conditions" className="text-[#7234F7] hover:underline">
              Terms and conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrochureDownloadDialog; 