import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useFormDataStore from "src/hooks/useFormDataStore";
import { defaultValues as initialValues } from "src/constants/defaultValues";

const useApplicationForm = () => {
  const { data, setData: onChange } = useFormDataStore();
  const defaultValues = data || initialValues;
  const methods = useForm({
    mode: "onBlur",
    defaultValues,
  });
  const { watch } = methods;

  useEffect(() => {
    if (!onChange) return undefined;
    const subscription = watch((value) => onChange(value));
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return methods;
};

export default useApplicationForm;
