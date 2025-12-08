"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import PageBreadcrumb from "@/components/ui/PageBreadCrumb";
import CourseDescription from "./CourseDescription";
import Preloader from "@/components/ui/PreLoader";

interface CourseContent {
  _id?: string;
  title?: string;
  description?: string;
  instituteName?: string;
  tags?: string[];
  // Add more fields as necessary
}

interface CourseDescriptionPageProps {
  content?: CourseContent;
  handleClose?: () => void;
}

// Define your BASE_URL here or import from env/config
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_LINK;

export const getSearchedCareerResults = (payload: { _id?: string }) => {
  const url = `${BASE_URL}/api/careers/search`;
  return axios.post(url, payload);
};

const CourseDescriptionPage: React.FC<CourseDescriptionPageProps> = (props) => {
  const pathname = usePathname();
  const [loader, setLoader] = useState(false);
  const [content, setContent] = useState<CourseContent | undefined>(
    props.content
  );

  const programId = pathname ? pathname.split("/").pop() : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!props.content && programId) {
      setLoader(true);
      const payload = { _id: programId };
      getSearchedCareerResults(payload)
        .then((response) => {
          if (response.status === 200) {
            setContent(response.data?.results?.[0]);
          }
        })
        .catch((err) =>
          console.error("Error fetching career details:", err?.message)
        )
        .finally(() => setLoader(false));
    }
  }, [programId, props.content]);

  const keywords = content?.instituteName || "";
  const keywords2 = content?.tags?.join(",") || "";

  // const onClickHandler = (
  //   e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  //   navigationPath: string
  // ) => {
  //   e.preventDefault();
  //   router.push(navigationPath);
  // };
  return (
    <>
      <Head>
        <title>{content?.title || "Course Description"}</title>
        <meta
          name="description"
          content={content?.description || "Course Description"}
        />
        <meta name="keywords" content={`${keywords}, ${keywords2}`} />
      </Head>

      {loader && programId ? (
        <Preloader/>
      ) : (
        <div className="bg-white dark:bg-black">
          {content && (
            // Wrap with a div that applies the theme class conditionally
            <div className="max-w-7xl mx-auto pb-10 flex flex-col pt-6 text-gray-900 dark:text-gray-100">
              {/* Breadcrumb */}
              <PageBreadcrumb
                mainPage={{ name: "Home", path: "/" }}
                secondPage={{
                  name: "Find Your Career",
                  path: "/find-your-career",
                }}
                thirdPage={{
                  name: content?.title || "Course Details",
                  path: `/find-your-career/${content?._id}`,
                }}
              />

              {/* Main Content */}
              <main>
                <section className="w-full">
                  <CourseDescription course={content} />
                </section>
              </main>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CourseDescriptionPage;
