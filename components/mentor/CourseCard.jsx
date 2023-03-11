import {
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'

export default function CourseCard({ item }) {
  return (
    <div className="flex flex-col min-w-[350px] gap-4 p-6 shadow-md rounded-md">
      <h1 className="text-xl font-bold">{item.title}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <CalendarDaysIcon className="h-5 w-5 text-gray-500" />
          <span className="text-[10px] text-gray-500">{item.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <UserIcon className="h-5 w-5 text-gray-500" />
          <span className="text-[10px] text-gray-500">{item.instructor}</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="h-5 w-5 text-gray-500" />
          <span className="text-[10px] text-gray-500">{item.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <VideoCameraIcon className="h-5 w-5 text-gray-500" />
          <span className="text-[10px] text-gray-500">{item.platform}</span>
        </div>
      </div>
      <span>Students</span>
      <div className="flex flex-row gap-2 items-center">
        <div className="flex">
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
        <span className="text-gray-500 text-sm">+ 10 students</span>
      </div>
      <button className="w-full p-2 bg-primary rounded-md text-white">
        {' '}
        Start the class
      </button>
    </div>
  )
}
