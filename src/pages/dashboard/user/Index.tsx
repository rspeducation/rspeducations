import React from 'react';
import UserSidebar from '@/components/layout/UserSidebar';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (!user) {
    navigate('/auth/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="flex">
        <UserSidebar />
        <main className="flex-1 p-6 max-w-3xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl">{(user.email || 'U')[0].toUpperCase()}</div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{user.name || user.email}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Member</p>
              </div>
              <div className="ml-auto">
                <button onClick={logout} className="py-1 px-3 bg-red-500 text-white rounded">Logout</button>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">My Courses</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">No courses enrolled yet.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
