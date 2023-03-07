import TextInput from './TextInput'

export default function MentorAddress({ form, setForm }) {
  return (
    <div>
      <h1 className="text-primary font-extrabold text-3xl text-left w-full">
        Fill Your Address
      </h1>
      <TextInput
        label="Address Line 1"
        placeholder="Enter Address Line"
        value={form.address_line_1}
        type="text"
        onChange={(value) => setForm({ ...form, address_line_1: value })}
      />
      <TextInput
        label="Address Line 2"
        placeholder="Enter Address Line 2"
        value={form.address_line_2}
        type="text"
        onChange={(value) => setForm({ ...form, address_line_2: value })}
      />
      <TextInput
        label="City"
        placeholder="Enter City"
        value={form.address_city}
        type="text"
        onChange={(value) => setForm({ ...form, address_city: value })}
      />
      <TextInput
        label="State"
        placeholder="Enter State"
        value={form.address_state}
        type="text"
        onChange={(value) => setForm({ ...form, address_state: value })}
      />
      <TextInput
        label="Pincode"
        placeholder="Enter Pincode"
        value={form.address_postal_code}
        type="number"
        onChange={(value) => setForm({ ...form, address_postal_code: value })}
      />
    </div>
  )
}
