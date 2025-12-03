import React from 'react';
import { Header } from '@/components/Header';
import { ScrollMenu } from '@/components/ScrollMenu';
import '@/style/pages.css';

const Copyright: React.FC = () => {
  return (
    <div>
      <Header isDarkMode={false} toggleDarkMode={() => {}} toggleSidebar={() => {}} />
      <ScrollMenu />
      <main className="page-wrapper-min">
        <header className="page-hero">
          <h1>Copyright Policy</h1>
          <p className="page-intro">This page explains how RSP Education handles copyright claims and protects intellectual property.</p>
        </header>

        <article className="article">
          <h2>Our Commitment to Copyright Protection</h2>
          <p>At RSP Education, we respect the intellectual property rights of others and expect our users to do the same. This Copyright Policy outlines our approach to copyright protection, the procedures for reporting copyright infringement, and the actions we may take in response to such reports.</p>

          <h3>1. Ownership of Content</h3>
          <p>All content published on the RSP Education platform is either owned by RSP Education or used with permission from the copyright holder. Unauthorized use, reproduction, or distribution of any content from our platform is strictly prohibited.</p>

          <h3>2. User-Generated Content</h3>
          <p>Users may submit content to the platform. By submitting content, you affirm that you own the rights to the content or have obtained all necessary permissions. You grant RSP Education a non-exclusive, royalty-free license to use, display, and distribute your content on our platform.</p>

          <h3>3. Reporting Copyright Infringement</h3>
          <p>If you believe that your copyrighted work has been used on our platform in a way that constitutes copyright infringement, please notify us with details including a description of the work, URL, and contact information.</p>

          <h3>4. Response to Infringement Notices</h3>
          <p>Upon receiving a valid notice, we will investigate and take appropriate action, which may include removing or disabling access to the allegedly infringing material.</p>

          <h3>5. Counter-Notification</h3>
          <p>If you believe your content was removed in error, you may submit a counter-notification. Provide identification of the material, your contact information, and a statement under penalty of perjury.</p>

          <h3>6. Contact</h3>
          <p>Send notices to: <a href="mailto:copyright@rsp-education.com">copyright@rsp-education.com</a></p>
        </article>
      </main>
    </div>
  );
};

export default Copyright;
