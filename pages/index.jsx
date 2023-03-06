import { setUser } from '@/redux/slice/user'
import { useDispatch } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch()

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <button
        onClick={() => dispatch(setUser(false))}
        className="bg-primary p-2 w-52 text-white rounded-md font-bold"
      >
        Logout
      </button>
    </div>
  )
}

Home.auth = true
