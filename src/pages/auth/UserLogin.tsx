import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../style/auth.css';
import { Header } from '../../components/Header';
// import { ScrollMenu } from '../../components/ScrollMenu';
import { UpArrow } from '../../components/UpArrow';
import { useAuth } from '../../contexts/AuthContext';

const UserLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { loginWithEmail, loginWithGoogle, user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate(user.isAdmin ? '/dashboard/admin' : '/dashboard/user', { replace: true });
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.includes('@')) return setError('Please enter a valid email address.');
    if (password.length < 4) return setError('Password must be at least 4 characters.');

    setLoading(true);
    try {
      await loginWithEmail(email.trim(), password);
      // Navigation handled by useEffect when user state updates
    } catch (err: any) {
      setError(err?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError('');
    setLoading(true);
    try {
      await loginWithGoogle();
      // Navigation handled by useEffect when user state updates
    } catch (err: any) {
      setError(err?.message || 'Google sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rsp-auth-page">
      <Header />
      {/* <ScrollMenu /> */}
      <UpArrow show={true} />

      {/* Animated Background */}
      <div className="auth-bg-decoration">
        <div className="auth-floating-shape auth-shape-1"></div>
        <div className="auth-floating-shape auth-shape-2"></div>
        <div className="auth-floating-shape auth-shape-3"></div>
      </div>

      <main className="rsp-auth-container">
        <div className="text-center mb-6">
          <h1 className="auth-title">Welcome Back!</h1>
          <p className="auth-subtitle">Sign in to access your courses and continue learning</p>
        </div>

        <div className="auth-container">
          <div className="text-center">
            <span className="role-badge">Student Login</span>
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Sign in to your account</h2>
          <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Enter your credentials to continue</p>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label className="auth-label">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="auth-input"
                placeholder="you@example.com"
                required
                disabled={loading}
              />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label className="auth-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="auth-input"
                placeholder="Enter your password"
                required
                disabled={loading}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                  disabled={loading}
                />
                <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Remember me</span>
              </label>
              <Link to="#" className="auth-link" style={{ fontSize: '0.9rem' }}>Forgot password?</Link>
            </div>

            {error && <div className="auth-alert">{error}</div>}

            <button type="submit" className="auth-btn" disabled={loading} style={{ marginBottom: '1rem' }}>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <button onClick={handleGoogle} className="auth-btn auth-google" disabled={loading}>
            Sign in with Google
          </button>

          <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.95rem', color: '#64748b' }}>
            New to RSP Education? <Link to="/auth/signup" className="auth-link">Create an account</Link>
          </div>

          <div className="auth-links">
            <Link to="/auth/admin" className="auth-link">Admin Login →</Link>
            <Link to="/" className="auth-link">← Back to Home</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserLogin;
