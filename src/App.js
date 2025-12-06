import React, { useEffect } from "react";
import useLocalisation from "src/hooks/useLocalisation";
import AIModal from "src/components/AIModal";
import Header from "src/components/Header";
import Wizard from "src/components/Wizard";
import useApplicationForm from "src/hooks/useApplicationForm";
import useFormDataStore from "src/hooks/useFormDataStore";
import { defaultValues } from "src/constants/defaultValues";

function App() {
  const { dir } = useLocalisation();
  const { data, setData } = useFormDataStore();
  const {
    register,
    watch,
    trigger,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useApplicationForm(data || defaultValues, setData);

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-light via-white to-[#f5f8fc]">
      <div className="mx-auto max-w-6xl px-4 py-8" dir={dir}>
        <Header />
        <Wizard
          register={register}
          watch={watch}
          trigger={trigger}
          handleSubmit={handleSubmit}
          errors={errors}
          isSubmitting={isSubmitting}
        />
      </div>
      <AIModal setValue={setValue} />
    </div>
  );
}

export default App;
