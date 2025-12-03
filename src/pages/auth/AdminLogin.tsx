import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/auth.css';
import { Header } from '../../components/Header';
// import { ScrollMenu } from '../../components/ScrollMenu';
import { UpArrow } from '../../components/UpArrow';
import { useAuth } from '../../contexts/AuthContext';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { loginWithEmail } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    setLoading(true);
    try {
      await loginWithEmail(email.trim(), password);
    } catch (err: any) {
      setError(err?.message || 'Invalid admin credentials. Please check your email and password.');
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
          <h1 className="auth-title">Admin Portal</h1>
          <p className="auth-subtitle">Secure access to site administration</p>
        </div>

        <div className="auth-container">
          <div className="text-center">
            <span className="role-badge admin-badge">🔐 Administrator</span>
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Admin Sign In</h2>
          <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Enter your administrator credentials</p>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label className="auth-label">Admin Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="auth-input"
                placeholder="admin@rspeducations.com"
                required
                disabled={loading}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label className="auth-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="auth-input"
                placeholder="Enter admin password"
                required
                disabled={loading}
              />
            </div>

            {error && <div className="auth-alert">{error}</div>}

            <button type="submit" className="auth-btn" disabled={loading} style={{ marginBottom: '1rem' }}>
              {loading ? 'Signing in...' : '🔐 Sign in as Admin'}
            </button>
          </form>

          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
            borderRadius: '12px',
            border: '2px solid #fbbf24',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '0.85rem', color: '#92400e', fontWeight: 600, marginBottom: '0.5rem' }}>
              📌 Demo Credentials
            </p>
            <p style={{ fontSize: '0.85rem', color: '#92400e', fontFamily: 'monospace' }}>
              Email: admin@rspeducations.com<br />
              Password: RSP@2025
            </p>
          </div>

          <div className="auth-links">
            <Link to="/auth/login" className="auth-link">← Student Login</Link>
            <Link to="/" className="auth-link">← Back to Home</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLogin;
