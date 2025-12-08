'use client';

import { useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Head from 'next/head';
import Checkout from '@/components/courses/checkout';
import coursesContent from "@/global/courses.json";
import { CourseContent } from '@/components/courses/types';




const CheckoutPage = () => {
  const params = useParams();
  const pathname = usePathname();
  const courseName = params.courseName as string;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const courseContent = (coursesContent as unknown as CourseContent[])
  .map((course) => ({
    ...course,
    sellingPrice: Number(course.sellingPrice),
    costPrice: Number(course.costPrice),
  }))
  .find((course) => course.learnmoreCourse === courseName) as CourseContent;


  return (
    <>
      <Head>
        <title>{courseContent ? `${courseContent.courseTitle} | Checkout` : 'Course Not Found'}</title>
        <meta name="description" content={courseContent?.courseDesc || 'Course not found'} />
      </Head>

      {courseContent ? (
        <div className='bg-white dark:bg-black -mt-8'>
        <Checkout courseContent={courseContent} />
        </div>
      ) : (
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-2">Course not found</h1>
          <p className="text-gray-600">We couldn&apos;t find the course you&apos;re looking for.</p>
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
