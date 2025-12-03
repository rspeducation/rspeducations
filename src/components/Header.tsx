import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const Header: React.FC<any> = () => {
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="rsp-header section-light-blue">
      <nav className="main-nav">
        <Link to="/" className="nav-logo">
          <img src={new URL('../../Images/rspeducation.png', import.meta.url).href} alt="RSP" />
          <h1 className="hero-title">RSP Education</h1>
        </Link>

        <div className="nav-items">
          <div className="nav-item">
            <button className="rsp-btn">
              <span className="Tutorials-hide">Tutorials</span>
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="nav-dropdown">
              <Link to="/html">HTML Tutorials</Link>
              <Link to="/css">CSS Tutorials</Link>
              <Link to="/computer">Computer Basics</Link>
              <Link to="/msword">MS-Word Tutorials</Link>
              <Link to="/mspowerpoint">PPT Tutorials</Link>
            </div>
          </div>

          <div className="nav-item">
            <button className="rsp-btn">
              <span className="Projects-hide">Projects</span>
              <i className="fa-solid fa-network-wired"></i>
            </button>
            <div className="nav-dropdown">
              <Link to="/projects/frontend">Frontend Projects</Link>
              <Link to="/projects/backend">Backend Projects</Link>
              <Link to="/projects">Projects</Link>
            </div>
          </div>

          <div className="nav-item">
            <button className="rsp-btn">
              <span className="Youtube-hide">Youtube Channels</span>
              <i className="fa-brands fa-youtube"></i>
            </button>
            <div className="nav-dropdown">
              <a href="https://www.youtube.com/@rspeducation" target="_blank" rel="noopener noreferrer">RSP Education - English</a>
              <a href="https://www.youtube.com/@rspeducation.telugu" target="_blank" rel="noopener noreferrer">RSP Education - Telugu</a>
              <a href="https://www.youtube.com/@rspeducation_hindi" target="_blank" rel="noopener noreferrer">RSP Education - Hindi</a>
              <a href="https://www.youtube.com/@rspeducation.kannada" target="_blank" rel="noopener noreferrer">RSP Education - Kannada</a>
            </div>
          </div>

          <a href="https://rsp-code-editor.rspeducation.in" target="_blank" rel="noopener noreferrer">
            <button className="rsp-btn">Code Editor</button>
          </a>

          <a href="https://Interviews" target="_blank" rel="noopener noreferrer">
            <button className="rsp-btn">Interview WIt AI</button>
          </a>

          <a href="https://rspeducation.in/app" target="_blank" rel="noopener noreferrer">
            <button className="rsp-btn">AI Resume Templates</button>
          </a>
        </div>

        <div className="auth-buttons">
          {!user ? (
            <Link to="/auth/login">
              <button className="sign-btn login-btn">Login</button>
            </Link>
          ) : (
            <div className="relative">
              <button className="profile-icon-btn" onClick={() => setShowProfileMenu((v) => !v)}>
                <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white">{user.name ? user.name[0].toUpperCase() : user.email[0].toUpperCase()}</div>
              </button>
              {showProfileMenu && (
                <div className="profile-menu absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded p-4 z-50 min-w-[180px]">
                  <div className="mb-2">
                    <div className="font-bold">{user.isAdmin ? 'Admin' : user.name || 'User'}</div>
                    <div className="text-xs break-all">{user.email}</div>
                  </div>
                  <Link to={user.isAdmin ? '/dashboard/admin' : '/dashboard/user'} className="block mt-2">Dashboard</Link>
                  <Link to="/settings" className="block mt-2">Settings</Link>
                  <button className="w-full text-left py-1 px-2 mt-2 text-red-600" onClick={logout}>Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};