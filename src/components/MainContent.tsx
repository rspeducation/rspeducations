import React from "react";

interface MainContentProps {
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div className="main-content">
      <article>{children}</article>
    </div>
  );
};
export default MainContent;

// DEV: If you navigate to a page that uses PageLayout as a parent route,
// the nested route's element will render via <Outlet /> into this component.