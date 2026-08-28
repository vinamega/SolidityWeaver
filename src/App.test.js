// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityWeaver title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityWeaver/i);
    expect(titleElement).toBeInTheDocument();
});
