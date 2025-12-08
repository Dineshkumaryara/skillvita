import React from "react";
import Image from "next/image";

interface CertificateSectionProps {
  courseTitle: string;
  certificates: {
    blackVersion: string;
    colorVersion: string;
  };
}

const CertificateSection: React.FC<CertificateSectionProps> = ({
  courseTitle,
  certificates,
}) => {
  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-xl md:text-3xl font-semibold mb-6 md:mb-10">
            Your {courseTitle}
            <br />
            <span className="text-[#FF7262]">Certificate is awaiting</span>
          </h2>

          <div className="space-y-6">
            {/* Industry Recognition */}
            <div className="space-y-6">
              {/* Industry Recognition */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 min-w-[40px] min-h-[40px] md:w-12 md:h-12 flex items-center justify-center bg-purple-100 rounded-full">
                  <Image
                    src="/images/courses/certificate.svg"
                    alt="Award"
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">
                    Industry-recognized certification
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                    Our industry-recognized certifications are more than just
                    badges—they&apos;re the keys to unlocking new opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Share Certificate */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 min-w-[40px] min-h-[40px] md:w-12 md:h-12 flex items-center justify-center bg-purple-100 rounded-full">
                  <Image
                  src="/images/courses/share.svg"
                  alt="Award"
                  width={24}
                  height={24}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  Share your certificate easily
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Easily share your certificate and showcase your
                  accomplishments to the world.
                </p>
              </div>
            </div>

            {/* Boost Productivity */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 min-w-[40px] min-h-[40px] md:w-12 md:h-12 flex items-center justify-center bg-purple-100 rounded-full">
                  <Image
                  src="/images/courses/increase.svg"
                  alt="Award"
                  width={24}
                  height={24}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  Boost productivity
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Chance to increase your productivity
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Preview */}
        <div className="relative">
          <div className="relative max-w-full md:max-w-[580px] mx-auto group">
            <div className="block group-hover:hidden">
              <Image
                src={certificates.blackVersion}
                alt="Course Certificate"
                width={1500}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="hidden group-hover:block">
              <Image
                src={certificates.colorVersion}
                alt="Course Certificate"
                width={1500}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;
