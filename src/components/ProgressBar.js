import useLocalisation from "src/hooks/useLocalisation";

const ProgressBar = ({ step, total }) => {
  const { t } = useLocalisation();
  const percent = Math.round(((step + 1) / total) * 100);
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm font-semibold text-brand-navy">
        <span>
          {t("progress")} {step + 1}/{total}
        </span>
        <span>{percent}%</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-brand-light"
        aria-hidden
      >
        <div
          className="h-full bg-brand-blue transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
