import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import tutorials from "@/data/tutorials.json";

interface LeftSidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}



export const LeftSidebar: React.FC<LeftSidebarProps> = ({ isOpen, closeSidebar }) => {
  const location = useLocation();
  // use full URL so comparison with href works consistently
  const currentUrl = typeof window !== 'undefined' ? window.location.href : location.pathname + location.hash;

  // first path segment => "computer", "html", etc.
  let topicKey = location.pathname.split("/")[1];
  // Map 'azure' route to 'Azure Cloud' section in tutorials.json
  if (topicKey.toLowerCase() === "azure") topicKey = "Azure Cloud";
  const section = tutorials[topicKey as keyof typeof tutorials];

  useEffect(() => {
    // Close sidebar on outside click (mobile only)
    const handleOutsideClick = (e: MouseEvent) => {
      const sidebar = document.querySelector(".left-sidebar");
      const menuToggle = document.querySelector(".menu-toggle");

      if (
        isOpen &&
        sidebar &&
        !sidebar.contains(e.target as Node) &&
        !menuToggle?.contains(e.target as Node)
      ) {
        closeSidebar();
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, closeSidebar]);

  useEffect(() => {
    // Scroll to active item when component mounts
    const activeItem = document.querySelector('.left-sidebar-links li.active');
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }, []);

  if (!section) return null;

  // Precompute which heads should be marked active (if any child link matches current pathname)
  const pages = section.pages as any[];
  let currentHeadName = '';
  const activeHeads = new Set<string>();
  pages.forEach(p => {
    if (p.head) {
      currentHeadName = p.head;
      return;
    }
    if (!p.path) return;
    // match by pathname so client-side routing works
    if (location.pathname === p.path || location.pathname.startsWith(p.path)) {
      if (currentHeadName) activeHeads.add(currentHeadName);
    }
  });

  return (
    <div className={`left-sidebar ${isOpen ? 'active' : ''}`}>
      <ul className="left-sidebar-links">
        {section?.title ? (
          <li className="sidebar-section-title">
            <h2 className="sidebar-section-title-text">{section.title}</h2>
          </li>
        ) : null}
        {pages.map((link, index) => {
          // Render head entries
          if ((link as any).head) {
            const headText = (link as any).head as string;
            const isHeadActive = activeHeads.has(headText);
            return (
              <li key={`head-${index}`} className={isHeadActive ? 'head-active' : ''}>
                  <h3 className="sidebar-head">{headText}</h3>
                </li>
            );
          }

          // Render regular link entries
          const path = (link as any).path as string | undefined;
          const title = (link as any).title as string | undefined;
          const isActive = path ? (location.pathname === path || location.pathname.startsWith(path)) : false;

          return (
            <li key={index} className={isActive ? 'active' : ''}>
              {title && path ? (
                <Link to={path} className="heading">
                  {title}
                </Link>
              ) : (
                title ? <span className="heading">{title}</span> : null
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
