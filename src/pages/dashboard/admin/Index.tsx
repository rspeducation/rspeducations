import React from 'react';
import tutorials from '@/data/tutorials.json';
import AdminSidebar from '@/components/layout/AdminSidebar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (!user || !user.isAdmin) {
    navigate('/auth/admin');
    return null;
  }

  const users = JSON.parse(localStorage.getItem('rsp_users') || '[]');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Admin Dashboard</h1>
            <div>
              <button onClick={logout} className="py-1 px-3 bg-red-500 text-white rounded">Logout</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Users</h3>
              <div className="mt-2 text-2xl font-semibold">{users.length}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Courses</h3>
              <div className="mt-2 text-2xl font-semibold">{Object.keys(tutorials).length}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Settings</h3>
              <div className="mt-2 text-2xl font-semibold">—</div>
            </div>
          </div>

          <section className="mt-6">
            <h2 className="text-lg font-semibold mb-3">Courses (by section)</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(tutorials).map(([key, section]: any) => (
                <div key={key} className="bg-white dark:bg-gray-800 rounded shadow p-4">
                  <h3 className="font-medium">{section.title}</h3>
                  <div className="text-sm text-gray-500">Pages: {section.pages?.length || 0}</div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
