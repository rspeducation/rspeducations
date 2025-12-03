import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/auth.css';
import { Header } from '../../components/Header';
// import { ScrollMenu } from '../../components/ScrollMenu';
import { UpArrow } from '../../components/UpArrow';
import { useAuth } from '../../contexts/AuthContext';

const UserSignup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signupWithEmail } = useAuth();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) return setError('Please enter your full name.');
    if (!email.includes('@')) return setError('Please enter a valid email address.');
    if (password.length < 6) return setError('Password must be at least 6 characters long.');
    if (password !== confirmPassword) return setError('Passwords do not match.');

    setLoading(true);
    try {
      await signupWithEmail(name.trim(), email.trim(), password);
    } catch (err: any) {
      setError(err?.message || 'Signup failed. Please try again.');
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
          <h1 className="auth-title">Join RSP Education</h1>
          <p className="auth-subtitle">Create your account and start your learning journey today</p>
        </div>

        <div className="auth-container">
          <div className="text-center">
            <span className="role-badge">Student Registration</span>
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Create your account</h2>
          <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Fill in your details to get started</p>

          <form onSubmit={handleSignup}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label className="auth-label">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="auth-input"
                placeholder="Enter your full name"
                required
                disabled={loading}
              />
            </div>

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
                placeholder="Create a strong password"
                required
                disabled={loading}
              />
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                Minimum 6 characters
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label className="auth-label">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="auth-input"
                placeholder="Re-enter your password"
                required
                disabled={loading}
              />
            </div>

            {error && <div className="auth-alert">{error}</div>}

            <button type="submit" className="auth-btn" disabled={loading} style={{ marginBottom: '1rem' }}>
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.95rem', color: '#64748b' }}>
            Already have an account? <Link to="/auth/login" className="auth-link">Sign in</Link>
          </div>

          <div className="auth-links">
            <Link to="/" className="auth-link">← Back to Home</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserSignup;
