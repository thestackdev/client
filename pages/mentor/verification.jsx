import { BookOpenIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Verification() {
  const router = useRouter()

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mt-10 flex flex-row items-center">
        <div className="w-fit flex flex-col justify-center items-center">
          <div className="bg-primary rounded-full w-fit p-4">
            <BookOpenIcon className="h-16 w-16 text-white mx-auto" />
          </div>
          <span className="text-lg text-primary font-bold text-center block mt-4">
            Data Verification
          </span>
        </div>
        <hr className="w-32 h-px bg-gray-200 border-0" />
        <div className="w-fit flex flex-col justify-center items-center">
          <div className="bg-primary rounded-full w-fit p-4">
            <BookOpenIcon className="h-16 w-16 text-white mx-auto" />
          </div>
          <span className="text-lg text-primary font-bold text-center block mt-4">
            Document Authentication
          </span>
        </div>
        <hr className="w-32 h-px bg-gray-200 border-0" />
        <div className="w-fit flex flex-col justify-center items-center">
          <div className="bg-white rounded-full border border-primary w-fit p-4">
            <BookOpenIcon className="h-16 w-16 text-primary mx-auto" />
          </div>
          <span className="text-lg text-primary font-bold text-center block mt-4">
            Review
          </span>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <span className="text-2xl font-black">Review Process</span>
        <span className="text-gray-500">
          In the review process, the review team will come to review your work
          and place. It's 45 MIN Process.
        </span>
        <div>
          <h1 className="text-2xl mt-8 font-black">Your Reviewer</h1>
          <div className="bg-primary rounded-md p-4">
            <div className="flex items-center">
              <Image
                className=""
                src="/png/mentor.png"
                width={100}
                height={100}
              />
              <div className="flex flex-col text-white">
                <span className="text-xl font-black">Rohan Sharma</span>
                <span>Hip Hop Dance Expert</span>
              </div>
            </div>
            <div className="bg-white w-fit rounded-md p-2 mt-4">
              <span>{router.query?.timeslot}</span>,{' '}
              <span>{router.query?.day}</span>,{' '}
              <span>{router.query?.date}</span>{' '}
              <span>{router.query?.month}</span>, 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verification
