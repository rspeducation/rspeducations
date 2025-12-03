import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { ScrollMenu } from "@/components/ScrollMenu";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "@/style/home.css";
import "@/style/code-fix.css";



const Index: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="home-page">
      {/* ===== HEADER ===== */}
      <Header
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* ===== SCROLL MENU ===== */}
      <ScrollMenu />

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">RSP Educations</h1>
          <p className="hero-subtitle">Your First Online Learning Platform</p>
          <div className="search-bar">
            <input type="text" placeholder="Search for courses..." className="search-input" />
            <button className="search-btn">Search</button>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="floating-card card-1"></div>
          <div className="floating-card card-2"></div>
          <div className="floating-card card-3"></div>
        </div>
      </section>

      {/* ===== HTML COURSE SECTION ===== */}
      <section className="course-section section-light-blue" id="html">
        <div className="container">
          <div className="course-content">
            <div className="course-info">
              <h2 className="section-title">HTML</h2>
              <p className="section-description">HTML (HyperText Markup Language) is the foundation for building websites and web pages.</p>
              <div className="course-actions">
                <a href="/html" className="btn btn-primary">Learn HTML Practical Theory</a>
                <a href="/html/interview" className="btn btn-secondary">Prepare Interview Questions</a>
                <a href="/html/mock" className="btn btn-tertiary">Mock Interview with RSP AI</a>
              </div>
            </div>
            <div className="code-example">
              <div className="code-header">HTML Example:</div>
              <SyntaxHighlighter language="html" style={atomOneDark} customStyle={{ margin: 0, borderRadius: '0 0 8px 8px' }}>
                {`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a paragraph.</p>
</body>
</html>`}
              </SyntaxHighlighter>
            </div>

          </div>
        </div>
      </section>

      {/* ===== MICROSOFT AZURE SECTION ===== */}
      <section className="course-section section-light-peach">
        <div className="container">
          <div className="course-content">
            <div className="course-info">
              <h2 className="section-title">Microsoft Azure</h2>
              <p className="section-description">Explore and learn cloud computing services on one of the world's largest cloud platforms.</p>
              <div className="course-actions">
                <a href="/azure" className="btn btn-primary">Learn Azure Fundamentals</a>
                <a href="/azure/interview" className="btn btn-secondary">Prepare Interview Questions</a>
                <a href="/azure/mock" className="btn btn-tertiary">Mock Interview with RSP AI</a>
              </div>
            </div>
            <div className="code-example">
              <div className="code-header">Azure Index:</div>
              <SyntaxHighlighter language="bash" style={atomOneDark} customStyle={{ margin: 0, borderRadius: '0 0 8px 8px' }}>
                {`# Azure Index
Azure Networking
Azure Subnet
Azure Firewall
Azure Bastion
Azure Virtual Network
Azure Virtual Machine
Azure Virtual Machine Scall Set
Azure Avalabulity Set
Azure Load Balancer
Azure Key Vault
Azure Storage Account
Azure Blob Storage
Azure File Storage
Azure Queue Storage
Azure Table Storage`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CSS COURSE SECTION ===== */}
      <section className="course-section section-light-lavender" id="css">
        <div className="container">
          <div className="course-content">
            <div className="course-info">
              <h2 className="section-title">CSS</h2>
              <p className="section-description">With CSS, you can control the layout, colors, fonts, and overall visual presentation of your website.</p>
              <div className="course-actions">
                <a href="/css" className="btn btn-primary">Learn CSS Practical Theory</a>
                <a href="/css/interview" className="btn btn-secondary">Prepare Interview Questions</a>
                <a href="/css/mock" className="btn btn-tertiary">Mock Interview with RSP AI</a>
              </div>
            </div>
            <div className="code-example">
              <div className="code-header">CSS Example:</div>
              <SyntaxHighlighter language="css" style={atomOneDark} customStyle={{ margin: 0, borderRadius: '0 0 8px 8px' }}>
                {`h1 {
  color: #3498db;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ADDITIONAL COURSES GRID ===== */}
      <section className="courses-grid" id="courses">
        <div className="container">
          <h2 className="grid-title">Explore More Courses</h2>
          <div className="grid">
            <div className="course-card">
              <div className="card-icon">💻</div>
              <h3>Computer Basics</h3>
              <p>Learn the fundamentals of computers, including hardware, software, and basic operations.</p>
              <a href="/computer" className="btn btn-dark">Learn Computer Basics</a>
            </div>
            <div className="course-card">
              <div className="card-icon">📝</div>
              <h3>MS Word</h3>
              <p>Master Microsoft Word for creating and editing documents efficiently.</p>
              <a href="/msword" className="btn btn-dark">Learn MS Word</a>
            </div>
            <div className="course-card">
              <div className="card-icon">📊</div>
              <h3>MS PowerPoint</h3>
              <p>Design impactful presentations with Microsoft PowerPoint.</p>
              <a href="/mspowerpoint" className="btn btn-dark">Learn MS PowerPoint</a>
            </div>
            <div className="course-card">
              <div className="card-icon">🐍</div>
              <h3>Python</h3>
              <p>A beginner-friendly programming language used for web, data, and automation.</p>
              <a href="/python" className="btn btn-dark">Learn Python</a>
            </div>
            <div className="course-card">
              <div className="card-icon">☕</div>
              <h3>Java</h3>
              <p>A powerful programming language used for building robust applications.</p>
              <a href="/java" className="btn btn-dark">Learn Java</a>
            </div>
            <div className="course-card">
              <div className="card-icon">⚛️</div>
              <h3>React JS</h3>
              <p>Build fast and interactive user interfaces with React JavaScript library.</p>
              <a href="/javascript/reactjs" className="btn btn-dark">Learn React JS</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">About RSP Educations</h2>
            <p className="about-text">At RSP Educations, we believe in making quality education accessible to everyone. Our comprehensive online courses are designed to help you master in-demand skills, from web development to cloud computing. With expert instructors, hands-on projects, and AI-powered interview preparation, we're here to support your learning journey every step of the way.</p>
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Active Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Expert Courses</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>RSP Educations</h3>
              <p>Your First Online Learning Platform</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Popular Courses</h4>
              <ul>
                <li><a href="#html">HTML</a></li>
                <li><a href="#css">CSS</a></li>
                <li><a href="/javascript">JavaScript</a></li>
                <li><a href="#courses">More Courses</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>Email: info@rspeducations.com</p>
              <p>Phone: +91 1234567890</p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Index;
