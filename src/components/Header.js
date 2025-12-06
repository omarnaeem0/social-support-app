import Button from "src/components/Button";
import useLocalisation from "src/hooks/useLocalisation";
import useStepStore from "src/hooks/useStepStore";
import { steps } from "src/constants/steps";

const Header = () => {
  const totalSteps = steps.length;
  const { step } = useStepStore();
  const {
    t,
    language: currentLanguage,
    languages,
    changeLanguage,
  } = useLocalisation();
  return (
    <header className="rounded-3xl bg-white/90 p-8 shadow-sm ring-1 ring-brand-light backdrop-blur">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
            {t("progress")} {step + 1}/{totalSteps}
          </p>
          <h1 className="text-3xl font-bold text-brand-navy sm:text-4xl">
            {t("appTitle")}
          </h1>
          <p className="max-w-3xl text-lg text-brand-blue">
            {t("appSubtitle")}
          </p>
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-navy">
            <span className="h-2 w-2 rounded-full bg-brand-sky" />
            {t("saving")}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-brand-navy">
            {t("language")}
          </span>
          <div className="rounded-full bg-[#f0f5fb] p-1 shadow-inner shadow-brand-light">
            {Object.entries(languages).map(([code, meta]) => (
              <Button
                key={code}
                onClick={() => changeLanguage(code)}
                variant="chip"
                size="sm"
                active={currentLanguage === code}
              >
                {meta.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
