import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from 'src/App';
import store from 'src/store';

test('renders application heading', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const heading = screen.getByText(/Social Support Application/i);
  expect(heading).toBeInTheDocument();
});
