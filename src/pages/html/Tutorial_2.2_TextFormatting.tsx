import React from "react";
import { MainContent } from "@/components/MainContent";

const TextFormatting: React.FC = () => {
  const copyCode = (codeId: string) => {
    const codeElement = document.getElementById(codeId);
    if (codeElement) {
      const text = codeElement.textContent || "";
      navigator.clipboard.writeText(text).then(() => {
        alert("Code copied to clipboard!");
      });
    }
  };

  return (
    <MainContent>
      <h1>Text Formatting in HTML:</h1>
      <p>Text formatting is a crucial aspect of web development...</p>

      {/* Example Section */}
      <div className="examples-section">
        <div className="rsp-example-title">
          <span>Example</span>
          <button onClick={() => copyCode("code1")}>
            <span className="code-copy-btn" title="Copy the Code">
              <i className="fa-regular fa-clipboard"></i> Copy
            </span>
          </button>
        </div>
        <pre id="code1">
          <code className="hljs language-html">{`<h1>This is Heading 1</h1>`}</code>
        </pre>
        <a
          href="https://rsp-code-editor.rspeducation.in/html/2-1"
          target="_blank"
          className="try-editor-btn"
        >
          Try On Editor
        </a>
      </div>
    </MainContent>
  );
};

export default TextFormatting;
