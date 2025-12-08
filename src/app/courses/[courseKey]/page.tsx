import { notFound } from "next/navigation";
import coursesData from "@/global/courses.json";
import HeroSection from "@/components/course-overview/heroSection";
import CourseStats from "@/components/course-overview/CourseStats";
import ToolsAndSkills from "@/components/course-overview/ToolsAndSkills";
import CourseModules from "@/components/course-overview/CourseModules";
import CertificateSection from "@/components/course-overview/certificateSection";
import PriceCard from "@/components/course-overview/priceCard";
import CourseOutcomes from "@/components/course-overview/courseOutcomes";
import Roles from "@/components/course-overview/roles";
import TopRecruiters from "@/components/course-overview/topRecruiters";
import FAQs from "@/components/course-overview/faqs";
import MentorSection from "@/components/course-overview/mentorSection";
import JobSimulationOffers from "@/components/course-overview/JobSimulationOffers";

export default async function CoursePage({params}: {params: Promise<{ courseKey: string }>}) {
  const { courseKey } = await params;

  const course = coursesData.find((course) => course.coursePath === courseKey);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-black">
      <div className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 md:-mt-2 -mt-4">
        <HeroSection
          courseTitle={course.courseTitle}
          courseDesc={course.courseDesc}
          period={course.period}
          assistance={course.assistance}
          level={course.level}
          image={course.image}
          coursePath={course.coursePath}
        />
        <CourseStats
          mode={course.mode}
          skillLevel={course.level}
          efforts={course.efforts}
          guidedProjects={course.projectsGuided}
        />
        <ToolsAndSkills tools={course.tools} skills={course.skills} />
        <MentorSection mentors={course.mentors} />
        <CourseOutcomes />
        <JobSimulationOffers courseTitle={course.courseTitle} />
        <TopRecruiters
          courseTitle={course.courseTitle}
          recruiters={course.recruiters}
        />
      </div>
      <Roles
        courseContent={{
          jobRoles: course.jobRoles,
          ambitionBoxlinks: course.ambitionBoxlinks,
          linkedinJobRoles: course.linkedinJobRoles,
        }}
      />

      <CourseModules modules={course.modules} />

      <div className="2xl:max-w-7xl mx-auto p-5 sm:p-6 lg:p-8">
        <CertificateSection
          courseTitle={course.courseTitle}
          certificates={course.certificates}
        />
        <PriceCard
          courseTitle={course.courseTitle}
          period={course.period}
          costPrice={course.costPrice}
          sellingPrice={course.sellingPrice}
        />
        <FAQs faqs={course.faqs} />
      </div>
    </div>
  );
}
