import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React Calculator heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/react calculator/i);
  expect(headingElement).toBeInTheDocument();
});

