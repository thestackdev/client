import Dropzone from '@/components/Dropzone'
import SelectDropdown from '@/components/SelectDropdown'
import SemiCircleProgressBar from '@/components/SemiCircleProgress'
import Spinner from '@/components/Spinner'
import TextInput from '@/components/TextInput'
import {
  courseCategoryOptions,
  courseLanguageOptions,
  courseLevelOptions,
} from '@/utils/constants'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Dashbaord() {
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [description, setDescription] = useState('')
  const [courseLanguage, setCourseLanguage] = useState('')
  const [courseLevel, setCourseLevel] = useState('')
  const [courseCategory, setCourseCategory] = useState('')
  const [courseIntroFile, setIntroFile] = useState(null)
  const [courseThumbnail, setCourseThumbnail] = useState(null)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const steps = [
    { title: 'Course Landing Page' },
    { title: 'Batches' },
    { title: 'Intended Learners' },
    { title: 'Cirriculum' },
    { title: 'Course Requirement' },
    { title: 'Pricing' },
    { title: 'Promotions' },
  ]

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const form = new URLSearchParams()

      form.append('school_id', 27)
      form.append('course_title', title)
      form.append('course_subtitle', subTitle)
      form.append('course_description', description)
      form.append('course_language', courseLanguage)
      form.append('course_difficulty_level', courseLevel)
      form.append('course_category', 1)
      form.append('course_intro_file', courseIntroFile)
      form.append('course_thumbnail', courseThumbnail)

      const response = await axios.post(
        '/courses/create_course/landing_page',
        form.toString()
      )

      router.push('/cirriculum')

      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto p-10">
      <div className="flex flex-row justify-end md:justify-between mb-10">
        <h1 className="text-[#3949AB] text-4xl font-extrabold leading-9 tracking-normal text-center hidden lg:block">
          Youvatar
        </h1>
        <button className="bg-[#3949AB] text-white rounded px-3 py-2 text-sm">
          Save Draft
        </button>
      </div>
      <div className="flex justify-between gap-[100px]">
        <img
          className="h-[548px] w-[265px] rounded-sm hidden lg:block"
          src="/png/mobile.png"
        />
        <div className="w-full max-w-screen-md">
          <div className="flex border mb-8 max-w-screen-md border-gray-300 px-4 pt-4 w-full rounded-lg overflow-x-scroll scrollbar-none cursor-pointer">
            <div className="flex flex-nowrap">
              {steps.map((step, index) => (
                <span
                  key={index}
                  className={`whitespace-nowrap mr-5 ${
                    index === currentStep && 'font-semibold text-primary'
                  }`}
                >
                  {step.title} <br />
                  {index === currentStep && (
                    <div className="h-2 bg-primary w-full rounded-lg mt-1"></div>
                  )}
                </span>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h1 className="text-[#121212] font-bold text-3xl mb-2">
              Course Landing Page
            </h1>
            <div className="flex flex-row gap-4">
              <img className="w-full lg:w-[300px]" src="/png/girl.png" />
              <div className="relative hidden lg:block">
                <SemiCircleProgressBar
                  background="#3949AB33"
                  diameter={350}
                  strokeWidth={30}
                  stroke="#3949AB"
                  percentage={progress}
                />
                <div className="absolute bottom-0 right-0 left-0 flex flex-col items-center bg-white w-fit mx-auto">
                  <span>Percentage</span>
                  <span className="text-4xl font-bold">{progress}%</span>
                </div>
              </div>
            </div>
            <TextInput
              label="Couse Title"
              placeholder="Couse Title"
              value={title}
              onChange={(e) => setTitle(e)}
            />
            <TextInput
              label="Couse Subtitle"
              placeholder="Couse Subtitle"
              value={subTitle}
              onChange={(e) => setSubTitle(e)}
            />
            <TextInput
              label="Couse Description"
              placeholder="My Awesome Course"
              type="textarea"
              value={description}
              onChange={(e) => setDescription(e)}
            />
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <SelectDropdown
                defaultOption="Course Language"
                label="Language"
                options={courseLanguageOptions}
                value={courseLanguage}
                onChange={setCourseLanguage}
              />
              <SelectDropdown
                defaultOption="Course Level"
                label="Level"
                options={courseLevelOptions}
                value={courseLevel}
                onChange={setCourseLevel}
              />
              <SelectDropdown
                defaultOption="Course Category"
                label="Category"
                options={courseCategoryOptions}
                value={courseCategory}
                onChange={setCourseCategory}
              />
            </div>
            <Dropzone
              label="Course Introduction File"
              value={courseIntroFile}
              onPicked={(e) => setIntroFile(e)}
            />
            <Dropzone
              label="Course Thumnbail"
              value={courseThumbnail}
              onPicked={(e) => setCourseThumbnail(e)}
            />
            <div className="flex justify-between w-full mt-4">
              <button className="w-full p-2 text-primary" type="button">
                Back
              </button>
              <button
                disabled
                className="w-full disabled:bg-secondary bg-primary text-white rounded-md p-2 font-semibold flex items-center justify-center"
              >
                {loading && <Spinner height={19} width={19} color="#fff" />}
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
