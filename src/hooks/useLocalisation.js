import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage as setLanguageAction } from "src/store/formSlice";
import { languages } from "src/constants/languages";

function useLocalisation() {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.form);
  const { t, i18n } = useTranslation();
  const dir = languages[language]?.dir || "ltr";

  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [i18n, language]);

  const changeLanguage = (selectedLanguage) => {
    dispatch(setLanguageAction(selectedLanguage));
    i18n.changeLanguage(selectedLanguage);
  };

  return {
    t,
    dir,
    language,
    languages,
    changeLanguage,
  };
}

export default useLocalisation;
