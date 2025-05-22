"use client";
import Link from "next/link";
import courseData from "@/data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gradient-to-r from-gray-800 to-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-400 font-semibold tracking-wide uppercase shadow-md">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-semibold">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="mt-4 text-teal-600 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-md hover:shadow-xl transition duration-300"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
