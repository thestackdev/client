import MentorNavigation from '@/components/mentor/Navigation'
import NotificationCard from '@/components/mentor/NotificationCard'
import Progressbar from '@/components/Progressbar'
import useClickOutside from '@/hooks/useClickOutside'
import {
  BellIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'
import { useRef, useState } from 'react'

const CourseModule = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  function toggleCollapse() {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="w-full">
      <div className="flex w-full justify-between p-4 bg-green-100">
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">Module 1: Introduction</h1>
          <span className="text-gray-500">2/2 classes</span>
        </div>
        {isExpanded ? (
          <ChevronUpIcon
            className="h-5 w-5 cursor-pointer"
            onClick={toggleCollapse}
          />
        ) : (
          <ChevronDownIcon
            className="h-5 w-5 cursor-pointer"
            onClick={toggleCollapse}
          />
        )}
      </div>
      {isExpanded && (
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-3">
              <input type="checkbox" />
              <div className="flex flex-col">
                <span className="font-semibold text-sm">
                  Class 1: Introduction
                </span>
                <span className="text-gray-500 ml-2 text-sm">1/1 students</span>
              </div>
            </div>
            <VideoCameraIcon className="h-5 w-5" />
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-3">
              <input type="checkbox" />
              <div className="flex flex-col">
                <span className="font-semibold text-sm">
                  Class 1: Introduction
                </span>
                <span className="text-gray-500 ml-2 text-sm">1/1 students</span>
              </div>
            </div>
            <VideoCameraIcon className="h-5 w-5" />
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-3">
              <input type="checkbox" />
              <div className="flex flex-col">
                <span className="font-semibold text-sm">
                  Class 1: Introduction
                </span>
                <span className="text-gray-500 ml-2 text-sm">1/1 students</span>
              </div>
            </div>
            <VideoCameraIcon className="h-5 w-5" />
          </div>
        </div>
      )}
    </div>
  )
}

const Course = () => {
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
            <span className="text-2xl font-black">Course Page</span>
            <span className="text-xl text-gray-600">Acoustic guitar</span>
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
        <div className="grid grid-cols-3 mt-6">
          <section className="bg-white col-span-2 shadow-md rounded-md">
            <h1 className="m-4">Course Progress</h1>
            <Progressbar progress={80} />
            <div className="max-h-[500px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-track-rounded-2xl">
              <CourseModule />
              <CourseModule />
              <CourseModule />
              <CourseModule />
              <CourseModule />
            </div>
          </section>
          <section className="p-4">
            <h1 className="text-lg font-bold mb-4">Questions</h1>
            <div className="rounded-md w-full" ref={notificationRef}>
              {notifications.map((notification, index) => (
                <NotificationCard
                  key={index}
                  type={notification.type}
                  description={notification.description}
                  time={notification.time}
                />
              ))}
            </div>
          </section>
        </div>
        <table className="table-auto mt-8 w-full p-8 shadow-md rounded-md">
          <thead className="">
            <tr className="w-full m-4 text-gray-600 text-left">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Batch no.</th>
              <th className="p-4">Attendance</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center gap-2 p-4">
                <img
                  className="-ml-2 rounded-full w-12 h-12"
                  src="/png/student1.png"
                  alt="student"
                />
                <span className="text-gray-700">Shanmukeshwar</span>
              </td>
              <td className="p-4">thestackdev@fullstacklab.org</td>
              <td className="p-4">01</td>
              <td className="p-4">
                <span className="bg-green-200 p-2 rounded-md text-green-700">
                  80%
                </span>
              </td>
              <td className="p-4">
                <button className="bg-primary p-2 text-white rounded-md">
                  Report Card
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Course
Course.auth = true
