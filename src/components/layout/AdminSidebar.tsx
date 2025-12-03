import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r min-h-screen p-4">
      <div className="mb-6 font-bold">Admin</div>
      <nav className="flex flex-col gap-2">
        <Link to="/dashboard/admin" className="py-2 px-3 rounded hover:bg-slate-100">Overview</Link>
        <Link to="/dashboard/admin/courses" className="py-2 px-3 rounded hover:bg-slate-100">Courses</Link>
        <Link to="/dashboard/admin/users" className="py-2 px-3 rounded hover:bg-slate-100">Users</Link>
        <Link to="/dashboard/admin/settings" className="py-2 px-3 rounded hover:bg-slate-100">Settings</Link>
      </nav>
    </aside>
  );
}
