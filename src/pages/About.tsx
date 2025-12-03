import React from 'react';
import { Header } from '@/components/Header';
import { ScrollMenu } from '@/components/ScrollMenu';
import '@/style/pages.css';

const About: React.FC = () => {
  return (
    <div>
      <Header isDarkMode={false} toggleDarkMode={() => {}} toggleSidebar={() => {}} />
      <ScrollMenu />
      <main className="page-wrapper-min">
        <header className="page-hero">
          <h1>About RSP Education</h1>
          <p className="page-intro">RSP Education is committed to providing accessible, high-quality learning resources for students and educators worldwide.</p>
        </header>

        <article className="article">
          <h2>Our Mission</h2>
          <p>To bridge the gap between traditional education and modern learning needs by delivering practical, up-to-date resources and tools.</p>

          <h2>What We Offer</h2>
          <p>Interactive lessons, practice quizzes, video tutorials, downloadable study materials, and an engaged learning community.</p>

          <h2>Community & Accessibility</h2>
          <p>We prioritize inclusivity and accessibility. Our platform is designed to be easy to use across devices and for learners with different needs.</p>
        </article>
      </main>
    </div>
  );
};

export default About;
