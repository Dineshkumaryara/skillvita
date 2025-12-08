import Link from "next/link";
import React from "react";

interface PageLink {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  mainPage?: PageLink;
  secondPage?: PageLink;
  thirdPage?: PageLink;
}

const PageBreadcrumb: React.FC<BreadcrumbProps> = ({
  mainPage,
  secondPage,
  thirdPage,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-start gap-2 mb-4 md:mb-6">
      <nav>
        <ol className="flex flex-wrap items-center justify-end gap-1 md:gap-2 text-xs md:text-sm">
          {/* Main Page */}
          {mainPage && (
            <li className="flex items-center">
              <Link
                className="inline-flex items-center gap-1 md:gap-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                href={mainPage.path}
              >
                <span className="truncate max-w-24 md:max-w-none">{mainPage.name}</span>
                <svg
                  className="stroke-current flex-shrink-0 w-3 h-3 md:w-4 md:h-4"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                    stroke=""
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          )}

          {/* Second Page */}
          {secondPage && (
            <li className="flex items-center">
              {thirdPage ? (
                <Link
                  className="inline-flex items-center gap-1 md:gap-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  href={secondPage.path}
                >
                  <span className="truncate max-w-24 md:max-w-none">{secondPage.name}</span>
                  <svg
                    className="stroke-current flex-shrink-0 w-3 h-3 md:w-4 md:h-4"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                      stroke=""
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ) : (
                <span className="truncate max-w-32 md:max-w-none text-gray-800 dark:text-white/90">
                  {secondPage.name}
                </span>
              )}
            </li>
          )}

          {/* Third Page */}
          {thirdPage && (
            <li className="truncate max-w-32 md:max-w-none text-gray-800 dark:text-white/90">
              {thirdPage.name}
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default PageBreadcrumb;