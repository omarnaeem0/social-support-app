import useLocalisation from "src/hooks/useLocalisation";
import FieldError from "src/components/FieldError";
import Button from "src/components/Button";

const TextareaField = ({
  label,
  name,
  register,
  errors,
  required,
  onHelpClick,
}) => {
  const { t } = useLocalisation();
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <label
          className="text-sm font-semibold text-brand-navy"
          htmlFor={name}
        >
          {label}
        </label>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onHelpClick(name)}
          className="text-xs"
        >
          {t("aiButton")}
        </Button>
      </div>
      <textarea
        id={name}
        rows={4}
        {...register(name, { required })}
        className="w-full rounded-xl border border-brand-light bg-white px-4 py-3 text-sm text-brand-navy shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-sky"
      />
      <FieldError message={errors[name]?.message} t={t} />
    </div>
  );
};

export default TextareaField;
