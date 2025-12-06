import { useEffect } from "react";
import { useForm } from "react-hook-form";

const useApplicationForm = (defaultValues, onChange) => {
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
