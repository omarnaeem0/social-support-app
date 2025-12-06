import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAiState } from "src/store/formSlice";

const useAiStore = () => {
  const dispatch = useDispatch();
  const aiState = useSelector((state) => state.form.ai);

  const updateAiState = useCallback(
    (payload) => {
      dispatch(setAiState(payload));
    },
    [dispatch]
  );

  return { aiState, updateAiState };
};

export default useAiStore;
