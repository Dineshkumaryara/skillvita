/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import QRCode from "qrcode";

interface CertificateData {
  _id: string;
  name: string;
  program: string;
  program_name: string;
  date: string;
  mentor_name?: string;
  mentor_sign?: string;
  certificate_img?: string;
  start_date?: string;
  end_date?: string;
}

// Helper function to get ordinal suffix
const getOrdinalSuffix = (day: number): string => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

// Helper function to format date like "19th June" or "14th September 2025"
const formatDateWithOrdinal = (dateString: string, includeYear = false): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const ordinal = getOrdinalSuffix(day);
  return includeYear ? `${day}${ordinal} ${month} ${year}` : `${day}${ordinal} ${month}`;
};

// Helper function to format issued date like "21st OCT 2025"
const formatIssuedDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const ordinal = getOrdinalSuffix(day);
  return `${day}${ordinal} ${month} ${year}`;
};

export default function VerifyCVPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [certificate, setCertificate] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [qrUrl, setQrUrl] = useState<string | null>(null);

  useEffect(() => {
    const program = params.program as string;
    const cert_id = searchParams.get("id");

    if (!cert_id) {
      setError("Certificate ID not provided.");
      setLoading(false);
      return;
    }

    console.log("Program:", program);
    console.log("Certificate ID:", cert_id);

    const fetchCertificate = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_LINK}/verifyCV/${program}/?id=${cert_id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch certificate data");
        }

        const data = await response.json();
        setCertificate(data);

        const qrLink = `https://coursevita.com/verifyCV/${data.program}/?id=${data._id}`;
        const qrImage = await QRCode.toDataURL(qrLink, {
          width: 150,
          margin: 0,
        });
        setQrUrl(qrImage);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificate();
  }, [params, searchParams]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
  if (!certificate)
    return <div className="p-6">No certificate data found.</div>;

  // Show alternate view for program = "course"
  if (params.program === "course") {
    return (
      <div
        className={`${montserrat.className} px-4 py-8 space-y-6 max-w-6xl mx-auto`}
      >
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center  text-black dark:text-white">
          Certificate Verification
        </h1>

        {/* Certificate Section */}
        {certificate.certificate_img && (
          <div className="relative w-full max-w-4xl text-[#343047] mx-auto border rounded-2xl overflow-hidden">
            {/* Background Image */}
            <Image
              src={certificate.certificate_img}
              alt="Certificate"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />

            {/* Name - top 25% */}
            <div className="absolute top-[46%] left-[24%] text-center">
              <h2 className="text-xs sm:text-2xl md:text-3xl font-bold">
                {certificate.name}
              </h2>
            </div>

            {/* Program Name - top 35% */}
            <div className="absolute top-[57.8%] left-[41.5%] text-center">
              <p className="text-[8px] sm:text-[20px] font-bold">
                {certificate.program_name}
              </p>
            </div>

            {/* Date - bottom 12% */}
            <div className="absolute bottom-[32.9%] left-[27.5%] text-center">
              <p className="text-[7px] md:text-lg font-bold">
                {new Date(certificate.date).toLocaleDateString()}
              </p>
            </div>

            {/* Mentor Name */}
            {certificate.mentor_name && (
              <div className="absolute bottom-[26%] right-[25.3%] translate-x-1/2 text-[8px] md:text-lg font-bold text-right whitespace-nowrap">
                {certificate.mentor_name}
              </div>
            )}

            {/* Mentor Sign */}
            {certificate.mentor_sign && (
              <div className="absolute bottom-[31%] right-[25.3%] translate-x-1/2 text-right">
                <Image
                  src={certificate.mentor_sign}
                  alt="Mentor Signature"
                  width={100}
                  height={40}
                  className="object-contain h-[25px] md:h-[60px]"
                />
              </div>
            )}

            {qrUrl && (
              <div className="absolute top-[77%] left-[13.5%] -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={qrUrl}
                  alt="QR Code"
                  width={80}
                  height={80}
                  className="object-contain h-[40px] sm:h-[30px] md:h-[110px] md:w-[110px] "
                />
              </div>
            )}

            {/* Cred ID */}
            <div className="absolute top-[87%] left-[13.5%] -translate-x-1/2 text-center">
              <p className="text-[3px] md:text-[8px] font-normal">
                {" "}
                {certificate._id}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Show alternate view for program = "internvita"
  if (params.program === "internvita") {
    return (
      <div
        className={`${montserrat.className} px-4 py-8 space-y-6 max-w-6xl mx-auto`}
      >
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-black dark:text-white">
          Certificate Verification
        </h1>

        {/* Certificate Section */}
        {certificate.certificate_img && (
          <div className="relative w-full max-w-4xl text-white mx-auto border rounded-2xl overflow-hidden">
            {/* Background Image */}
            <Image
              src={certificate.certificate_img}
              alt="Certificate"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />

            {/* Name - Centered, below "This certificate is proudly presented to" */}
            <div className="absolute top-[41%] left-1/2 -translate-x-1/2 text-center">
              <h2 className="text-xs sm:text-xl md:text-3xl font-[500] text-white">
                {certificate.name}
              </h2>
            </div>

            {/* Program Dates - Centered, below name */}
            {certificate.start_date && certificate.end_date && (
               <div className="absolute top-[52%] left-1/2 -translate-x-1/2 text-center">
                <p className="text-[6px] sm:text-xs md:text-base lg:text-[16px] font-[400] text-white">
                  Started on {formatDateWithOrdinal(certificate.start_date)}, Ended on{" "}
                  {formatDateWithOrdinal(certificate.end_date, true)}
                </p>
              </div>
            )}

            {/* Issued Date - Right side, aligned with signature line, above QR code */}
            <div className="absolute bottom-[37%] right-[21%] text-right">
              <p className="text-[4px] sm:text-[6px] md:text-xs font-bold text-white whitespace-nowrap">
                {formatIssuedDate(certificate.date)}
              </p>
            </div>

            {/* QR Code - Right side, below issued date */}
            {qrUrl && (
              <div className="absolute bottom-[25%] right-[22%]">
                <Image
                  src={qrUrl}
                  alt="QR Code"
                  width={100}
                  height={100}
                  className="object-contain h-[25px] sm:h-[30px] md:h-[60px] lg:h-[70px] w-auto"
                />
              </div>
            )}

            {/* Cert ID - Right side, below QR code */}
            <div className="absolute bottom-[21%] right-[15%] text-right">
              <p className="text-[5px] sm:text-[8px] md:text-[10px] font-normal text-white">
                Cert ID: {certificate._id}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`${montserrat.className} px-4 py-8 space-y-6 max-w-6xl mx-auto`}
    >
      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-black dark:text-white">
        Certificate Verification
      </h1>

      {/* Certificate Section */}
      {certificate.certificate_img && (
        <div className="relative w-full max-w-4xl text-[#343047] mx-auto border rounded-2xl overflow-hidden">
          {/* Background Image */}
          <Image
            src={certificate.certificate_img}
            alt="Certificate"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />

          {/* Name - top 25% */}
          <div className="absolute top-[39%] left-1/2 -translate-x-1/2 text-center">
            <h2 className="text-xs sm:text-2xl md:text-3xl font-bold">
              {certificate.name}
            </h2>
          </div>

          {/* Program Name - top 35% */}
          <div className="absolute top-[49%] left-1/2 -translate-x-1/2 text-center">
            <p className="text-[8px] sm:text-lg font-bold">
              {certificate.program_name}
            </p>
          </div>

          {/* Date - bottom 12% */}
          <div className="absolute bottom-[38%] left-1/2 -translate-x-1/2 text-center">
            <p className="text-[5px] md:text-sm">
              {(() => {
                const date = new Date(certificate.date);
                const day = String(date.getDate()).padStart(2, "0");
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const year = date.getFullYear();
                return `${day}-${month}-${year}`;
              })()}
            </p>
          </div>

          {/* Mentor Name */}
          {certificate.mentor_name && (
            <div className="absolute bottom-[26%] right-[25.3%] translate-x-1/2 text-[8px] md:text-lg font-bold text-right whitespace-nowrap">
              {certificate.mentor_name}
            </div>
          )}

          {/* Mentor Sign */}
          {certificate.mentor_sign && (
            <div className="absolute bottom-[31%] right-[25.3%] translate-x-1/2 text-right">
              <Image
                src={certificate.mentor_sign}
                alt="Mentor Signature"
                width={100}
                height={40}
                className="object-contain h-[25px] md:h-[60px]"
              />
            </div>
          )}

          {qrUrl && (
            <div className="absolute top-[69%] left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src={qrUrl}
                alt="QR Code"
                width={80}
                height={80}
                className="object-contain h-[20px] sm:h-[30px] md:h-[60px]"
              />
            </div>
          )}

          {/* Cred ID */}
          <div className="absolute top-[75%] left-1/2 -translate-x-1/2 text-center">
            <p className="text-[3px] md:text-[8px] font-normal">
              {" "}
              Cert ID: {certificate._id}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
