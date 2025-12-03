import React from "react";
import "@/style/home.css";

interface ContentSectionProps {
  title: string;
  description: string;
  exampleCode: string;
  links: { label: string; href: string }[];
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  exampleCode,
  links,
}) => {
  return (
    <section className="content-section">
      {/* Left Side: Text + Buttons */}
      <div className="content-text">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="content-links">
          {links.map((link, idx) => (
            <a key={idx} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right Side: Code Block */}
      <div className="code-block">
        <pre>{exampleCode}</pre>
      </div>
    </section>
  );
};
