import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { RightSidebar } from "@/components/RightSidebar";
import { ScrollMenu } from "@/components/ScrollMenu";
import { UpArrow } from "@/components/UpArrow";
import { MainContent } from "@/components/MainContent"; // ✅ use this
import { Outlet } from "react-router-dom";
import "@/index.css";

interface PageLayoutProps {
  children?: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowUpArrow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "true") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", (!isDarkMode).toString());
  };

  return (
    <div className="page-layout">
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <ScrollMenu />

      <div className="main-layout">
        <LeftSidebar
          isOpen={isSidebarOpen}
          closeSidebar={() => setIsSidebarOpen(false)}
        />

        {/* ✅ Use MainContent: render children or nested route via Outlet */}
        <MainContent>
          {children}
          {/* nested routes (when layout is used as parent in Routes) will render here */}
          <Outlet />
        </MainContent>

        <RightSidebar />
      </div>

      <Footer />
      <UpArrow show={showUpArrow} />
    </div>
  );
};
