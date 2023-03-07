import Spinner from '@/components/Spinner'
import TextInput from '@/components/TextInput'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Login() {
  const [form, setForm] = useState({
    source: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const { data: session, status } = useSelector((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return
    if (session) router.push('/')
  }, [session, status])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)

      const _form = new URLSearchParams()
      _form.append('source', form.source)
      _form.append('password', form.password)

      const response = await axios.post('/user/login', _form, {
        withCredentials: true,
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen">
      <div className="col-span-2 hidden lg:block bg-primary"></div>
      <div className="col-span-1 w-full p-4 md:max-w-md md:mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center mt-24 "
        >
          <h1 className="text-primary font-extrabold text-3xl text-left w-full mb-6">
            Login
          </h1>
          <TextInput
            label="Email"
            placeholder="user@email.com"
            value={form.source}
            type="email"
            onChange={(value) => setForm({ ...form, source: value })}
          />
          <TextInput
            label="Password"
            placeholder="*********"
            value={form.password}
            type="password"
            onChange={(value) => setForm({ ...form, password: value })}
          />
          <Link
            href="/forgot-password"
            className="w-full text-right mt-3 text-primary"
          >
            Forgot password?
          </Link>
          <button
            disabled={loading}
            className="w-full bg-primary text-white rounded-md mt-6 p-2 font-semibold flex items-center justify-center"
          >
            {loading && <Spinner height={19} width={19} color="#fff" />}
            Login
          </button>
        </form>
        <div className="my-8 flex items-center justify-center gap-4 text-gray-500">
          <hr className="w-32 h-px bg-gray-200 border-0" />
          OR
          <hr className="w-32 h-px bg-gray-200 border-0" />
        </div>
        <button
          disabled={loading}
          onClick={() => {}}
          className="w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2"
        >
          <Image
            src="/svg/logo/google.svg"
            width={24}
            height={24}
            className="mr-2"
            alt="Google"
          />
          Sign in with Google
        </button>
        <button
          disabled={loading}
          onClick={() => {}}
          className="w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2"
        >
          <Image
            src="/svg/logo/github.svg"
            width={24}
            height={24}
            className="mr-2"
            alt="Github"
          />
          Sign in with Github
        </button>
        <div className="text-center w-full mx-auto mt-6">
          Don't have an account?{' '}
          <Link href="/auth/register" className="text-primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login

Login.Auth = false
