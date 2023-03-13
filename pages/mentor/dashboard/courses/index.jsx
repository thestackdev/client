import CourseCard from '@/components/mentor/CourseCard'
import MentorNavigation from '@/components/mentor/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const BatchCard = ({ course }) => {

  const router = useRouter()

  return (
    <div className="bg-white flex flex-row justify-between border border-gray-300 rounded-md p-4">
      <div className="border-r w-full flex flex-col gap-4 justify-between p-4 border-r-gray-300">
        <div>
          <h1 className="text-xl font-bold text-gray-800 cursor-pointer" onClick={() => {
            router.push(`/mentor/dashboard/courses/1`)
          }}>{course.title}</h1>
          <p className="text-gray-700 font-semibold">{course.description}</p>
        </div>
        <div className="flex flex-row gap-4">
          <div>
            <span>Students</span>
            <div className="flex flex-row">
              <img
                className="-ml-2 rounded-full w-12 h-12"
                src="/png/student1.png"
                alt="student"
              />
              <img
                className="-ml-2 rounded-full w-12 h-12"
                src="/png/student2.png"
                alt="student"
              />
              <img
                className="-ml-2 rounded-full w-12 h-12"
                src="/png/student3.png"
                alt="student"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1>Batches</h1>
            <span className="text-2xl text-gray-700 font-semibold">3</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-4 gap-4">
        {course.batches.map((batch) => (
          <Link
            href={`/mentor/dashboard/courses/batch/1`}
            className="text-gray-700 font-semibold p-4 bg-white border flex items-center justify-between w-[300px] border-gray-300 rounded-md"
          >
            {batch.title}
            <ChevronRightIcon className="h-4 w-4 text-primary" />
          </Link>
        ))}
      </div>
    </div>
  )
}

function Courses() {
  const [courses, setCourses] = useState([
    {
      title: 'Course 1',
      description: 'Hip hop dance',
      batches: [
        {
          title: 'Batch 1',
          description: 'This is a batch',
        },
        {
          title: 'Batch 2',
          description: 'This is a batch',
        },
        {
          title: 'Batch 3',
          description: 'This is a batch',
        },
      ],
    },
    {
      title: 'Course 1',
      description: 'Hip hop dance',
      batches: [
        {
          title: 'Batch 1',
          description: 'This is a batch',
        },
        {
          title: 'Batch 2',
          description: 'This is a batch',
        },
        {
          title: 'Batch 3',
          description: 'This is a batch',
        },
      ],
    },
    {
      title: 'Course 1',
      description: 'Hip hop dance',
      batches: [
        {
          title: 'Batch 1',
          description: 'This is a batch',
        },
        {
          title: 'Batch 2',
          description: 'This is a batch',
        },
        {
          title: 'Batch 3',
          description: 'This is a batch',
        },
      ],
    },
  ])

  const [upcomingLiveCourses, setUpcomingLiveCourses] = useState([
    {
      title: 'Guitar Class',
      date: 'Monday, 28th June 2023',
      instructor: 'Mr. John Doe',
      time: '10:00 AM',
      platform: 'zoom',
    },
    {
      title: 'Gym Class',
      date: 'Monday, 28th June 2023',
      instructor: 'Mr. John Doe',
      time: '10:00 AM',
      platform: 'zoom',
    },
    {
      title: 'Yoga Class',
      date: 'Monday, 28th June 2023',
      instructor: 'Mr. John Doe',
      time: '10:00 AM',
      platform: 'zoom',
    },
    {
      title: 'Html Class',
      date: 'Monday, 28th June 2023',
      instructor: 'Mr. John Doe',
      time: '10:00 AM',
      platform: 'zoom',
    },
  ])

  return (
    <div className="flex">
      <MentorNavigation />
      <div className="w-full p-8 overflow-y-scroll h-screen grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium text-gray-700">Your Courses</h1>
          {courses.map((course, index) => (
            <BatchCard key={index} course={course} />
          ))}
        </div>
        <div className="w-full">
          <h1 className="text-lg text-gray-700">Upcoming live Courses</h1>
          <div className="flex flex-row gap-4 mt-4 w-full overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-track-rounded-2xl">
            {upcomingLiveCourses.map((item, index) => (
              <CourseCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
Courses.auth = true
