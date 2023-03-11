import CourseCard from '@/components/mentor/CourseCard'
import MentorNavigation from '@/components/mentor/Navigation'
import NotificationCard from '@/components/mentor/NotificationCard'
import useClickOutside from '@/hooks/useClickOutside'
import {
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRef, useState } from 'react'

const Card = () => {
  return (
    <div className="flex flex-col w-full gap-4 p-6 shadow-md rounded-md">
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

const ReminderCard = ({ type, title, time, students, description }) => {
  const getColorForType = (type) => {
    switch (type) {
      case 'class':
        return 'border-l-orange-500'
      case 'assignment':
        return 'border-l-blue-500'
      case 'test':
        return 'border-l-green-500'
      default:
        return 'border-l-orange-500'
    }
  }

  return (
    <div
      className={`p-4 border-l-8 rounded-md ${getColorForType(type)} shadow-lg`}
    >
      <div className="w-full flex flex-row items-center justify-between gap-2">
        <h1 className="font-bold text-lg">
          {title}
          <span className="font-medium text-sm"> - {time}</span>
        </h1>
        <div className="flex flex-row gap-2">
          <UserIcon className="h-5 w-5 text-gray-500" />
          <span className="text-sm text-gray-900 font-bold">
            {students}{' '}
            <span className="text-gray-500 font-normal">Students</span>
          </span>
        </div>
      </div>
      <span className="text-sm text-gray-500">{description}</span>
    </div>
  )
}

const ProductCard = () => {
  return (
    <div className="shadow-md rounded-md p-4">
      <Image
        src="/png/mentor.png"
        alt="student"
        width={200}
        height={200}
        className="w-auto h-auto overflow-hidden rounded-md"
      />
      <h1 className="text-lg font-bold">Guitar Class</h1>
      <div className="w-full flex items-center justify-between">
        <span className="text-gray-600">$1000</span>
        <button className="bg-primary text-white p-2 rounded-md">
          Buy now
        </button>
      </div>
    </div>
  )
}

function MentorDashboard() {
  const [reminders, setReminders] = useState([
    {
      type: 'class',
      title: 'Guitar Class',
      time: '10:00 AM',
      students: '50',
      description: 'There is a guitar class in the next 30 minutes',
    },
    {
      type: 'class',
      title: 'Dev Class',
      time: '11:00 AM',
      students: '45',
      description: 'There is a dev class in the next 30 minutes',
    },
    {
      type: 'assignment',
      title: 'Gym Class',
      time: '12:00 AM',
      students: '50',
      description: 'There is a gym session in the next 30 minutes',
    },
    {
      type: 'test',
      title: 'Test ',
      time: '10:00 AM',
      students: '50',
      description: 'There is a test in the next 30 minutes',
    },
  ])

  const [notifications, setNotifications] = useState([
    {
      type: 'message',
      description: 'This is a new comment for your post',
      time: '10 mins ago',
    },
    {
      type: 'accomplishment',
      description: 'Great job! You have completed 10 tasks today',
      time: '20 mins ago',
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

  const [showNotification, setShowNotification] = useState(false)
  const notificationRef = useRef()

  useClickOutside(notificationRef, () => {
    setShowNotification(false)
  })

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
          <div className="flex flex-row items-center gap-4">
            <div className="relative">
              <BellIcon
                className="h-6 w-6 cursor-pointer"
                onClick={() => setShowNotification(!showNotification)}
              />
              <span className="absolute top-0 right-0 bg-primary rounded-full h-3 w-3"></span>
              {showNotification && (
                <div
                  className="absolute top-7 -right-9 rounded-md"
                  ref={notificationRef}
                >
                  {notifications.map((notification, index) => (
                    <NotificationCard
                      key={index}
                      type={notification.type}
                      description={notification.description}
                      time={notification.time}
                    />
                  ))}
                </div>
              )}
            </div>
            <MagnifyingGlassIcon className="h-6 w-6" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          <section className="col-span-1">
            <h1 className="text-3xl">Mentor Dashboard</h1>
            <div className="grid grid-cols-2 mt-4 gap-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </section>
          <section className="flex flex-col gap-4 w-full h-[400px]">
            <div className="flex flex-row justify-between gap-4 w-full">
              <h1 className="text-3xl">Reminders</h1>
              <div className="flex flex-row justify-between gap-2">
                <ChevronLeftIcon className="h-5 w-5" />
                <span className="text-gray-500">10th, May 2023</span>
                <ChevronRightIcon className="h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-row gap-4 w-full">
              <span className="bg-orange-800 text-white pt-2 pb-1 px-3 text-sm rounded-t-lg">
                All
              </span>
              <span className="bg-orange-500 text-white pt-2 pb-1 px-3 text-sm rounded-t-lg">
                class
              </span>
              <span className="bg-blue-500 text-white pt-2 pb-1 px-3 text-sm rounded-t-lg">
                Assignment
              </span>
              <span className="bg-green-500 text-white pt-2 pb-1 px-3 text-sm rounded-t-lg">
                Test
              </span>
            </div>
            <div className="flex flex-col gap-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-track-rounded-2xl">
              {reminders.map((item, index) => (
                <ReminderCard
                  key={index}
                  type={item.type}
                  title={item.title}
                  time={item.time}
                  students={item.students}
                  description={item.description}
                />
              ))}
            </div>
          </section>
        </div>
        <div>
          <h1 className="text-lg text-gray-700">Upcoming live Courses</h1>
          <div className="flex flex-row gap-4 w-full overflow-x-scroll mt-4">
            {upcomingLiveCourses.map((item, index) => (
              <CourseCard key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="mt-8 mb-4">
          <h1 className="text-xl font-semibold text-gray-700 mb-4">
            Recommended Products
          </h1>
          <div className="flex flex-row gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentorDashboard
