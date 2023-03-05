export default function TextInput({
  placeholder,
  label,
  value,
  onChange,
  type,
}) {
  return (
    <div className="mt-6 w-full">
      <label className="block mb-2 text-sm font-medium text-primary">
        {label}
      </label>
      <input
        type={type}
        className="bg-gray-50 outline-none border focus:border-[#3949AB] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  )
}
