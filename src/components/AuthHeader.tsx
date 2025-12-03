import React from 'react';
import { Link } from 'react-router-dom';
import '../style/auth.css';

export const AuthHeader: React.FC = () => {
    return (
        <header className="auth-header">
            <nav className="auth-nav">
                <Link to="/" className="auth-nav-logo">
                    <img src={new URL('../../Images/rspeducation.png', import.meta.url).href} alt="RSP" />
                    <h1>RSP Education</h1>
                </Link>

                <div className="auth-nav-actions">
                    <Link to="/" className="auth-nav-link">
                        <i className="fa-solid fa-home"></i>
                        <span>Home</span>
                    </Link>
                    <Link to="/auth/login" className="auth-nav-link">
                        <i className="fa-solid fa-user"></i>
                        <span>Login</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};
