import React from 'react';
import { DashboardHeader } from '@/components/layout/DashboardHeader';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';
import { BookOpen, Clock, Award } from 'lucide-react';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <DashboardHeader title="My Dashboard" showScrollMenu={true} />
        
        <main className="container mx-auto px-6 py-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-semibold text-white">
                {(user?.email || 'U')[0].toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {user?.name || user?.email}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Member</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Enrolled Courses</h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">0</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">In Progress</h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">0</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-purple-600" />
                <div>
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Completed</h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">0</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">My Courses</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">No courses enrolled yet.</p>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default UserDashboard;
