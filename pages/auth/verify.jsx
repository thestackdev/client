import Spinner from '@/components/Spinner'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Verify() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { data: session, status } = useSelector((state) => state.user)

  useEffect(() => {
    if (status === 'loading') return
    if (session) router.push('/')
  }, [session, status])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const inputs = document.querySelectorAll('#otp > *[id]')
    const otp = []
    for (let i = 0; i < inputs.length; i++) {
      otp.push(inputs[i].value)
    }
    console.log(otp.join(''))
    router.push('/auth/onboard')
    try {
      setLoading(true)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    function OTPInput() {
      const inputs = document.querySelectorAll('#otp > *[id]')
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keydown', function (event) {
          if (event.key === 'Backspace') {
            inputs[i].value = ''
            if (i !== 0) inputs[i - 1].focus()
          } else {
            if (i === inputs.length - 1 && inputs[i].value !== '') {
              return true
            } else if (event.keyCode > 47 && event.keyCode < 58) {
              inputs[i].value = event.key
              if (i !== inputs.length - 1) inputs[i + 1].focus()
              event.preventDefault()
            } else if (event.keyCode > 64 && event.keyCode < 91) {
              inputs[i].value = String.fromCharCode(event.keyCode)
              if (i !== inputs.length - 1) inputs[i + 1].focus()
              event.preventDefault()
            }
          }
        })
      }
    }
    OTPInput()

    return () => {
      document.removeEventListener('keydown', OTPInput)
    }
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen">
      <div className="col-span-2 hidden lg:block bg-primary"></div>
      <div className="col-span-1 w-full p-4 md:max-w-md md:mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center mt-24 "
        >
          <h1 className="text-primary font-bold text-3xl text-left w-full mb-6">
            Verify your <br /> Email
          </h1>
          <div className="w-full text-left">
            <span>
              We've sent an activation code to{' '}
              <span className="text-primary">{router.query?.email}</span>
            </span>
          </div>
          <div
            id="otp"
            className="flex flex-row justify-center text-center px-2 mt-5"
          >
            <input
              className="m-2 border h-10 w-10 text-center form-control rounded-lg"
              type="text"
              id="first"
              maxLength="1"
              required
            />
            <input
              className="m-2 border h-10 w-10 text-center form-control rounded-lg"
              type="text"
              id="second"
              maxLength="1"
              required
            />
            <input
              className="m-2 border h-10 w-10 text-center form-control rounded-lg"
              type="text"
              id="third"
              maxLength="1"
              required
            />
            <input
              className="m-2 border h-10 w-10 text-center form-control rounded-lg"
              type="text"
              id="fourth"
              maxLength="1"
              required
            />
            <input
              className="m-2 border h-10 w-10 text-center form-control rounded-lg"
              type="text"
              id="fifth"
              maxLength="1"
              required
            />
            <input
              className="m-2 border h-10 w-10 text-center form-control rounded-lg"
              type="text"
              id="sixth"
              maxLength="1"
              required
            />
          </div>
          <button
            disabled={loading}
            className="w-full bg-primary text-white rounded-md mt-6 p-2 font-semibold flex items-center justify-center disabled:bg-gray-300 disabled:text-slate-600"
          >
            {loading && <Spinner height={19} width={19} color="#fff" />}
            Submit
          </button>
        </form>
        <div className="text-center w-full mx-auto mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Verify

Verify.Auth = false
