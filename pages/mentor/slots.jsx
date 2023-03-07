import SelectDropdown from '@/components/SelectDrodown'
import { MONTHS_OPTIONS } from '@/utils/constants'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Slots = () => {
  const [selectedMonth, setSelectedMonth] = useState(0)
  const [days, setDays] = useState([])
  const [startDate, setStartDate] = useState(0)
  const [selectedDate, setSelectedDate] = useState(null)
  const [timeSlots, setTimeSlots] = useState([
    '9:00 - 9:45 AM',
    '9:45 - 10:30 AM',
    '10:30 - 11:15 AM',
    '11:15 - 12:00 PM',
    '12:00 - 12:45 PM',
    '12:45 - 1:30 PM',
    '1:30 - 2:15 PM',
    '2:15 - 3:00 PM',
    '3:00 - 3:45 PM',
    '3:45 - 4:30 PM',
    '4:30 - 5:15 PM',
    '5:15 - 6:00 PM',
  ])
  const [availableTimeSlots, setAvailableTimeSlots] = useState([
    '9:00 - 9:45 AM',
    '11:15 - 12:00 PM',
    '2:15 - 3:00 PM',
    '4:30 - 5:15 PM',
  ])
  const [selectedTimeSlots, setSelectedTimeSlots] = useState(null)

  useEffect(() => {
    const allDatesAndDays = getAllDatesAndDaysInMonth(selectedMonth)
    setDays(allDatesAndDays)
  }, [selectedMonth])

  function getAllDatesAndDaysInMonth(monthNumber) {
    const datesAndDays = []
    const month = new Date()
    month.setMonth(monthNumber)
    month.setDate(1)
    while (month.getMonth() === monthNumber) {
      const date = month.getDate()
      const day = month.toLocaleString('default', { weekday: 'long' })
      datesAndDays.push({ date, day })
      month.setDate(month.getDate() + 1)
    }
    return datesAndDays
  }

  return (
    <div className="w-full">
      <div className="w-full bg-primary p-10 flex flex-col gap-2 text-white">
        <h3 className="text-xl">Step 3 of 4</h3>
        <h1 className="text-3xl font-black mt-4">Book the Slot</h1>
        <span className="text-lg max-w-lg">
          Select the date and time for review process. The team will review your
          work. It's 45 minute process
        </span>
      </div>
      <div className="flex flex-row items-center justify-between mx-auto mt-10 max-w-[1200px]">
        <div className="flex items-center">
          <ChevronLeftIcon
            className="h-8 w-8 font-black text-primary mr-6 cursor-pointer"
            onClick={() => {
              if (startDate === 0) return
              setStartDate(startDate - 1)
            }}
          />
          <div className="flex gap-2 items-center ">
            {days.slice(startDate, 10 + startDate).map((day, index) => (
              <div
                className={`p-2 w-20 h-18 px-4 rounded-md text-center cursor-pointer ${
                  selectedDate?.date === day.date && 'bg-primary text-white'
                }`}
                key={index}
                onClick={() => {
                  setSelectedDate(day)
                }}
              >
                {day.day.substring(0, 3)} <br />{' '}
                <span className="font-black text-xl">{day.date}</span>
              </div>
            ))}
          </div>
          <ChevronRightIcon
            className="h-8 w-8 font-black text-primary ml-6 cursor-pointer"
            onClick={() => {
              if (startDate === days.length) return
              setStartDate(startDate + 1)
            }}
          />
        </div>
        <div className="max-w-md -mt-6">
          <SelectDropdown
            options={MONTHS_OPTIONS}
            value={selectedMonth}
            onChange={(value) => setSelectedMonth(Number(value))}
          />
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-10">
        <div className="flex flex-row items-center justify-between mb-4">
          <span className="text-xl">Select Time Slot</span>
          <div className="flex flex-row gap-4">
            <span className="text-center">
              <div className="h-2 w-2 rounded-full bg-green-500 inline-block mr-2"></div>{' '}
              Available
            </span>
            <span>
              <div className="h-2 w-2 rounded-full bg-red-500 inline-block mr-2"></div>{' '}
              Booked
            </span>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-4">
          {timeSlots.map((timeSlot, index) => (
            <div
              className={`p-3 rounded-md cursor-pointer border w-52 text-center border-gray-500 ${
                selectedTimeSlots === timeSlot && 'bg-primary text-white'
              }`}
              key={index}
              onClick={() => {
                setSelectedTimeSlots(timeSlot)
              }}
            >
              <span
                className={`text-md ${
                  selectedTimeSlots === timeSlot
                    ? 'text-white'
                    : availableTimeSlots.includes(timeSlot)
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {timeSlot}
              </span>
            </div>
          ))}
        </div>
      </div>
      {selectedTimeSlots && selectedDate && (
        <div className="max-w-[1200px] mx-auto mt-10 flex flex-row items-center justify-between">
          <div className="flex flex-col gap-4 text-xl font-bold w-fit">
            <span>
              {selectedDate?.day}, {selectedDate?.date}{' '}
              {MONTHS_OPTIONS[selectedMonth].label}
            </span>
            <span className="bg-primary text-white text-center p-4 rounded-md text-[1.2rem]">
              {selectedTimeSlots}
            </span>
          </div>
          <Link
            href={`/mentor/verification?timeslot=${selectedTimeSlots}&date=${selectedDate?.date}&month=${MONTHS_OPTIONS[selectedMonth].label}&day=${selectedDate?.day}`}
            className="mt-16 bg-primary text-white rounded-md p-2 w-32 text-center"
          >
            Proceed
          </Link>
        </div>
      )}
    </div>
  )
}

export default Slots
