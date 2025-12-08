/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { isEmpty } from "lodash";
import ReCAPTCHA from "react-google-recaptcha";
import ApplyNowDialog from "./ApplyNowDialog";

interface CourseContent {
  courseTitle: string;
  // course: string;
  learnmoreCourse: string;
  courseDesc: string;
  keywords: string[];
  sellingPrice: number;
  costPrice: number;
  image: string;
  period: string;
  mode: string;
  // Add other properties as needed
}

interface Errors {
  firstname: string;
  lastName: string;
  email: string;
  mobileNumber: string;
}

const Checkout = ({ courseContent }: { courseContent: CourseContent }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mobileNumberRef = useRef<HTMLInputElement>(null);

  const [firstname, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [agree, setAgree] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [captchaMessage, setCaptchaMessage] = useState<string>("");
  const [discountErrorMessage, setDiscountErrorMessage] = useState<string>("");
  const [discountSuccessMessage, setDiscountSuccessMessage] = useState<string>("");
  const [couponCode, setCouponCode] = useState<string>("");
  const priceOfSellingCourse = courseContent?.sellingPrice;
  const [finalAmount, setFinalAmount] = useState<number>(priceOfSellingCourse);
  const [couponApplied, setCouponApplied] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [applyCouponLoading, setApplyCouponLoading] = useState<boolean>(false);

  const [errors, setErrors] = useState<Errors>({
    firstname: "",
    lastName: "",
    email: "",
    mobileNumber: "",
  });

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const validation = (): boolean => {
    const mobileNumRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors: Errors = {
      firstname: "",
      lastName: "",
      email: "",
      mobileNumber: "",
    };

    if (isEmpty(firstname)) {
      newErrors.firstname = "Please enter first name";
    }
    if (isEmpty(lastName)) {
      newErrors.lastName = "Please enter last name";
    }
    if (isEmpty(email)) {
      newErrors.email = "Please enter a valid Email Id";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid Email Id";
    }
    if (isEmpty(mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid mobile number";
    } else if (!mobileNumRegex.test(mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid mobile number";
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== "");
    if (hasErrors) {
      if (newErrors.firstname && firstnameRef.current) {
        firstnameRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (newErrors.lastName && lastNameRef.current) {
        lastNameRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (newErrors.email && emailRef.current) {
        emailRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (newErrors.mobileNumber && mobileNumberRef.current) {
        mobileNumberRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return false;
    }
    return true;
  };

  const toggleCheckbox = () => {
    setAgree(!agree);
  };

  const getPageName = async (): Promise<string> => {
    if (typeof window === 'undefined') return '';
    
    const { hostname, pathname } = window.location;
    const siteName = hostname.split('.')[0].charAt(0).toUpperCase() + hostname.split('.')[0].slice(1);
    const pathSegments = pathname.split('/').filter(Boolean);
    
    if (pathSegments.length === 0) {
      return `The user clicked on the ${siteName} Main Page and reached the payment page`;
    }

    const pageDescriptions = pathSegments.map(segment => {
      if (segment && typeof segment === 'string') {
        return segment.replace(/-/g, ' ').charAt(0).toUpperCase() + segment.slice(1) + " Page";
      }
      return "";
    }).filter(Boolean);

    return `The user clicked through to the ${siteName} ${pageDescriptions.join(' -> ')} and reached payment page`;
  };
  const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (document.getElementById('razorpay-sdk')) {
      return resolve(true);
    }

    const script = document.createElement("script");
    script.id = "razorpay-sdk";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};


const handlePayment = async () => {
  if (typeof window === 'undefined') return;


  const sdkLoaded = await loadRazorpayScript();
  if (!sdkLoaded) {
    alert("Failed to load Razorpay SDK. Please check your connection.");
    return;
  }

  const currentUrl = window.location.href;
  const pageDescription = await getPageName();

  if (validation()) {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/verifyCaptchaCheckout`,
        { 
          recaptchaValue: recaptchaRef.current?.getValue(),
          email, 
          mobileNumber,
          firstname,
          lastName,
          currentUrl,
          pageDescription,
          course: courseContent.courseTitle
        }
      );

      if (response.data.message === "success") {
        setCaptchaMessage("");

        const options = {
          key: process.env.NEXT_PUBLIC_RAZOR_PAY_KEY!,
          key_secret: process.env.NEXT_PUBLIC_RAZOR_PAY_SECRET_KEY,
          amount: parseInt(finalAmount.toString()) * 100,
          currency: "INR",
          name: "Coursevita",
          description: `Payment for ${courseContent?.courseTitle} Program`,
          handler: function (response: { razorpay_payment_id: string }) {
            console.log("payment id", response.razorpay_payment_id);
          },
          theme: {
            color: "#7233F7",
          },
        };

        const razorpay = new (window as any).Razorpay(options);
        console.log(razorpay)
        razorpay.open();
        recaptchaRef.current?.reset();
      } else {
        setMessage(response.data.message);
      }
    } catch (error: any) {
      if (error?.response?.data?.message) {
        setCaptchaMessage(error.response.data.message);
      }
    }
  }
};


  const handleApplyClick = async () => {
    setApplyCouponLoading(true);
    await axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/verifyCoupon`, {
        promocode: couponCode,
      })
      .then((response) => {
        console.log("Response:", response.data);
        setDiscountErrorMessage("");
        setDiscountSuccessMessage("Coupon code applied");
        setFinalAmount((prevValue) => {
          const discount = response.data.discountAmount;
          const finalDiscountedAmount = prevValue - discount;
          return finalDiscountedAmount;
        });
        setCouponApplied(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setDiscountSuccessMessage("");
        setDiscountErrorMessage("Invalid coupon code");
      })
      .finally(() => {
        setApplyCouponLoading(false);
      });
  };

 

const noop = () => {};
  return (
    <div className="p-4 md:p-8 font-outfit">
      <h1 className="text-xl font-normal dark:text-white pb-6 md:pb-6">Order Summary</h1>
      
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Side */}
        <div className="w-full md:w-3/5">
          {/* Course Information */}
          <div className="flex flex-col sm:flex-row mb-8 md:mb-10">
            <div className="w-full sm:w-80 h-45 relative rounded-xl overflow-hidden">
              {courseContent?.image ? (
  <Image
    src={courseContent.image}
    alt="Course"
    fill
    className="object-cover"
  />
) : null}

            </div>
            <div className="sm:pl-7 pt-5 sm:pt-0">
              <h2 className="text-xl sm:text-base dark:text-white font-outfit leading-none">
                {courseContent?.courseTitle} Program
              </h2>
              <p className="py-3 sm:py-3 dark:text-white text-sm sm:text-xs font-outfit leading-none">
                Duration: <span className="font-medium">{courseContent?.period}</span>
              </p>
              <p className="text-sm sm:text-xs dark:text-white font-outfit leading-none">
                Mode: <span className="font-medium">{courseContent?.mode}</span>
              </p>
            </div>
          </div>

          {/* Talk to Expert Banner */}
          <div className="h-15 w-full bg-gradient-to-r from-purple-600 to-red-400 flex justify-between items-center p-4 mt-8 pl-5 mr-5 rounded-lg">
            <p className="text-white font-bold text-lg">
              Looking for more guidance and offers?
            </p>
            <button
              onClick={handleOpenDialog}
              className="bg-white text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-sm">Talk to expert</span>
            </button>
          </div>

          {/* Dialog */}
          {dialogOpen && (
            <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4">
              
                <ApplyNowDialog
                  handleCloseDialog={handleCloseDialog}
                  courseContent={courseContent}
                  handleOpenDialog={noop}
                  source="Talk_To_Expert"
                />
              </div>
           
          )}

          {/* Billing Details */}
          <div className="border border-[#E4E4E7] dark:border-[#27272A] rounded-lg p-6 md:p-8 mt-8 mb-6 max-w-4xl">
            <h3 className="text-xl font-normal dark:text-white font-outfit mb-6">Billing Details</h3>
            
            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row gap-5 mb-6">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-500 dark:text-white font-outfit text-base font-normal pt-4 pb-2">
                  First Name
                </label>
                <input
                  ref={firstnameRef}
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`w-full h-12 px-3 border border-[#E4E4E7] dark:border-[#27272A] rounded-md dark:text-white font-outfit text-base text-gray-600 font-medium focus:outline-none focus:border-purple-600 ${
                    errors.firstname ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-500 dark:text-white font-outfit text-base font-normal pt-4 pb-2">
                  Last name
                </label>
                <input
                  ref={lastNameRef}
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`w-full h-12 px-3 border border-[#E4E4E7] dark:border-[#27272A] dark:text-white rounded-md font-outfit text-base text-gray-600 font-medium focus:outline-none focus:border-purple-600 ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email and Mobile Fields */}
            <div className="flex flex-col sm:flex-row gap-5 mb-6">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-500 dark:text-white font-outfit text-base font-normal pt-4 pb-2">
                  Email address
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full h-12 px-3 border border-[#E4E4E7] dark:border-[#27272A] dark:text-white rounded-md font-outfit text-base text-gray-600 font-medium focus:outline-none focus:border-purple-600 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-500 dark:text-white font-outfit text-base font-normal pt-4 pb-2">
                  Mobile Number
                </label>
                <input
                  ref={mobileNumberRef}
                  type="text"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className={`w-full h-12 px-3 border border-[#E4E4E7] dark:border-[#27272A] rounded-md dark:text-white font-outfit text-base text-gray-600 font-medium focus:outline-none focus:border-purple-600 ${
                    errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
                )}
              </div>
            </div>

            {message && (
              <p className="text-red-500 pt-2 font-outfit">{message}</p>
            )}
          </div>
        </div>

        {/* Right Side - Payment Details */}
        <div className="w-full sm:w-4/5 md:w-1/3">
          <div className="bg-white dark:bg-black border border-[#E4E4E7] dark:border-[#27272A] border-opacity-50 rounded-xl md:rounded-2xl p-9 shadow-sm">
            {/* Payment Header */}
            <div className="flex gap-9 pb-11 sm:pb-9">
              <Image
                src="/images/payment.svg"
                alt="Payment"
                width={24}
                height={24}
              />
              <h3 className="text-2xl sm:text-xl font-outfit dark:text-white leading-none font-medium self-center">
                Payment details
              </h3>
            </div>

            {/* Price Details */}
            <div className="text-black font-outfit">
              <p className="text-3xl sm:text-xl pb-4 dark:text-white sm:pb-5 font-medium">Total Program Fee</p>
              <p className="text-2xl dark:text-white sm:text-base pb-7 sm:pb-5 font-normal">
                <del>₹{courseContent?.costPrice}/-</del>
              </p>
              <p className="text-base font-normal dark:text-white leading-none pb-1 sm:pb-6">With Early bird offer</p>
              <p className="text-3xl sm:text-2xl pb-1 sm:pb-2 dark:text-white font-medium leading-none">₹{finalAmount}/-</p>
              <p className="font-light text-xs dark:text-white pb-10 sm:pb-8">*Including GST</p>
            </div>

            {/* Coupon Code */}
            <div className="flex flex-col items-start mb-4">
              <label className="text-sm dark:text-white mb-2">Apply coupon-code</label>
              <div className="flex items-center w-full">
                <input
                  type="text"
                  placeholder="Enter coupon code here"
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-3 py-2 dark:text-white border border-[#E4E4E7] dark:border-[#27272A] rounded-l-md focus:outline-none focus:border-purple-600"
                />
                <button
                  onClick={handleApplyClick}
                  disabled={couponApplied || applyCouponLoading}
                  className="px-4 py-2 bg-gray-100 text-black border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-200 disabled:opacity-50 flex items-center gap-2"
                >
                  {applyCouponLoading && (
                    <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                  )}
                  Apply
                </button>
              </div>
              {discountSuccessMessage && (
                <p className="text-green-600 mt-2 text-sm">{discountSuccessMessage}</p>
              )}
              {discountErrorMessage && (
                <p className="text-red-500 mt-2 text-sm">{discountErrorMessage}</p>
              )}
            </div>

            {/* reCAPTCHA */}
            <div className="pb-4">
              <ReCAPTCHA
  ref={recaptchaRef}
  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
/>

            </div>

            {captchaMessage && (
              <p className="text-red-500 py-2 font-outfit">{captchaMessage}</p>
            )}

            {/* Payment Button */}
            <button
              disabled={!agree}
              onClick={handlePayment}
              className={`w-full h-12 rounded-lg text-base mt-1 mb-2 transition-colors ${
                agree 
                  ? 'bg-purple-600 text-white hover:bg-purple-700' 
                  : 'bg-purple-600 text-white opacity-50 cursor-not-allowed'
              }`}
            >
              Proceed to pay
            </button>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                type="checkbox"
                onChange={toggleCheckbox}
                checked={agree}
                className="mt-1 mr-2 accent-black"
              />
              <p className="font-light text-sm leading-none dark:text-white font-outfit">
                By paying the booking amount, you agree to our{" "}
                <a
                  href="/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline dark:text-white font-medium text-black"
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/refund-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline dark:text-white font-medium text-black"
                >
                  Refund Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;