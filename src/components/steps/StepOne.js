import InputField from "src/components/InputField";
import SelectField from "src/components/SelectField";
import { optionSets } from "src/constants/optionSets";

const StepOne = ({ t, register, errors }) => (
  <div className="grid gap-4 md:grid-cols-2">
    <InputField
      label={t("name")}
      name="name"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
    />
    <InputField
      label={t("nationalId")}
      name="nationalId"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
    />
    <InputField
      label={t("dob")}
      name="dob"
      type="date"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
    />
    <SelectField
      label={t("gender")}
      name="gender"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
      options={optionSets.gender}
    />
    <InputField
      label={t("address")}
      name="address"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
    />
    <InputField
      label={t("city")}
      name="city"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
    />
    <InputField
      label={t("state")}
      name="state"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
    />
    <InputField
      label={t("country")}
      name="country"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
    />
    <InputField
      label={t("phone")}
      name="phone"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
    />
    <InputField
      label={t("email")}
      name="email"
      register={register}
      errors={errors}
      required={{ value: true, message: "required" }}
      rules={{
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "emailValid",
        },
      }}
      type="email"
    />
  </div>
);

export default StepOne;
