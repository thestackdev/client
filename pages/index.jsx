import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Home() {
  const user = useSelector((state) => state.user.data)

  return (
    <div className="h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome, {user?.username}</h1>
      <Link
        href="/mentor"
        className="bg-primary text-center text-white p-2 rounded-md w-52 font-bold"
      >
        Become a Mentor
      </Link>
      <button
        onClick={signOut}
        className="bg-red-500 p-2 w-52 text-white rounded-md font-bold"
      >
        Logout
      </button>
    </div>
  )
}

Home.auth = true
