import React from 'react';
import { Header } from '@/components/Header';
import { ScrollMenu } from '@/components/ScrollMenu';
import '@/style/pages.css';

const Privacy: React.FC = () => {
  return (
    <div>
      <Header isDarkMode={false} toggleDarkMode={() => {}} toggleSidebar={() => {}} />
      <ScrollMenu />
      <main className="page-wrapper-min">
        <header className="page-hero">
          <h1>Privacy Policy</h1>
          <p className="page-intro">Your privacy matters. This page explains how RSP Education collects, uses, and protects personal information.</p>
        </header>

        <article className="article">
          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, such as account registration details, feedback, and submissions. We also collect usage data automatically through cookies and analytics tools to improve our services.</p>

          <h2>How We Use Information</h2>
          <p>Information is used to deliver the services you request, personalize content, analyze and improve the site, and communicate updates. We do not sell personal data to third parties.</p>

          <h2>Security</h2>
          <p>We implement reasonable security measures to protect user data. However, no system is completely secure; we recommend using strong, unique passwords and enabling any available account protections.</p>

          <h2>Contact</h2>
          <p>For privacy inquiries, email us at <a href="mailto:privacy@rspeducation.in">privacy@rspeducation.in</a>.</p>
        </article>
      </main>
    </div>
  );
};

export default Privacy;
