import InputField from "src/components/InputField";
import SelectField from "src/components/SelectField";
import { optionSets } from "src/constants/optionSets";

const StepTwo = ({ t, register, errors }) => (
  <div className="grid gap-4 md:grid-cols-2">
    <SelectField
      label={t("maritalStatus")}
      name="maritalStatus"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
      options={optionSets.maritalStatus}
    />
    <InputField
      label={t("dependents")}
      name="dependents"
      type="number"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
      rules={{ min: { value: 0, message: "nonNegative" } }}
    />
    <SelectField
      label={t("employmentStatus")}
      name="employmentStatus"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
      options={optionSets.employmentStatus}
    />
    <InputField
      label={t("monthlyIncome")}
      name="monthlyIncome"
      type="number"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
      rules={{ min: { value: 0, message: "nonNegative" } }}
    />
    <SelectField
      label={t("housingStatus")}
      name="housingStatus"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
      options={optionSets.housingStatus}
    />
  </div>
);

export default StepTwo;
