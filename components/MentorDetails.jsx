import {
  HAVE_MATERIAL_TO_TEACH_OPTIONS,
  IDENTIFY_YOURSELF_OPTIONS,
  LANGUAGE_OPTIONS,
  ONLINE_TEACHER_OPTIONS,
  YEARS_OF_EXPERIENCE_OPTIONS,
} from '@/utils/constants'
import SelectDropdown from './SelectDrodown'

export default function MentorDetails({ form, setForm }) {
  return (
    <div>
      <h1 className="text-primary font-extrabold text-3xl text-left w-full">
        Fill up your details
      </h1>
      <SelectDropdown
        label="In what language do you teach?"
        placeholder="Select your language"
        options={LANGUAGE_OPTIONS}
        defaultOption="Select an option"
        onChange={(value) => setForm({ ...form, mentor_language: value })}
        value={form.mentor_language}
      />
      <SelectDropdown
        label="How do you identify yourself?"
        placeholder="Identify yourself"
        options={IDENTIFY_YOURSELF_OPTIONS}
        defaultOption="Select an option"
        onChange={(value) => setForm({ ...form, mentor_identity: value })}
        value={form.mentor_identity}
      />
      <SelectDropdown
        label="Are you already teaching online?"
        placeholder="Are you already teaching online?"
        options={ONLINE_TEACHER_OPTIONS}
        defaultOption="Select an option"
        onChange={(value) => setForm({ ...form, mentor_is_teacher: value })}
        value={form.mentor_is_teacher}
      />
      <SelectDropdown
        label="How many years of experience do you have in teaching?"
        placeholder="Experience in teaching"
        options={YEARS_OF_EXPERIENCE_OPTIONS}
        defaultOption="Select an option"
        onChange={(value) => setForm({ ...form, mentor_experience: value })}
        value={form.mentor_experience}
      />
      <SelectDropdown
        label="Do you have material or document to teach?"
        placeholder="Do you have material or document to teach?"
        options={HAVE_MATERIAL_TO_TEACH_OPTIONS}
        defaultOption="Select an option"
        onChange={(value) =>
          setForm({ ...form, mentor_document_to_teach: value })
        }
        value={form.mentor_document_to_teach}
      />
    </div>
  )
}
