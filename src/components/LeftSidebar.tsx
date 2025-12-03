
import React, { useState, useEffect } from 'react';

interface LeftSidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ isOpen, closeSidebar }) => {
  const leftSidebarLinks = [
    { head: 'HTML Tutorials' },
    { title: 'HTML Introduction', href: 'https://rspeducation.in/html/' },
    { title: 'HTML Headings', href: 'https://rspeducation.in/html/tutorial_2.1_text_formatting' },
    { title: 'HTML Paragraphs', href: 'https://rspeducation.in/html/tutorial_2.1_text_formatting#Paragraphs' },
    { title: 'HTML Bold', href: 'https://rspeducation.in/html/tutorial_2.2_text_formatting' },
    { title: 'HTML Italic', href: 'https://rspeducation.in/html/tutorial_2.2_text_formatting#Italic' },
    { title: 'HTML Underline', href: 'https://rspeducation.in/html/tutorial_2.2_text_formatting#Underline' },

    { title: 'HTML Hyperlinks', href: 'https://rspeducation.in/html/tutorial_3_HTML_Links' },
    { title: 'HTML Images', href: 'https://rspeducation.in/html/tutorial_4_HTML_Images' },
    { title: 'Creating Tables', href: 'https://rspeducation.in/html/tutorial_5_HTML_Tables' },
    { title: 'Small Project', href: 'https://rspeducation.in/html/tutorial_5.1_HTML_Tables#Project' },

    { head: 'HTML Lists' },
    { title: 'HTML Ordered List', href: 'https://rspeducation.in/html/tutorial_6_HTML_Lists#Ordered' },
    { title: 'HTML Unordered List', href: 'https://rspeducation.in/html/tutorial_6_HTML_Lists#Unordered' },
    { title: 'HTML Definition List', href: 'https://rspeducation.in/html/tutorial_6_HTML_Lists#Definition' },
    { title: 'Project Using Lists', href: 'https://rspeducation.in/html/tutorial_6_HTML_Lists#Project' },
    
    { head: 'HTML Forms' },
    { title: 'HTML Forms', href: 'https://rspeducation.in/html/tutorial_7.1_HTML_Forms' },
    { title: 'HTML Input tag', href: 'https://rspeducation.in/html/tutorial_7.1_HTML_Forms#Input' },
    { title: 'HTML Label Tag', href: 'https://rspeducation.in/html/tutorial_7.1_HTML_Forms#Label' },
    { title: 'HTML Textarea Tag ', href: 'https://rspeducation.in/html/tutorial_7.1_HTML_Forms#Textarea' },
    { title: 'HTML Select Tag', href: 'https://rspeducation.in/html/tutorial_7.1_HTML_Forms#Select' },
    { title: 'HTML Button Tag', href: 'https://rspeducation.in/html/tutorial_7.1_HTML_Forms#Button' },

    { title: 'Form Structure', href: 'https://rspeducation.in/html/tutorial_7.2_HTML_Forms' },
    { title: 'Project Using Form', href: 'https://rspeducation.in/html/tutorial_7.2_HTML_Forms#Project' },
    
    { head: 'Semantic Elements' },
    { title: 'HTML Header, Nav', href: 'https://rspeducation.in/html/tutorial_8_Semantic_Elements' },
    { title: 'HTML Section, Footer', href: 'https://rspeducation.in/html/tutorial_8_Semantic_Elements#Section' },
    { title: 'HTML Aside, Article', href: 'https://rspeducation.in/html/tutorial_8.2_Semantic_Elements#Aside' },
    { title: 'HTML div, Main', href: 'https://rspeducation.in/html/tutorial_8.2_Semantic_Elements#div' },
    { title: 'Figure, Figcaption', href: 'https://rspeducation.in/html/tutorial_8.2_Semantic_Elements#Figure_and_Figcaption' },
    { title: 'Project for HTML Elements', href: 'https://rspeducation.in/html/tutorial_8.2_Semantic_Elements#Project' },
    
    { head: 'HTML Entities' },
    { title: 'Special Characters', href: 'https://rspeducation.in/html/tutorial_9_html_entities' },
    { title: 'Mathematical Symbols', href: 'https://rspeducation.in/html/tutorial_9.2_html_entities' },
    { title: 'HTML Emojis ', href: 'https://rspeducation.in/html/tutorial_9.3_HTML_Emojis' },

    { head: 'HTML Media' },
    { title: 'HTML Youtube', href: 'https://rspeducation.in/html/tutorial_10_frames_iframes' },
    { title: 'HTML Multimedia ', href: 'https://rspeducation.in/html/tutorial_11_HTML_Media' },
    { title: 'HTML Audio', href: 'https://rspeducation.in/html/tutorial_11_HTML_Media#Audio' },
    { title: 'HTML Video', href: 'https://rspeducation.in/html/tutorial_11_HTML_Media#Video' },
    
    { head: 'HTML Graphics' },
    { title: 'HTML Canvas Graphics', href: 'https://rspeducation.in/html/tutorial_12_HTML_Graphics' },
    { title: 'HTML SVG Graphics', href: 'https://rspeducation.in/html/tutorial_12_HTML_Graphics#SVG_Graphics' },

    { head: 'Semantics and SEO' },
    { title: 'Semantic HTML for SEO', href: 'https://rspeducation.in/html/tutorial_13_Semantics_and_SEO' },
    { title: 'Importance of Semantic Markup', href: 'https://rspeducation.in/html/tutorial_13_Semantics_and_SEO#Importance_of_Semantic_Markup' },
    { title: 'Document Metadata (Title, Meta Tags)', href: 'https://rspeducation.in/html/tutorial_14_HTML_Metadata' },
    { title: 'Charset and Viewport', href: 'https://rspeducation.in/html/tutorial_14_HTML_Metadata#Viewport' },
    { title: 'Project Using HTML ', href: 'https://rspeducation.in/html/tutorial_15_HTML_Project' },
  ];

  const currentUrl = window.location.href;

  useEffect(() => {
    // Close sidebar when clicking outside on mobile
    const handleOutsideClick = (e: MouseEvent) => {
      const sidebar = document.querySelector('.left-sidebar');
      const menuToggle = document.querySelector('.menu-toggle');
      
      if (isOpen && sidebar && !sidebar.contains(e.target as Node) && !menuToggle?.contains(e.target as Node)) {
        closeSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, closeSidebar]);

  useEffect(() => {
    // Scroll to active item when component mounts
    const activeItem = document.querySelector('.left-sidebar-links li.active');
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }, []);

  return (
    <div className={`left-sidebar ${isOpen ? 'active' : ''}`}>
      <div className="left-sidebar-links">
        {leftSidebarLinks.map((link, index) => (
          <li key={index} className={currentUrl === link.href ? 'active' : ''}>
            {link.head && (
              <h3 style={{ 
                display: 'block', 
                paddingLeft: '8px', 
                margin: '15px 10px 3px',
                color: '#282A35',
                fontSize: '16px',
                fontWeight: '600'
              }}>
                {link.head}
              </h3>
            )}
            
            {link.title && (
              <a href={link.href} className="heading">
                {link.title}
              </a>
            )}
          </li>
        ))}
      </div>
    </div>
  );
};
