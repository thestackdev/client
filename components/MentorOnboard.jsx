import { NICHE_OPTIONS } from '@/utils/constants'
import SelectDropdown from './SelectDrodown'
import TextInput from './TextInput'

export default function MentorOnboard({ form, setForm }) {
  return (
    <div>
      <h1 className="text-primary font-extrabold text-3xl text-left w-full">
        Lets get you setup
      </h1>
      <h3 className="text-left w-full text-gray-700 mt-4">
        You can update the information later as well
      </h3>
      <TextInput
        label="School Name"
        placeholder="Enter School Name"
        value={form.school_name}
        type="text"
        onChange={(value) => setForm({ ...form, school_name: value })}
      />
      <TextInput
        label="School's Motive"
        placeholder="Enter School's Motive"
        value={form.school_motive}
        type="text"
        onChange={(value) => setForm({ ...form, school_motive: value })}
      />
      <SelectDropdown
        label="What's your niche?"
        placeholder="Enter School's Motive"
        options={NICHE_OPTIONS}
        defaultOption="Select an option"
        onChange={(value) => setForm({ ...form, school_niche: value })}
        value={form.school_niche}
      />
      <TextInput
        label="Describe about yourself and mention your education/qualifications"
        placeholder="Enter School's Motive"
        value={form.school_description}
        type="textarea"
        onChange={(value) => setForm({ ...form, school_description: value })}
      />
    </div>
  )
}
