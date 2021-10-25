import React from "react";
import ReactMarkdown from "react-markdown";

export default function StyledMarkdown({ children }) {
  return (
    <div className="gds-markdown max-w-16 mx-auto relative z-10  ">
      <ReactMarkdown children={children} />
    </div>
  );
}
