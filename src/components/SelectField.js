import FieldError from "src/components/FieldError";
import useLocalisation from "src/hooks/useLocalisation";

const SelectField = ({ label, name, register, errors, required, options }) => {
  const { t } = useLocalisation();
  return (
    <label className="block space-y-1">
      <span className="text-sm font-semibold text-brand-navy">{label}</span>
      <select
        {...register(name, { required })}
        className="w-full rounded-xl border border-brand-light bg-white px-4 py-3 text-sm text-brand-navy shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-sky"
      >
        <option value="">{t("selectPlaceholder")}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {t(opt)}
          </option>
        ))}
      </select>
      <FieldError message={errors[name]?.message} t={t} />
    </label>
  );
};

export default SelectField;
