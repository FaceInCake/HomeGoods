import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage', () => {
  render(<App />);
  screen.getBy
  const linkElement = screen.getByText("Home");
  expect(linkElement).toBeInTheDocument();
});
