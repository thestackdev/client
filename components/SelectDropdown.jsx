export default function SelectDropdown({
  label,
  defaultOption,
  options,
  value,
  onChange,
  required,
}) {
  return (
    <div className="mt-6 w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-primary">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-50 outline-none border focus:border-[#3949AB] border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5"
        required={required}
      >
        <option key={defaultOption} value="" disabled>
          {defaultOption}
        </option>
        {options.map((e) => (
          <option key={e.value} value={e.value}>
            {e.label}
          </option>
        ))}
      </select>
    </div>
  )
}
