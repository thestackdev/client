import { signOut } from 'next-auth/react'

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <button
        onClick={() => signOut()}
        className="bg-primary p-2 w-52 text-white rounded-md font-bold"
      >
        Logout
      </button>
    </div>
  )
}

Home.auth = true
