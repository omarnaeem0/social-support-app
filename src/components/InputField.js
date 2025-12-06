import FieldError from "src/components/FieldError";

const InputField = ({
  label,
  name,
  register,
  errors,
  required,
  rules = {},
  type = "text",
  dir = "auto",
}) => {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-semibold text-brand-navy">{label}</span>
      <input
        type={type}
        dir={dir}
        {...register(name, { ...rules, required })}
        className="w-full rounded-xl border border-brand-light bg-white px-4 py-3 text-sm text-brand-navy shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-sky"
      />
      <FieldError message={errors[name]?.message} />
    </label>
  );
};

export default InputField;
