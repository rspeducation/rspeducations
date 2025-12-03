import React, { createContext, useContext, useEffect, useState } from 'react';

type User = {
  uid: string;
  name?: string;
  email: string;
  isAdmin?: boolean;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  signupWithEmail: (name: string, email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
};

const ADMIN_EMAIL = 'admin@rspeducations.com';
const ADMIN_PASSWORD = 'RSP@2025';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const raw = localStorage.getItem('rsp_user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(false);

  const persistUser = (u: User | null) => {
    setUser(u);
    if (u) localStorage.setItem('rsp_user', JSON.stringify(u));
    else localStorage.removeItem('rsp_user');
  };

  const loginWithEmail = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Admin fixed credentials
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const u: User = { uid: 'admin-1', name: 'Admin', email, isAdmin: true };
        persistUser(u);
        // navigate to admin dashboard
        window.location.href = '/dashboard/admin';
        return;
      }

      // Normal user: validate against stored registry (simple client-side store)
      const usersRaw = localStorage.getItem('rsp_users') || '[]';
      const users = JSON.parse(usersRaw) as { name?: string; email: string; password?: string }[];
      const found = users.find((u) => u.email === email && u.password === password);
      if (!found) throw new Error('Invalid credentials');
      const u: User = { uid: `user-${email}`, name: found.name || email.split('@')[0], email };
      persistUser(u);
      window.location.href = '/dashboard/user';
    } finally {
      setLoading(false);
    }
  };

  const signupWithEmail = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      if (email === ADMIN_EMAIL) throw new Error('Cannot register as admin');
      const usersRaw = localStorage.getItem('rsp_users') || '[]';
      const users = JSON.parse(usersRaw) as { name?: string; email: string; password?: string }[];
      if (users.find((u) => u.email === email)) throw new Error('Already registered');
      users.push({ name, email, password });
      localStorage.setItem('rsp_users', JSON.stringify(users));
      const u: User = { uid: `user-${email}`, name, email };
      persistUser(u);
      window.location.href = '/dashboard/user';
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      // Simple demo: prompt for an email to simulate Google sign-in.
      const email = window.prompt('Enter Google email (demo):');
      if (!email) throw new Error('Cancelled');
      if (email === ADMIN_EMAIL) throw new Error('Admin must sign in with admin credentials');
      const name = email.split('@')[0];
      const u: User = { uid: `google-${email}`, name, email };
      // ensure user is stored in registry
      const usersRaw = localStorage.getItem('rsp_users') || '[]';
      const users = JSON.parse(usersRaw) as { name?: string; email: string; password?: string }[];
      if (!users.find((x) => x.email === email)) {
        users.push({ name, email });
        localStorage.setItem('rsp_users', JSON.stringify(users));
      }
      persistUser(u);
      window.location.href = '/dashboard/user';
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    persistUser(null);
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, loginWithEmail, signupWithEmail, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};

export default AuthContext;
