import React from 'react';
import { Header } from '@/components/Header';
import { ScrollMenu } from '@/components/ScrollMenu';
import '@/style/pages.css';

const Service: React.FC = () => {
  return (
    <div>
      <Header isDarkMode={false} toggleDarkMode={() => {}} toggleSidebar={() => {}} />
      <ScrollMenu />
      <main className="page-wrapper-min">
        <header className="page-hero">
          <h1>Terms of Service</h1>
          <p className="page-intro">These Terms govern your use of RSP Education. Please read them carefully before using our services.</p>
        </header>

        <article className="article">
          <h2>Acceptance of Terms</h2>
          <p>By accessing or using RSP Education, you agree to be bound by these Terms. If you disagree, do not use the services.</p>

          <h2>User Responsibilities</h2>
          <p>Users must follow all applicable laws and avoid posting prohibited content. We reserve the right to remove content that violates our policies.</p>

          <h2>Limitation of Liability</h2>
          <p>RSP Education provides content "as-is" and is not liable for indirect damages. For full details, consult legal counsel.</p>
        </article>
      </main>
    </div>
  );
};

export default Service;
