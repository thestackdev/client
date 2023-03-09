import Spinner from '@/components/Spinner'
import TextInput from '@/components/TextInput'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function Onboard() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    password2: '',
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    password2: '',
  })
  const [usenameAvailable, setUsernameAvailable] = useState(false)
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'loading') return
    if (session) router.push('/')
    console.log(session)
  }, [session, status])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (form.password !== form.password2) {
        setErrors({
          ...errors,
          password2: 'Passwords do not match',
        })
        return
      }

      if (
        errors.firstName ||
        errors.lastName ||
        errors.username ||
        errors.password
      )
        return

      setLoading(true)

      router.push({
        pathname: '/auth/dob',
        query: {
          username: form.username,
          password: form.password,
          firstName: form.firstName,
          lastName: form.lastName,
        },
      })
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    setErrors({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      password2: '',
    })
  }, [form])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (form.username.length > 0) {
        axios
          .get(`/api/auth/register?username=${form.username}`)
          .then((res) => {
            setUsernameAvailable(true)
          })
          .catch((err) => {
            console.log(err)
            setUsernameAvailable(true)
          })
      }
    }, 500)
    return () => clearTimeout(timeout)
  }, [form.username])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen">
      <div className="col-span-2 hidden lg:block bg-primary"></div>
      <div className="col-span-1 w-full p-4 md:max-w-md md:mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center mt-24 "
        >
          <h1 className="text-primary font-bold text-3xl text-left w-full mb-6">
            Fill up your details
          </h1>
          <TextInput
            label="First Name"
            placeholder="John"
            value={form.firstName}
            type="text"
            onChange={(value) => setForm({ ...form, firstName: value })}
          />
          <TextInput
            label="Last Name"
            placeholder="Doe"
            value={form.lastName}
            type="text"
            onChange={(value) => setForm({ ...form, lastName: value })}
          />
          <TextInput
            label="Username"
            placeholder="johndoe"
            value={form.username}
            type="text"
            onChange={(value) => setForm({ ...form, username: value })}
          />
          {form.username.length > 0 &&
            (usenameAvailable ? (
              <label className="text-green-500 text-sm mt-1 text-left w-full">
                Username Available
              </label>
            ) : (
              <label className="text-red-500 text-sm mt-1 text-left w-full">
                {errors.username}
              </label>
            ))}
          <TextInput
            label="Password"
            placeholder="*********"
            value={form.password}
            type="password"
            onChange={(value) => setForm({ ...form, password: value })}
          />
          <TextInput
            label="Password repeat"
            placeholder="*********"
            value={form.password2}
            type="password"
            onChange={(value) => setForm({ ...form, password2: value })}
          />
          <label className="text-red-500 text-left w-full">
            {errors.password2}
          </label>
          <button
            disabled={loading || !usenameAvailable}
            className="w-full bg-primary  disabled:bg-secondary text-white rounded-md mt-6 p-2 font-semibold flex items-center justify-center"
          >
            {loading && <Spinner height={19} width={19} color="#fff" />}
            Finish Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Onboard

Onboard.Auth = false
