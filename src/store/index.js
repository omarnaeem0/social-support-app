import { configureStore } from '@reduxjs/toolkit';
import formReducer from 'src/store/formSlice';

const STORAGE_KEY = 'ssa-form-data';

const loadState = () => {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (err) {
    // ignore write errors
  }
};

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState({
    form: store.getState().form,
  });
});

export default store;
