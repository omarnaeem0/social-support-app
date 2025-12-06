import { useState } from "react";
import useLocalisation from "src/hooks/useLocalisation";
import useAiStore from "src/hooks/useAiStore";
import useFormDataStore from "src/hooks/useFormDataStore";
import useStepStore from "src/hooks/useStepStore";
import useSteps from "src/hooks/useSteps";
import { fetchChatCompletion } from "src/api/openai";
import Button from "src/components/Button";
import ProgressBar from "src/components/ProgressBar";
import SummarySidebar from "src/components/SummarySidebar";
import StepOne from "src/components/steps/StepOne";
import StepTwo from "src/components/steps/StepTwo";
import StepThree from "src/components/steps/StepThree";

const Wizard = ({
  register,
  watch,
  trigger,
  handleSubmit,
  errors,
  isSubmitting,
}) => {
  const { data } = useFormDataStore();
  const { t, language } = useLocalisation();
  const { step, setStep } = useStepStore();
  const steps = useSteps();
  const [submitStatus, setSubmitStatus] = useState("");
  const { updateAiState } = useAiStore();

  const goToNext = async () => {
    const stepFields = steps[step].fields;
    const valid = await trigger(stepFields);
    if (valid) {
      setStep(Math.min(step + 1, steps.length - 1));
      setSubmitStatus("");
    }
  };

  const goBack = () => {
    setStep(Math.max(step - 1, 0));
    setSubmitStatus("");
  };

  const onSubmit = async (formData) => {
    setSubmitStatus("");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Submitted payload (mock):", formData);
    setSubmitStatus("submitted");
  };

  const summaryPrompt = (fieldKey) => {
    const introMap =
      language === "ar"
        ? {
            currentSituation: "الوضع المالي الحالي",
            employmentCircumstances: "ظروف العمل",
            reasonForApplying: "سبب التقديم",
          }
        : {
            currentSituation: "Current financial situation",
            employmentCircumstances: "Employment circumstances",
            reasonForApplying: "Reason for applying",
          };
    const currentValues = { ...data, ...watch() };
    return `${introMap[fieldKey] || introMap.currentSituation}:\n${
      language === "ar"
        ? `الاسم: ${currentValues.name || "غير مذكور"}\nالعمل: ${
            currentValues.employmentStatus || "غير مذكور"
          }\nالدخل: ${
            currentValues.monthlyIncome
              ? `${currentValues.monthlyIncome} درهم`
              : "غير مذكور"
          }\nالمعالون: ${currentValues.dependents || "غير مذكور"}\nالسياق:\n`
        : `Name: ${currentValues.name || "Not provided"}\nEmployment: ${
            currentValues.employmentStatus || "Not provided"
          }\nIncome: ${
            currentValues.monthlyIncome
              ? `${currentValues.monthlyIncome} AED`
              : "Not provided"
          }\nDependents: ${
            currentValues.dependents || "Not provided"
          }\nContext:\n`
    }`;
  };

  const requestSuggestion = async (fieldKey) => {
    const currentValues = { ...data, ...watch() };
    if (!process.env.REACT_APP_OPENAI_API_KEY) {
      updateAiState({
        open: true,
        field: fieldKey,
        fieldLabelKey: fieldKey,
        loading: false,
        suggestion: "",
        error: t("aiMissingKey"),
      });
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    updateAiState({
      open: true,
      field: fieldKey,
      fieldLabelKey: fieldKey,
      loading: true,
      suggestion: "",
      error: "",
    });

    try {
      const text = await fetchChatCompletion({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        prompt: `${summaryPrompt(fieldKey)} ${currentValues[fieldKey] || ""}`,
        signal: controller.signal,
        language,
      });
      updateAiState({
        loading: false,
        suggestion: text || "",
        error: text ? "" : t("aiError"),
      });
    } catch (err) {
      console.error("Error fetching AI suggestion:", err);
      updateAiState({
        loading: false,
        suggestion: "",
        error: t("aiError"),
      });
    } finally {
      clearTimeout(timeout);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <StepOne t={t} register={register} errors={errors} />;
      case 1:
        return <StepTwo t={t} register={register} errors={errors} />;
      case 2:
      default:
        return (
          <StepThree
            t={t}
            register={register}
            errors={errors}
            requestSuggestion={requestSuggestion}
          />
        );
    }
  };

  return (
    <main className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
      <form
        className="space-y-6 rounded-3xl bg-white/95 p-6 shadow-sm ring-1 ring-brand-light backdrop-blur"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ProgressBar step={step} total={steps.length} t={t} />
        <div className="rounded-2xl bg-brand-light p-4 text-sm font-semibold text-brand-navy">
          {t(steps[step].titleKey)}
        </div>
        {renderStep()}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button
            type="button"
            onClick={goBack}
            disabled={step === 0 || isSubmitting}
            variant="secondary"
          >
            {t("back")}
          </Button>
          <div className="flex gap-3">
            {step < steps.length - 1 ? (
              <Button
                type="button"
                onClick={goToNext}
                disabled={isSubmitting}
                variant="primary"
              >
                {t("next")}
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting} variant="primary">
                {isSubmitting ? t("submitting") : t("submit")}
              </Button>
            )}
          </div>
        </div>
        {submitStatus && (
          <p className="text-sm font-semibold text-emerald-700">
            {t(submitStatus)}
          </p>
        )}
      </form>

      <SummarySidebar />
    </main>
  );
};

export default Wizard;
