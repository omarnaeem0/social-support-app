import TextareaField from "src/components/TextareaField";

const StepThree = ({ t, register, errors, requestSuggestion }) => (
  <div className="space-y-4">
    <TextareaField
      label={t("currentSituation")}
      name="currentSituation"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
      onHelpClick={requestSuggestion}
    />
    <TextareaField
      label={t("employmentCircumstances")}
      name="employmentCircumstances"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
      onHelpClick={requestSuggestion}
    />
    <TextareaField
      label={t("reasonForApplying")}
      name="reasonForApplying"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
      onHelpClick={requestSuggestion}
    />
  </div>
);

export default StepThree;
