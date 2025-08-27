import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio title', () => {
  render(<App />);
  const nameEl = screen.getAllByText(/Rohit Kumar/i)[0];
  expect(nameEl).toBeInTheDocument();
});
