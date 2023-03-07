import Spinner from '@/components/Spinner'
import TextInput from '@/components/TextInput'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Onboard() {
  const [form, setForm] = useState({
    name: '',
    username: '',
    password: '',
    password2: '',
  })
  const [loading, setLoading] = useState(false)
  const { data: session, status } = useSelector((state) => state.user)
  const [errors, setErrors] = useState({
    name: '',
    username: '',
    password: '',
    password2: '',
  })
  const [usenameAvailable, setUsernameAvailable] = useState(false)
  const router = useRouter()

  // useEffect(() => {
  //   if (status === 'loading') return
  //   if (session) router.push('/')
  //   console.log(session)
  // }, [session, status])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const _form = new URLSearchParams()

      if (form.password !== form.password2) {
        setErrors({
          ...errors,
          password2: 'Passwords do not match',
        })
        return
      }

      if (errors.name || errors.username || errors.password) return

      setLoading(true)

      _form.append('name', form.name)
      _form.append('username', form.username)
      _form.append('password', form.password)
      _form.append('dob', 1675341327162)
      _form.append('mentor', 0)

      const response = await axios.post('/user/details', _form)
      console.log(response.data)

      router.push('/auth/dob')
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    setErrors({
      name: '',
      username: '',
      password: '',
      password2: '',
    })
  }, [form])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (form.username.length > 0) {
        axios
          .get(`/user/check_username?user_name=${form.username}`)
          .then((res) => {
            if (res.data) {
              if (res.data.available === 0) {
                setUsernameAvailable(false)
                setErrors({
                  ...errors,
                  username: 'Username already taken',
                })
                return
              } else {
                setUsernameAvailable(true)
                setErrors({
                  ...errors,
                  username: '',
                })
              }
            }
          })
          .catch((err) => {
            console.log(err)
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
            label="Name"
            placeholder="John Doe"
            value={form.name}
            type="text"
            onChange={(value) => setForm({ ...form, name: value })}
          />
          <TextInput
            label="Username"
            placeholder="johndoe"
            value={form.username}
            type="text"
            onChange={(value) => setForm({ ...form, username: value })}
          />
          <label className="text-red-500 text-sm mt-1 text-left w-full">
            {errors.username}
          </label>
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
