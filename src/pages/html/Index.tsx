import React, { useEffect } from "react";
import { MainContent } from "@/components/MainContent";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

const HtmlIndex: React.FC = () => {
  const htmlExample = `<!DOCTYPE html>
<html>
  <head>
    <title>HTML Example</title>
  </head>
  <body>
    <h1>Hello, HTML!</h1>
    <p>This is a simple HTML document.</p>
  </body>
</html>`;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <MainContent>
      <section>

      <h1>Introduction to HTML</h1>
      <p>
        HTML (HyperText Markup Language) is the standard language for creating web pages and web applications. It describes the structure of a web page using markup.
      </p>
      <h2>Example</h2>
      <pre>
        <code className="language-html">{htmlExample}</code>
      </pre>

      </section>
    </MainContent>
  );
};

export default HtmlIndex;
