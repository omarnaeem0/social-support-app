import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep as setStepAction } from "src/store/formSlice";

const useStepStore = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.form.step);

  const setStep = useCallback(
    (value) => {
      dispatch(setStepAction(value));
    },
    [dispatch]
  );

  return { step, setStep };
};

export default useStepStore;
