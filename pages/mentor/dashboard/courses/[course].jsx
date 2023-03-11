import MentorNavigation from '@/components/mentor/Navigation'
import NotificationCard from '@/components/mentor/NotificationCard'
import useClickOutside from '@/hooks/useClickOutside'
import {
  BellIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import { useRef, useState } from 'react'

const Card = () => {
  return (
    <div className="flex flex-col w-full gap-4 p-6 shadow-md rounded-md">
      <div className="flex w-full justify-between">
        <span>Students</span>
        <EllipsisVerticalIcon className="h-5 w-5" />
      </div>
      <h1 className="text-2xl font-bold">10</h1>
      <span className="text-sm">
        <span className="text-green-500 mr-1">13.2%</span> from May
      </span>
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
        <section className="mt-6">
          <div className="grid grid-cols-4 mt-4 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <table class="table-auto mt-8 w-full p-8 shadow-md rounded-md">
          <thead className="">
            <tr className="w-full m-4 text-gray-600 text-left">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Assessment</th>
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
              <td className="p-4">
                <span className="bg-red-200 p-2 rounded-md text-red-700">
                  Pending
                </span>
              </td>
              <td className="p-4">
                <EllipsisVerticalIcon className="h-5 w-5" />
              </td>
            </tr>
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
              <td className="p-4">
                <span className="bg-red-200 p-2 rounded-md text-red-700">
                  Pending
                </span>
              </td>
              <td className="p-4">
                <EllipsisVerticalIcon className="h-5 w-5" />
              </td>
            </tr>
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
              <td className="p-4">
                <span className="bg-green-200 p-2 rounded-md text-green-700">
                  Submitted
                </span>
              </td>
              <td className="p-4">
                <EllipsisVerticalIcon className="h-5 w-5" />
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
