import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar logo', () => {
  render(<App />);
  const logoElement = screen.getByRole('heading', { name: /Sebastin Xavier/i, level: 2 });
  expect(logoElement).toBeInTheDocument();
});
