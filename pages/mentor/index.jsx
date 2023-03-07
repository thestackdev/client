import MentorAddress from '@/components/MentorAddress'
import MentorDetails from '@/components/MentorDetails'
import MentorDocuments from '@/components/MentorDocuments'
import MentorOnboard from '@/components/MentorOnboard'
import MentorSidebar from '@/components/MentorSidebar'
import Progressbar from '@/components/Progressbar'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Mentor() {
  const [form, setForm] = useState({
    school_name: '',
    school_motive: '',
    school_niche: '',
    school_description: '',
    mentor_language: '',
    mentor_identity: '',
    mentor_is_teacher: '',
    mentor_experience: '',
    mentor_document_to_teach: '',
    address_line_1: '',
    address_line_2: '',
    address_city: '',
    address_state: '',
    address_postal_code: '',
    mentor_pan_card: '',
    mentor_video: '',
  })
  const [loading, setLoading] = useState(false)
  const { data: session, status } = useSelector((state) => state.user)
  const router = useRouter()
  const [step, setStep] = useState(1)
  const dispatch = useDispatch()
  const totalSteps = 4

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (step < totalSteps) {
      setStep(step + 1)
      return
    }

    try {
      setLoading(true)

      //   const _form = new URLSearchParams()
      //   _form.append('source', form.source)
      //   _form.append('password', form.password)

      //   await axios.post('/user/login', _form)
      //   dispatch(setStatus('refresh'))
      router.push('/mentor/slots')
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <MentorSidebar />
      <div className="col-span-1 w-full p-4 md:max-w-lg md:mx-auto">
        <form onSubmit={handleSubmit} className="pt-24 h-full">
          {step === 1 && <MentorOnboard form={form} setForm={setForm} />}
          {step === 2 && <MentorDetails form={form} setForm={setForm} />}
          {step === 3 && <MentorAddress form={form} setForm={setForm} />}
          {step === 4 && <MentorDocuments form={form} setForm={setForm} />}
          <div className="flex flex-grow"></div>
          <div className="w-full mt-4 flex flex-col gap-2">
            <span className="text-lg font-bold">
              Step {step} of {totalSteps}
            </span>
            <Progressbar progress={(step / totalSteps) * 100} color="#3949ab" />
            <div className="flex flex-row">
              <button
                onClick={() => setStep(step - 1)}
                disabled={loading}
                className={`w-full ${
                  step === 1 && 'invisible'
                } text-gray-900 rounded-md mt-6 p-2 font-normal flex items-center justify-center`}
              >
                {loading && <Spinner height={19} width={19} color="#fff" />}
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white rounded-md mt-6 p-2 font-normal flex items-center justify-center"
              >
                {loading && <Spinner height={19} width={19} color="#fff" />}
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Mentor

Mentor.Auth = false
