import React, { useState } from "react";
import { MainContent } from "@/components/MainContent";
import { Link } from "react-router-dom";
import tutorials from "@/data/tutorials.json";

const sampleScreens = [
  '/placeholder.svg',
  '/Images/rspeducation.png',
  '/placeholder.svg',
];

const Quiz: React.FC = () => {
  const questions = [
    { q: 'What is IaaS?', a: ['Infrastructure as a Service', 'Interface as a Service', 'Internal as a Service'], correct: 0 },
    { q: 'Which service is PaaS?', a: ['Azure App Service', 'Azure Blob Storage', 'Azure VNet'], correct: 0 },
  ];
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const select = (i: number) => {
    const next = [...answers];
    next[idx] = i;
    setAnswers(next);
  };

  const next = () => {
    if (idx < questions.length - 1) setIdx((s) => s + 1);
    else setShowResult(true);
  };

  const prev = () => setIdx((s) => Math.max(0, s - 1));

  if (showResult) {
    const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0);
    return (
      <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
        <h3 className="text-lg font-semibold">Quiz result</h3>
        <p className="mt-2">Score: {score} / {questions.length}</p>
        <button className="mt-3 px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-sm" onClick={() => { setAnswers([]); setIdx(0); setShowResult(false); }}>Retry</button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
      <h3 className="text-lg font-semibold">Quick Quiz</h3>
      <div className="mt-3">
        <div className="font-medium">{questions[idx].q}</div>
        <div className="mt-2 grid gap-2">
          {questions[idx].a.map((opt, i) => (
            <button key={i} onClick={() => select(i)} className={`text-left p-2 rounded border ${answers[idx] === i ? 'border-blue-500' : 'border-transparent'}`}>
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button onClick={prev} className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-sm">Preview</button>
        <button onClick={next} className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm">Next</button>
      </div>
    </div>
  );
};

const ScreenshotCarousel: React.FC = () => {
  const [i, setI] = useState(0);
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
      <h3 className="text-lg font-semibold">Screenshots</h3>
      <div className="mt-3">
        <img src={sampleScreens[i]} alt={`screenshot-${i}`} className="w-full h-44 object-contain rounded" />
        <div className="mt-2 flex items-center justify-between">
          <div className="text-sm text-gray-500">{i + 1} / {sampleScreens.length}</div>
          <div className="flex gap-2">
            <button onClick={() => setI((s) => Math.max(0, s - 1))} className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-sm">Prev</button>
            <button onClick={() => setI((s) => Math.min(sampleScreens.length - 1, s + 1))} className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AzureIndex: React.FC = () => {
  const section = (tutorials as any)["Azure Cloud"] as any;

  return (
    <MainContent>
      <h1 className="page-title">{section?.title ?? 'Azure Cloud Tutorials'}</h1>
      <p className="page-subtitle">Learn Azure fundamentals and advanced topics.</p>

      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded shadow p-6 flex gap-4">
            <img src="/Images/rspeducation.png" alt="azure" className="w-48 h-32 object-contain rounded" />
            <div>
              <h2 className="text-xl font-semibold">How to learn Azure</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Follow guided tutorials, try hands-on labs, and practice with mock interviews.</p>

              <ul className="mt-3 list-disc pl-5 text-sm">
                <li>Step-by-step course modules</li>
                <li>Hands-on labs and projects</li>
                <li>Mock interviews and quizzes</li>
                <li>Certificates and progress tracking</li>
              </ul>

              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm">Next</button>
                <button className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-sm">Preview</button>
                <button className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white text-sm">Mock Interview</button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <ScreenshotCarousel />
            <Quiz />
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
            <h3 className="font-semibold">Course Options</h3>
            <div className="mt-2 text-sm text-gray-600">Select modules, track progress, and download materials.</div>
            <div className="mt-3 space-y-2">
              <button className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-sm">Download PDFs</button>
              <button className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-sm">Practice Tests</button>
              <button className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-sm">Join Live Session</button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
            <h3 className="font-semibold">Mock Interview</h3>
            <p className="mt-2 text-sm text-gray-600">Start a short mock interview to evaluate readiness.</p>
            <button className="mt-3 px-3 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm">Start Mock Interview</button>
          </div>
        </aside>
      </div>

      {/* topics list (kept commented for now) */}
      {/* {section && (
        <div>
          <h2 className="mb-2">Topics</h2>
          <ul>
            {section.pages.map((p: any, i: number) => (
              p.title ? (
                <li key={i}>
                  <Link to={p.path}>{p.title}</Link>
                </li>
              ) : null
            ))}
          </ul>
        </div>
      )} */}
    </MainContent>
  );
};

export default AzureIndex;
