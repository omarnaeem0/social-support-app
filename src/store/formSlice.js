import { createSlice } from '@reduxjs/toolkit';
import { defaultValues } from 'src/constants/defaultValues';

const initialState = {
  data: { ...defaultValues },
  step: 0,
  language: 'en',
  ai: {
    open: false,
    field: '',
    fieldLabelKey: '',
    loading: false,
    suggestion: '',
    error: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setAiState: (state, action) => {
      state.ai = { ...state.ai, ...action.payload };
    },
  },
});

export const { setFormData, setStep, setLanguage, setAiState } =
  formSlice.actions;
export default formSlice.reducer;
