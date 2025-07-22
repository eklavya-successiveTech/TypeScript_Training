import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { AuthContextProvider } from '@/context/AuthContext';

const renderWithProvider = () =>
  render(
    <AuthContextProvider>
      <Login />
    </AuthContextProvider>
  );

describe('Login Component', () => {
  it('renders the login form initially', () => {
    renderWithProvider();

    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText(/please login/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  it('logs in successfully with correct credentials', async () => {
    renderWithProvider();
    await userEvent.type(screen.getByLabelText(/username/i), 'Nayan');
    await userEvent.type(screen.getByLabelText(/password/i), '2486');
    await userEvent.click(screen.getByRole('button', { name: /log in/i }));
    expect(await screen.findByText(/welcome back !!/i)).toBeInTheDocument();
  });
  it('does not log in with wrong credentials', async () => {
    renderWithProvider();
    await userEvent.type(screen.getByLabelText(/username/i), 'wronguser');
    await userEvent.type(screen.getByLabelText(/password/i), '000');
    await userEvent.click(screen.getByRole('button', { name: /log in/i }));
    expect(await screen.findByText(/please login/i)).toBeInTheDocument();
  });
});
