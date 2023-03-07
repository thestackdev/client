import Spinner from '@/components/Spinner'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function DOB() {
  const [form, setForm] = useState({
    day: '01',
    month: '01',
    year: '2023',
  })
  const [loading, setLoading] = useState(false)
  const { data: session, status } = useSelector((state) => state.user)
  const router = useRouter()

  const days = Array.from(Array(31).keys()).map((day) =>
    (day + 1).toString().length === 1 ? `0${day + 1}` : `${day + 1}`
  )
  const months = Array.from(Array(12).keys()).map((month) =>
    (month + 1).toString().length === 1 ? `0${month + 1}` : `${month + 1}`
  )
  const years = Array.from(Array(100).keys()).map((year) => `${year + 1924}`)

  // useEffect(() => {
  //   if (status === 'loading') return
  //   if (session) router.push('/')
  //   console.log(session)
  // }, [session, status])

  function convertToNowFormat() {
    const date = new Date(form.year, form.month, form.day)
    return new Date(Date.now() - date.getTimezoneOffset() * 60 * 1000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const nowDate = convertToNowFormat()
      const _form = new URLSearchParams()

      _form.append('dob', nowDate.getTime())

      const response = await axios.patch('/user/details', _form)
      console.log(response.data)
      router.push('/auth/intrests')
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const Select = ({ options, value, onChange }) => {
    return (
      <select
        onChange={onChange}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
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
            Add Your Birthday
          </h1>
          <div className="w-full flex gap-4">
            <Select
              options={days}
              value={form.day}
              onChange={(event) => {
                setForm({ ...form, day: event.target.value })
              }}
            />
            <Select
              options={months}
              value={form.month}
              onChange={(event) => {
                setForm({ ...form, month: event.target.value })
              }}
            />
            <Select
              options={years}
              value={form.year}
              onChange={(event) => {
                setForm({ ...form, year: event.target.value })
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white rounded-md mt-36     p-2 font-semibold flex items-center justify-center"
          >
            {loading && <Spinner height={19} width={19} color="#fff" />}
            Update Profile
          </button>
        </form>
      </div>
    </div>
  )
}

export default DOB

DOB.Auth = false
