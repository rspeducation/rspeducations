import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';

export const Header: React.FC<any> = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMobileMenu]);

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    setShowMobileMenu(false);
    navigate('/', { replace: true });
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
    setExpandedSections({});
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const userInitial = user?.name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'U';

  return (
    <header className="rsp-header section-light-blue">
      <nav className="main-nav">
        <Link to="/" className="nav-logo">
          <img src={new URL('../../Images/rspeducation.png', import.meta.url).href} alt="RSP" />
          <h1 className="hero-title">RSP Education</h1>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop Auth Buttons */}
        <div className="auth-buttons">
          {!user ? (
            <Link to="/auth/login">
              <button className="sign-btn login-btn">Login</button>
            </Link>
          ) : (
            <div className="relative" ref={menuRef}>
              <button
                className="profile-icon-btn flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <div className="w-7 h-7 rounded-full bg-blue-800 flex items-center justify-center text-white font-semibold">
                  {userInitial}
                </div>
              </button>

              {showProfileMenu && (
                <div className="profile-menu absolute right-0 mt-0 mr-0 mb-0 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700 p-2 z-50 min-w-[250px]">
                  <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-700 mb-2">
                    <div className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                      {user.isAdmin ? (
                        <span className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-blue-600" />
                          Administrator
                        </span>
                      ) : (
                        user.name || 'User'
                      )}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 break-all mt-1">
                      {user.email}
                    </div>
                    {user.uid && (
                      <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        ID: {user.uid}
                      </div>
                    )}
                  </div>

                  <Link
                    to={user.isAdmin ? '/dashboard/admin' : '/dashboard/user'}
                    className="block px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    Settings
                  </Link>
                  <button
                    className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors flex items-center justify-between"
                    onClick={handleLogout}
                  >
                    <span>Logout</span>
                    <span>→</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          aria-label="Toggle mobile menu"
        >
          {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <>
          <div
            className="mobile-menu-overlay"
            onClick={closeMobileMenu}
          />
          <div className="mobile-menu">
            {/* Mobile Menu Header with Close Button */}
            <div className="mobile-menu-header">
              <h2 className="mobile-menu-title">Menu</h2>
              <button
                className="mobile-menu-close"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mobile-menu-content">
              {/* Mobile Auth Section */}
              {!user ? (
                <div className="mobile-auth-section">
                  <Link to="/auth/login" onClick={closeMobileMenu}>
                    <button className="mobile-login-btn">Login</button>
                  </Link>
                </div>
              ) : (
                <div className="mobile-auth-section">
                  <div className="mobile-user-info">
                    <div className="mobile-user-avatar">
                      {userInitial}
                    </div>
                    <div className="mobile-user-details">
                      <div className="mobile-user-name">
                        {user.isAdmin ? (
                          <span className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-blue-600" />
                            Administrator
                          </span>
                        ) : (
                          user.name || 'User'
                        )}
                      </div>
                      <div className="mobile-user-email">{user.email}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Navigation - Accordion Style */}
              <div className="mobile-nav-accordion">
                {/* Tutorials Section */}
                <div className="mobile-accordion-item">
                  <button
                    className="mobile-accordion-header"
                    onClick={() => toggleSection('tutorials')}
                  >
                    <span>📚 Tutorials</span>
                    <ChevronDown
                      size={20}
                      className={`accordion-icon ${expandedSections['tutorials'] ? 'expanded' : ''}`}
                    />
                  </button>
                  {expandedSections['tutorials'] && (
                    <div className="mobile-accordion-content">
                      <Link to="/html" onClick={closeMobileMenu}>HTML Tutorials</Link>
                      <Link to="/css" onClick={closeMobileMenu}>CSS Tutorials</Link>
                      <Link to="/computer" onClick={closeMobileMenu}>Computer Basics</Link>
                      <Link to="/msword" onClick={closeMobileMenu}>MS-Word Tutorials</Link>
                      <Link to="/mspowerpoint" onClick={closeMobileMenu}>PPT Tutorials</Link>
                    </div>
                  )}
                </div>

                {/* Projects Section */}
                <div className="mobile-accordion-item">
                  <button
                    className="mobile-accordion-header"
                    onClick={() => toggleSection('projects')}
                  >
                    <span>🚀 Projects</span>
                    <ChevronDown
                      size={20}
                      className={`accordion-icon ${expandedSections['projects'] ? 'expanded' : ''}`}
                    />
                  </button>
                  {expandedSections['projects'] && (
                    <div className="mobile-accordion-content">
                      <Link to="/projects/frontend" onClick={closeMobileMenu}>Frontend Projects</Link>
                      <Link to="/projects/backend" onClick={closeMobileMenu}>Backend Projects</Link>
                      <Link to="/projects" onClick={closeMobileMenu}>All Projects</Link>
                    </div>
                  )}
                </div>

                {/* YouTube Channels Section */}
                <div className="mobile-accordion-item">
                  <button
                    className="mobile-accordion-header"
                    onClick={() => toggleSection('youtube')}
                  >
                    <span>📺 YouTube Channels</span>
                    <ChevronDown
                      size={20}
                      className={`accordion-icon ${expandedSections['youtube'] ? 'expanded' : ''}`}
                    />
                  </button>
                  {expandedSections['youtube'] && (
                    <div className="mobile-accordion-content">
                      <a href="https://www.youtube.com/@rspeducation" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                        RSP Education - English
                      </a>
                      <a href="https://www.youtube.com/@rspeducation.telugu" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                        RSP Education - Telugu
                      </a>
                      <a href="https://www.youtube.com/@rspeducation_hindi" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                        RSP Education - Hindi
                      </a>
                      <a href="https://www.youtube.com/@rspeducation.kannada" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                        RSP Education - Kannada
                      </a>
                    </div>
                  )}
                </div>

                {/* Direct Links (No Accordion) */}
                <div className="mobile-direct-links">
                  <a
                    href="https://rsp-code-editor.rspeducation.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-direct-link"
                  >
                    💻 Code Editor
                  </a>
                  <a
                    href="https://Interviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-direct-link"
                  >
                    🎤 Interview With RSP AI
                  </a>
                  <a
                    href="https://rspeducation.in/app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-direct-link"
                  >
                    📄 AI Resume Templates
                  </a>
                </div>
              </div>

              {/* Mobile User Actions */}
              {user && (
                <div className="mobile-user-actions">
                  <Link
                    to={user.isAdmin ? '/dashboard/admin' : '/dashboard/user'}
                    onClick={closeMobileMenu}
                    className="mobile-action-btn"
                  >
                    📊 Dashboard
                  </Link>
                  <Link
                    to="/settings"
                    onClick={closeMobileMenu}
                    className="mobile-action-btn"
                  >
                    ⚙️ Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="mobile-action-btn mobile-logout-btn"
                  >
                    🚪 Logout →
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
};