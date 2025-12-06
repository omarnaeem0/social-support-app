## Architecture

- Redux stores form data, current step, language, and AI modal state; a store subscriber persists to local storage so progress survives reloads.
- Forms use `react-hook-form` with helpers in `src/hooks` to sync values and validation results back to Redux.
- UI is split into a wizard shell plus step components in `src/components/steps`; shared UI sits under `src/components`.
- AI calls live in `src/api/openai.js`; the modal reads/writes AI state through Redux to keep UI and requests in sync.
- i18n uses `react-i18next`, loading JSON from `public/locales`; `useLocalisation` keeps Redux language, i18n, and text direction aligned.
- Tailwind styling uses the `brand.*` palette defined in `tailwind.config.js`.

## Decisions

- Persist form progress locally via Redux rather than a backend to keep the app offline-friendly.
- Separate concerns: API code in `src/api`, state in slices/hooks, and view logic in components/steps.
- Inline minimal i18n test strings in `src/i18n.js` to avoid network fetches during Jest runs.
- Arabic translations were AI-generated (I don’t speak Arabic) and wired through react-i18next from `public/locales`; some phrases may need human review.

## Improvements

- Add integration tests that mock the OpenAI call and verify the AI modal flow end-to-end.
- Add loading or skeleton states for the wizard panels while async work runs.
- Move the test-only i18n strings into a dedicated Jest mock for cleaner production config.
- Expand locale handling (date/number formatting helpers, optional language detection) for a more polished multilingual experience.
