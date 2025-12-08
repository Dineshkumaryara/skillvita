"use client";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon } from "@/icons/footer/Facebook";
import { InstagramIcon } from "@/icons/footer/Instagram";
import { LinkedinIcon } from "@/icons/footer/Linkedin";
import { WhatsappIcon } from "@/icons/footer/Whatsapp";
import { TwitterIcon } from "@/icons/footer/Twitter";
import { Mail, Phone, MapPin } from "lucide-react";
// import courseTracks from "./courseTracks.json";

// interface CourseTrack {
//   course: string;
//   locations: string[];
// }

// const slugify = (text: string) =>
//   text
//     .toLowerCase()
//     .replace(/\s+/g, "-")
//     .replace(/[^\w-]+/g, "");

const Footer = () => {
  // const typedCourseTracks = courseTracks as CourseTrack[];
  return (
    <section id="contact" className="w-full bg-[#F3F5FC] dark:bg-[#18181B]">
      <div className="py-8 mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-2">
          {/* Logo and Social Media */}
          <div className="mb-6 md:mb-0">
            <Image
              src="/images/new-logo.svg"
              alt="Coursevita Logo"
              width={135}
              height={40}
              className="h-10 dark:hidden"
            />
            <Image
                src="/images/new-logo-dark.svg"
                alt="Coursevita Logo Dark"
                width={135}
                height={28}
                className="h-10 hidden dark:block"
              />
            <p className="pt-4 text-[16px] lg:text-[20px] font-light text-gray-700 dark:text-gray-300 max-w-xs">
              Learn Today, Lead Tomorrow.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {/* Facebook */}
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61556411741027"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-brand-500"
              >
                <FacebookIcon />
              </a>

              {/* Instagram */}
              <a
                target="_blank"
                href="https://www.instagram.com/coursevita_official/"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-brand-500"
              >
                <InstagramIcon />
              </a>

              {/* LinkedIn */}
              <a
                target="_blank"
                href="https://www.linkedin.com/company/coursevita/"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-brand-500"
              >
                <LinkedinIcon />
              </a>

              {/* WhatsApp */}
              <a
                target="_blank"
                href="http://wa.me/+917050004259"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-brand-500"
              >
                <WhatsappIcon />
              </a>

              {/* Twitter */}
              <a
                target="_blank"
                href="https://x.com/coursevita"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-brand-500"
              >
                <TwitterIcon />
              </a>
            </div>
            {/* Contact Details */}
            <div className="flex flex-col gap-4 pt-12 text-gray-700 dark:text-gray-300 font-normal text-[14px]">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() =>
                  (window.location.href = "mailto:reachus@coursevita.com")
                }
              >
                <Mail size={23} className="text-brand-500" />
                <span className="break-all">reachus@coursevita.com</span>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => (window.location.href = "tel:+918019666972")}
              >
                <Phone size={23} className="text-brand-500" />
                <span>+91-8019666972</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-[18px] lg:text-[20px] text-gray-700 dark:text-gray-300 pb-3">
              Company
            </h3>
            <ul className="flex flex-col gap-3 font-normal text-[14px] lg:text-[16px] text-gray-500">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://coursevita.zohorecruit.in/jobs/Careers"
                  className="hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-[18px] lg:text-[20px] text-gray-700 dark:text-gray-300 pb-3">
              Products
            </h3>
            <ul className="flex flex-col gap-3 font-normal text-[14px] lg:text-[16px] text-gray-500">
              <li>
                <Link
                  href="https://simulation.coursevita.com"
                  className="hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  Job Simulation
                </Link>
              </li>
              <li>
                <Link
                  href="https://portfolio.coursevita.com"
                  className="hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  Portfolio Builder
                </Link>
              </li>
              <li>
                <Link
                  href="https://quizvita.in"
                  className="hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  Quizvita
                </Link>
              </li>
              <li>
                <Link
                  href="/find-your-career"
                  className="hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  Find your Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Upskill Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-[18px] lg:text-[20px] text-gray-700 dark:text-gray-300 pb-3">
              Upskill
            </h3>
            <ul className="flex flex-col gap-3 font-normal text-[14px] lg:text-[16px] text-gray-500">
              {/* <li>
                <Link
                  href="/courses"
                  className="hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  Courses
                </Link>
              </li> */}
              <li>
                <Link
                  href="/projects"
                  className="hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Address and Map */}
          <div className="md:max-w-[15rem] lg:max-w-[20rem]">
            <h3 className="font-semibold text-[18px] lg:text-[20px] text-gray-700 dark:text-gray-300 pb-3">
              Address
            </h3>
            <div className="flex items-start mb-3">
              <MapPin size={23} className="text-gray-500 w-8 lg:w-10" />
              <span className="pl-2 text-[14px] lg:text-[16px] text-gray-500">
                Plot 118, 3rd floor, Spaces and more, Business park, Lumbini
                Avenue, Gachibowli, Hyderabad, Telangana 500032
              </span>
            </div>
            <iframe
              title="Google Maps"
              width="100%"
              height="150"
              loading="lazy"
              allowFullScreen
              style={{ border: "none", borderRadius: "13px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.442446391627!2d78.37152171489897!3d17.432664888068615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93000c5eb6bb%3A0x8d3c842f97b1fb7c!2sCourseVita!5e0!3m2!1sen!2sin!4v1632052839338!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[0.5px] bg-gray-300 dark:bg-gray-700 my-6" />

        {/* Policy Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-12 text-[16px] text-gray-500 text-center">
          <Link
            href="/privacy-policy"
            className="hover:text-black hover:dark:text-white transition-colors duration-150"
          >
            Privacy Policy
          </Link>
          <Link
            href="/refund-policy"
            className="hover:text-black hover:dark:text-white transition-colors duration-150"
          >
            Refund Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="hover:text-black hover:dark:text-white transition-colors duration-150"
          >
            Terms & Conditions
          </Link>
        </div>

        {/* Divider */}
        {/* <div className="w-full h-[0.5px] bg-gray-300 dark:bg-gray-700 my-6" /> */}

        {/* Course Tracks Section */}
        {/* <div className="w-full text-gray-500 text-sm sm:text-base">
          <h3 className="font-semibold text-[18px] lg:text-[20px] text-gray-700 dark:text-gray-300 pb-3">
            Course Tracks
          </h3>

          {typedCourseTracks.map((track: CourseTrack) => (
            <div key={track.course} className="mb-6">
              <p className="mb-3">
                <Link
                  href={`/course/${slugify(track.course)}`}
                  className="font-medium text-[16px] lg:text-[18px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors duration-150"
                >
                  {track.course}
                </Link>
              </p>

              <div className="flex flex-wrap gap-y-2">
                {track.locations.map((location: string, idx: number) => (
                  <span key={idx} className="flex items-center">
                    <Link
                      href={`/course?location=${encodeURIComponent(location)}`}
                      className="text-[14px] lg:text-[16px] text-gray-500 hover:text-black dark:hover:text-white cursor-pointer transition-colors duration-150"
                    >
                      {location}
                    </Link>
                    {idx !== track.locations.length - 1 && (
                      <span className="px-2 text-gray-500 select-none">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        {/* Divider */}
        <div className="w-full h-[0.5px] bg-gray-300 dark:bg-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center text-xs gap-2">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Coursevita (BHUVANA INFORMATION
            TECHNOLOGIES PVT. LTD.). All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
