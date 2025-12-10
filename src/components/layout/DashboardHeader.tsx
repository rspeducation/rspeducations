import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ScrollMenu } from '@/components/ScrollMenu';
import { Shield } from 'lucide-react';

interface DashboardHeaderProps {
  title?: string;
  showScrollMenu?: boolean;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  title = "RSP Education Admin",
  showScrollMenu = true 
}) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
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

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate('/', { replace: true });
  };

  const userInitial = user?.name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'U';

  return (
    <>
      <header className="rsp-header section-light-blue sticky top-0 z-40">
        <nav className="main-nav">
          <Link to="/" className="nav-logo">
            <img 
              src={new URL('../../../Images/rspeducation.png', import.meta.url).href} 
              alt="RSP Education" 
            />
            <h1 className="hero-title">RSP Education</h1>
          </Link>

          <div className="nav-items">
            <Link to="/" className="rsp-btn">
              <span>Home</span>
            </Link>
            <Link to="/about" className="rsp-btn">
              <span>About</span>
            </Link>
            <Link to="/html" className="rsp-btn">
              <span>Courses</span>
            </Link>
            <Link to="/contact" className="rsp-btn">
              <span>Contact</span>
            </Link>
          </div>

          <div className="auth-buttons">
            {user && (
              <div className="relative" ref={menuRef}>
                <button 
                  className="profile-icon-btn flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                >
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                    {userInitial}
                  </div>
                  <span className="hidden md:block text-sm font-medium">{user.name || user.email}</span>
                </button>
                
                {showProfileMenu && (
                  <div className="profile-menu absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700 p-2 z-50 min-w-[220px]">
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
                      className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors flex items-center gap-2"
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
        </nav>
      </header>

      {showScrollMenu && <ScrollMenu />}

      {title && (
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="container mx-auto flex items-center gap-3">
            <Shield className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
            {user && (
              <span className="text-gray-500 dark:text-gray-400">Welcome, {user.name || user.email}</span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

