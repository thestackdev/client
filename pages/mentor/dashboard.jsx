import MentorNavigation from '@/components/mentor/Navigation'
import {
  CalendarDaysIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const Card = () => {
  return (
    <div className="flex flex-col w-[200px] gap-4 p-6 shadow-md rounded-md">
      <div className="flex w-full justify-between">
        <span>students</span>
        <EllipsisVerticalIcon className="h-5 w-5" />
      </div>
      <h1 className="text-2xl font-bold">10</h1>
      <span className="text-sm">
        <span className="text-green-500 mr-1">13.2%</span> from may
      </span>
    </div>
  )
}

const CourseCard = () => {
  return (
    <div className="flex flex-col max-w-[350px] gap-4 p-6 shadow-md rounded-md">
      <h1 className="text-xl font-bold">Guitar Class</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <CalendarDaysIcon className="h-5 w-5 text-gray-500" />
          <span className="text-[10px] text-gray-500">
            Monday, 28th June 2023
          </span>
        </div>
        <div className="flex items-center gap-2">
          <UserIcon className="h-5 w-5 text-gray-500" />
          <span className="text-[10px] text-gray-500">Mr. John Doe</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="h-5 w-5 text-gray-500" />
          <span className="text-[10px] text-gray-500">02:00 PM - 03:00 PM</span>
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon className="h-5 w-5 text-gray-500" />
          <span className="text-[10px] text-gray-500">Zoom</span>
        </div>
      </div>
      <span>Students</span>
      <div className="flex flex-row gap-2 items-center">
        <div className="flex ">
          <Image src="/png/mentor.png" alt="student" width={30} height={30} />
          <Image
            className="-ml-2"
            src="/png/mentor.png"
            alt="student"
            width={30}
            height={30}
          />
          <Image
            className="-ml-2"
            src="/png/mentor.png"
            alt="student"
            width={30}
            height={30}
          />
        </div>
        <span className="text-gray-500 text-sm">
          + 10 students joined the class
        </span>
      </div>
      <button className="w-full p-2 bg-primary rounded-md text-white">
        {' '}
        Start the class
      </button>
    </div>
  )
}

function MentorDashboard() {
  return (
    <div className="flex">
      <MentorNavigation />
      <div className="w-full p-4 overflow-y-scroll h-screen">
        <div className="flex flex-row justify-between p-4 border-b w-full h-fit border-b-gray-300 ">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-black">Welcome back, Mentor</span>
            <span className="text-xl text-gray-600">
              Here are some insights for your daily activity
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="bg-gray-300 p-2.5 rounded-md">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </div>
            <button className="bg-primary text-white p-2 rounded-md">
              Invite Students
            </button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <section>
            <h1 className="text-3xl">Mentor Dashboard</h1>
            <div className="grid grid-cols-2 mt-4 gap-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </section>
          <section>
            <h1 className="text-3xl">Reminders</h1>
          </section>
        </div>
        <div>
          <h1 className="text-lg text-gray-700">Upcoming live Courses</h1>
          <div className="flex flex-row gap-4 w-full mt-4">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentorDashboard
