import Spinner from '@/components/Spinner'
import TextInput from '@/components/TextInput'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Register() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [terms, setTerms] = useState(false)
  const { data: session, status } = useSelector((state) => state.user)
  const router = useRouter()
  const [currentTab, setCurrentTab] = useState('email')

  useEffect(() => {
    if (status === 'loading') return
    if (session) router.push('/')
  }, [session, status])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const _form = new URLSearchParams()
      _form.append('email', form.email)

      const response = await axios.post('/user/signup', _form)
      router.push(`/auth/verify?email=${form.email}`)
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
          <h1 className="text-primary font-bold text-3xl text-left w-full mb-6">
            Create Account
          </h1>
          <ul class="mb-2 flex list-none flex-col border-b-0 pl-0 md:flex-row bg-gray-300 w-full rounded-md transition-colors duration-300 ease-in-out">
            <li
              className={`w-full text-center ${
                currentTab === 'email' && 'bg-primary text-white'
              }  rounded-lg p-2 transition-colors duration-300 ease-in-out`}
              onClick={() => setCurrentTab('email')}
            >
              Email
            </li>
            <li
              className={`w-full text-center ${
                currentTab === 'phone' && 'bg-primary text-white'
              }  rounded-lg p-2 transition-colors duration-300 ease-in-out`}
              onClick={() => setCurrentTab('phone')}
            >
              Phone
            </li>
          </ul>
          {currentTab === 'email' && (
            <TextInput
              label="Email"
              placeholder="user@email.com"
              value={form.email}
              type="email"
              onChange={(value) => setForm({ ...form, email: value })}
            />
          )}
          {currentTab === 'phone' && (
            <TextInput
              label="Phone"
              placeholder="+91 1234567890"
              value={form.email}
              type="number"
              onChange={(value) => setForm({ ...form, email: value })}
            />
          )}
          <div className="w-full mt-4 flex items-center">
            <input
              className="rounded mr-2 accent-primary"
              type="checkbox"
              value={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <label>
              I accept with
              <Link href="/terms" className="text-primary mx-1">
                terms
              </Link>
              and
              <Link href="/policy" className="text-primary mx-1">
                privacy policy
              </Link>
            </label>
          </div>
          <button
            disabled={loading || !terms}
            className="w-full bg-primary text-white rounded-md mt-6 p-2 font-semibold flex items-center justify-center disabled:bg-gray-300 disabled:text-slate-600"
          >
            {loading && <Spinner height={19} width={19} color="#fff" />}
            Request OTP
          </button>
        </form>
        <div className="text-center w-full mx-auto mt-6">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register

Register.Auth = false
