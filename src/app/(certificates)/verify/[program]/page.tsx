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
  certificate: {
    _id: string;
    issue_date: Date;
  };
  fullName: string;
  programKey: string;
  programTitle: string;
}

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

    const fetchCertificate = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_LINK}/verify/${program}/?id=${cert_id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch certificate data");
        }

        const data = await response.json();
        setCertificate(data.data);

        const qrLink = `https://coursevita.com/verify/${data.data.programKey}/?id=${data.data.certificate._id}`;
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

  return (
    <div className="bg-white dark:bg-black md:-mt-2 -mt-4">
      <div
        className={`${montserrat.className} px-4 py-8 space-y-6 max-w-6xl mx-auto`}
      >
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center  text-black dark:text-white">
          Certificate Verification
        </h1>

        {/* Certificate Section */}
        <div className="relative w-full max-w-4xl text-[#343047] mx-auto border rounded-2xl overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/template.svg"
            alt="Certificate"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />

          {/* Name - top 25% */}
          <div className="absolute top-[46%] left-[10%] text-center">
            <h2 className="text-xs sm:text-2xl md:text-3xl font-bold">
              {certificate.fullName}
            </h2>
          </div>

          {/* Program Name - top 35% */}
          <div className="absolute top-[58%] left-[10%] text-center">
            <p className="text-[8px] sm:text-[20px] font-bold">
              {certificate.programTitle}
            </p>
          </div>

          {/* Issue Date */}
          <div className="absolute bottom-[11.5%] left-[24.9%] text-center">
            <p className="text-[4px] md:text-[10px] font-medium">
              {new Date(
                certificate.certificate.issue_date
              ).toLocaleDateString()}
            </p>
          </div>

          {qrUrl && (
            <div className="absolute top-[83%] left-[16%] -translate-x-1/2 -translate-y-1/2">
              <Image
                src={qrUrl}
                alt="QR Code"
                width={80}
                height={80}
                className="object-contain h-[40px] sm:h-[70px] md:h-[100px] md:w-[100px] "
              />
            </div>
          )}

          {/* Cred ID */}
          <div className="absolute top-[80%] left-[24.8%] text-center">
            <p className="text-[3px] md:text-[8px] font-medium">
              {" "}
              {certificate.certificate._id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
