// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders E-commerce App title', () => {
  render(<App />);
  const titleElement = screen.getByText(/E-commerce App/i);
  expect(titleElement).toBeInTheDocument();
});