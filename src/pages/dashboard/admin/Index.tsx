import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Header } from '@/components/Header';
// import { DashboardHeader } from '@/components/layout/DashboardHeader';
import {
  Users,
  BookOpen,
  Award,
  Settings,
  GraduationCap,
  FileText,
  MessageSquare,
  Briefcase,
  Shield,
  Download,
  Plus
} from 'lucide-react';
import tutorials from '@/data/tutorials.json';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [users, setUsers] = useState<Array<{ name?: string; email: string; password?: string }>>([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('rsp_users') || '[]';
    setUsers(JSON.parse(storedUsers));
  }, []);

  // Protection is handled at route level

  const totalUsers = users.length;
  const totalCourses = Object.keys(tutorials).length;
  const totalTutorials = Object.values(tutorials).reduce((acc: number, section: any) => {
    return acc + (section.pages?.filter((p: any) => p.title && !p.head).length || 0);
  }, 0);

  const dashboardCards = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      label: "Total Students",
      value: totalUsers.toString(),
      color: "blue"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-green-600" />,
      label: "Active Courses",
      value: totalCourses.toString(),
      color: "green"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      label: "Total Tutorials",
      value: totalTutorials.toString(),
      color: "purple"
    },

  ];

  const managementCards = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Manage Students",
      description: "Add students and manage student accounts",
      buttonText: "Manage Students",
      link: "/dashboard/admin/students",
      color: "blue"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "Course Content",
      description: "Batch-wise course materials management",
      buttonText: "Manage Content",
      link: "/dashboard/admin/courses",
      color: "green"
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Tutorial Management",
      description: "Add and manage tutorials tutorial-wise",
      buttonText: "Add Tutorial",
      link: "/dashboard/admin/tutorials",
      color: "purple"
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Add Placements",
      description: "View and manage placement details",
      buttonText: "Manage Placements",
      link: "/dashboard/admin/placements",
      color: "yellow"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
      title: "Interviews",
      description: "View and manage student interviews",
      buttonText: "Manage Interviews",
      link: "/dashboard/admin/interviews",
      color: "indigo"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Admin Manage",
      description: "Add Admins and manage admin accounts",
      buttonText: "Manage Admins",
      link: "/dashboard/admin/admins",
      color: "red"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-teal-600" />,
      title: "User Queries",
      description: "View and manage enrollment requests",
      buttonText: "View Queries",
      link: "/dashboard/admin/queries",
      color: "teal"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-pink-600" />,
      title: "Resume Builder",
      description: "Professional resume templates for your career",
      buttonText: "Manage Templates",
      link: "/dashboard/admin/resume-builder",
      color: "pink"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      {/* keep your existing DashboardHeader */}
      {/* <DashboardHeader title="RSP Education Admin" showScrollMenu={true} /> */}

      <Header />
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Top stats row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-5 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                  {card.icon}
                </div>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                {card.label}
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Management cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {managementCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                  {card.icon}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 leading-snug">
                {card.description}
              </p>

              <Link
                to={card.link}
                className="inline-flex items-center justify-center w-full rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 py-2.5"
              >
                {card.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* Students Joins card */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Students Joins
                </h3>
                <p className="text-sm text-gray-500">
                  Students Joins form details
                </p>
              </div>
            </div>

            <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2.5">
              <Download className="w-4 h-4" />
              Download in Excel
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
