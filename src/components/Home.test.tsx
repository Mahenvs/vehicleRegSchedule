import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('renders the Home component', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
});

test('renders the heading correctly', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(getByText('Welcome to Car Service Appointment booking system !')).toBeInTheDocument();
});

test('renders the "Login" link correctly', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const loginLink = getByText('Login');
  expect(loginLink).toBeInTheDocument();
  expect(loginLink.getAttribute('href')).toBe('/login');
});

test('renders the "Register" link correctly', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const registerLink = getByText('Register');
  expect(registerLink).toBeInTheDocument();
  expect(registerLink.getAttribute('href')).toBe('/register');
});

test('renders the instruction text correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  
    expect(getByText(/Please/)).toBeInTheDocument();
    expect(getByText(/to book your appointment/)).toBeInTheDocument();
  });
  