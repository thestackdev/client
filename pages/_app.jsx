import Spinner from '@/components/Spinner'
import { setStatus, setUser } from '@/redux/slice/user'
import store from '@/redux/store'
import '@/styles/globals.css'
import axios from 'axios'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  Provider as ReduxProvider,
  useDispatch,
  useSelector,
} from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

const API_URL = process.env.NEXT_PUBLIC_API_URL
axios.defaults.baseURL = API_URL
axios.defaults.withCredentials = true

export default function App({ Component, ...pageProps }) {
  return (
    <main className={inter.className}>
      <ReduxProvider store={store}>
        {Component.auth ? (
          <Auth required={true}>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Auth required={false}>
            <Component {...pageProps} />
          </Auth>
        )}
      </ReduxProvider>
    </main>
  )
}

function Auth({ children, required }) {
  const { data: session, status } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    getSession()
  }, [])

  useEffect(() => {
    if (status === 'loading') return
    if (required && !session) router.push('/auth/login')
  }, [session, status])

  const getSession = async () => {
    try {
      await axios.get('/user/me')
      dispatch(setUser(true))
    } catch (error) {
      console.log(error)
      dispatch(setUser(null))
    }
    dispatch(setStatus('idle'))
  }

  if (status === 'loading')
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Spinner height={50} width={50} color="#3949ab" />
      </div>
    )
  if (required && !session) return <span>not auth</span>
  return children
}
