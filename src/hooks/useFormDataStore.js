import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "src/store/formSlice";

const useFormDataStore = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form.data);

  const setData = useCallback(
    (value) => {
      dispatch(setFormData(value));
    },
    [dispatch]
  );

  return { data, setData };
};

export default useFormDataStore;
