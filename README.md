# Social Support Application (Front-end case study)

Multi-step React wizard for a government social support portal with Tailwind CSS, English/Arabic support, local save, and AI-assisted writing.

## Quick start

1. Install deps: `npm install`
2. Run the app: `npm start` (http://localhost:3000)
3. Run tests: `npm test`

## OpenAI setup (AI help in Step 3)

1. Create a `.env` in the project root:

```
REACT_APP_OPENAI_API_KEY=your_api_key_here
```

2. Restart `npm start` after adding the key.

If the key is missing, the UI shows an error when you click “Help me write”.

## Features

- 3-step form with validation and progress bar
- English + Arabic (RTL) toggle
- Tailwind-powered responsive UI
- LocalStorage auto-save (resumes step + data)
- Step 3 “Help me write” uses OpenAI (gpt-3.5-turbo) with modal to accept/edit/discard
- Mock submit (replace in `src/components/Wizard.js` with real API)

## Notes & improvements

- Accessibility: labeled inputs, keyboard-focusable controls, modal focus kept simple
- To integrate a backend, replace the mock submit call in `onSubmit`
- For stricter i18n, swap the simple dictionary for `react-i18next`
