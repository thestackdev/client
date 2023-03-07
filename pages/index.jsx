import { setStatus, setUser } from '@/redux/slice/user'
import axios from 'axios'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await axios.post('/user/logout')
      dispatch(setUser(null))
      dispatch(setStatus('refresh'))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <Link
        href="/mentor"
        className="bg-primary text-center text-white p-2 rounded-md w-52 font-bold"
      >
        Become a Mentor
      </Link>
      <button
        onClick={handleLogout}
        className="bg-red-500 p-2 w-52 text-white rounded-md font-bold"
      >
        Logout
      </button>
    </div>
  )
}

Home.auth = true
