import { HomeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MentorNavigation = () => {
  const router = useRouter()

  return (
    <div className="bg-primary p-8 mr-4 text-white w-[300px] h-screen">
      <h1 className="font-bold text-2xl mb-6">Logo</h1>
      <Link
        href="/mentor/dashboard"
        className={`flex flex-row gap-2 items-center cursor-pointer p-2 rounded-md ${
          router.pathname === '/mentor/dashboard' && 'bg-white text-primary'
        }`}
      >
        <HomeIcon className="h-6 w-6" />
        <span>Home</span>
      </Link>
      <Link
        href="/mentor/dashboard/courses"
        className={`flex flex-row gap-2 items-center cursor-pointer my-2 p-2 rounded-md ${
          router.pathname === '/mentor/dashboard/courses' &&
          'bg-white text-primary'
        }`}
      >
        <HomeIcon className="h-6 w-6" />
        <span>Your courses</span>
      </Link>
      <div
        className={`flex flex-row gap-2 items-center cursor-pointer my-2 p-2 rounded-md ${
          router.pathname === '/mentor/calendar' && 'bg-white text-primary'
        }`}
      >
        <HomeIcon className="h-6 w-6" />
        <span>Calendar</span>
      </div>
      <div
        className={`flex flex-row gap-2 items-center cursor-pointer my-2 p-2 rounded-md ${
          router.pathname === '/mentor/test' && 'bg-white text-primary'
        }`}
      >
        <HomeIcon className="h-6 w-6" />
        <span>Test</span>
      </div>
      <div
        className={`flex flex-row gap-2 items-center cursor-pointer my-2 p-2 rounded-md ${
          router.pathname === '/mentor/assignment' && 'bg-white text-primary'
        }`}
      >
        <HomeIcon className="h-6 w-6" />
        <span>Assignment</span>
      </div>
      <div
        className={`flex flex-row gap-2 items-center cursor-pointer my-2 p-2 rounded-md ${
          router.pathname === '/mentor/assessment' && 'bg-white text-primary'
        }`}
      >
        <HomeIcon className="h-6 w-6" />
        <span>Assessment</span>
      </div>
      <div
        className={`flex flex-row gap-2 items-center cursor-pointer my-2 p-2 rounded-md ${
          router.pathname === '/mentor/notification' && 'bg-white text-primary'
        }`}
      >
        <HomeIcon className="h-6 w-6" />
        <span>Notification</span>
      </div>

      <div className="flex items-center absolute bottom-10">
        <Image
          className="w-auto h-auto mr-2"
          src="/png/mentor.png"
          alt="mentor"
          width={50}
          height={50}
          priority
        />
        <div className="flex flex-col">
          <span className="text-white text-md">Nidihi Singh</span>
          <span className="text-gray-300 text-sm">UX Developer</span>
        </div>
      </div>
    </div>
  )
}

export default MentorNavigation
