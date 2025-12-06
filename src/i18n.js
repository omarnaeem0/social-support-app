import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

// Inline translations for tests (prevents HTTP fetch in Jest)
const testResources = {
  en: {
    translation: {
      selectPlaceholder: "Select an option",
      appTitle: "Social Support Application",
      appSubtitle:
        "Complete the steps to apply for assistance. You can switch languages, save progress, and get AI help when writing your situation.",
      step1Title: "Personal Information",
      step2Title: "Family & Financial Info",
      step3Title: "Situation Descriptions",
      next: "Next",
      back: "Back",
      submit: "Submit application",
      saving: "Progress saves locally as you type.",
      language: "Language",
      name: "Full Name",
      nationalId: "National ID",
      dob: "Date of Birth",
      gender: "Gender",
      address: "Address",
      city: "City",
      state: "State",
      country: "Country",
      phone: "Phone",
      email: "Email",
      maritalStatus: "Marital Status",
      dependents: "Dependents",
      employmentStatus: "Employment Status",
      monthlyIncome: "Monthly Income (AED)",
      housingStatus: "Housing Status",
      currentSituation: "Current Financial Situation",
      employmentCircumstances: "Employment Circumstances",
      reasonForApplying: "Reason for Applying",
      required: "This field is required.",
      emailValid: "Please enter a valid email.",
      aiButton: "Help me write",
      aiModalTitle: "AI suggestion",
      aiError: "Unable to fetch a suggestion. Please try again.",
      aiMissingKey: "Missing OpenAI API key. Add REACT_APP_OPENAI_API_KEY.",
      accept: "Use text",
      discard: "Discard",
      submitting: "Submitting...",
      submitted: "Application submitted (mock).",
      progress: "Step",
      sidebarAssistLabel: "AI Guidance",
      sidebarAssistTitle: "Explain your situation",
      sidebarAssistBody:
        "Use the AI helper to structure your reasons for support in clear, concise language.",
      sidebarMockTitle: "Tip",
      sidebarMockBody:
        "Describe the specific challenge and what assistance would change for you.",
    },
  },
  ar: {
    translation: {
      selectPlaceholder: "اختر خيارًا",
    },
  },
};

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    react: { useSuspense: false },
    resources: process.env.NODE_ENV === "test" ? testResources : undefined,
  });

export default i18n;
