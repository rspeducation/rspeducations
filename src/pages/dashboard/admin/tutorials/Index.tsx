import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardHeader } from '@/components/layout/DashboardHeader';
import { ArrowLeft, Plus, BookOpen, FileText } from 'lucide-react';
import tutorials from '@/data/tutorials.json';

const TutorialManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <DashboardHeader title="Tutorial Management" showScrollMenu={true} />
        
        <main className="container mx-auto px-6 py-8">
          <div className="mb-6">
            <Link
              to="/dashboard/admin"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('list')}
                  className={`px-6 py-4 font-medium text-sm transition-colors ${
                    activeTab === 'list'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    All Tutorials
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('add')}
                  className={`px-6 py-4 font-medium text-sm transition-colors ${
                    activeTab === 'add'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add New Tutorial
                  </div>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === 'list' ? (
                <TutorialList />
              ) : (
                <AddTutorial />
              )}
            </div>
          </div>
        </main>
      </div>
  );
};

const TutorialList: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        All Tutorials by Section
      </h2>
      <div className="space-y-4">
        {Object.entries(tutorials).map(([sectionKey, section]: any) => (
          <div
            key={sectionKey}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
          >
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
              {section.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {section.pages
                .filter((page: any) => page.title && !page.head)
                .map((page: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded"
                  >
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {page.title}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AddTutorial: React.FC = () => {
  const [section, setSection] = useState('');
  const [title, setTitle] = useState('');
  const [path, setPath] = useState('');
  const [content, setContent] = useState('');

  const sections = Object.keys(tutorials);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement tutorial addition logic
    alert('Tutorial addition functionality coming soon!');
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Add New Tutorial
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Section
          </label>
          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            required
          >
            <option value="">Choose a section...</option>
            {sections.map((sec) => (
              <option key={sec} value={sec}>
                {sec}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tutorial Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Enter tutorial title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Path (URL)
          </label>
          <input
            type="text"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="/section/tutorial-name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tutorial Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Enter tutorial content (HTML/Markdown supported)"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Add Tutorial
          </button>
          <button
            type="button"
            onClick={() => {
              setSection('');
              setTitle('');
              setPath('');
              setContent('');
            }}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg font-medium transition-colors"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default TutorialManagement;

