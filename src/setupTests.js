// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'src/i18n';

// Use axios' CJS build for tests to avoid ESM parse issues while keeping the main import consistent.
jest.mock('axios', () => require('axios/dist/node/axios.cjs'));
