import React from 'react';
import { Link } from 'react-router-dom';

export default function UserSidebar() {
  return (
    <aside className="w-56 bg-white dark:bg-gray-800 border-r min-h-screen p-4">
      <div className="mb-6 font-bold">My Menu</div>
      <nav className="flex flex-col gap-2">
        <Link to="/dashboard/user" className="py-2 px-3 rounded hover:bg-slate-100">Home</Link>
        <Link to="/dashboard/user/courses" className="py-2 px-3 rounded hover:bg-slate-100">My Courses</Link>
        <Link to="/dashboard/user/settings" className="py-2 px-3 rounded hover:bg-slate-100">Settings</Link>
      </nav>
    </aside>
  );
}
