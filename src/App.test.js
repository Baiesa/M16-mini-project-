import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import App from './App';

test('renders E-commerce App title', () => {
  render(<App />);
  const titleElement = screen.getByText(/e-commerce app/i);
  expect(titleElement).toBeInTheDocument();
});