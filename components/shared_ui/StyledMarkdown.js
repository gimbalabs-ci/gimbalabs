import React from "react";
import ReactMarkdown from "react-markdown";

export default function StyledMarkdown({ children, color }) {
  const options = {
    BLUE: "md-blue",
    GREEN: "md-green",
    RED: "md-red",
    ORANGE: "md-orange",
  };
  const className = options[color];
  return (
    <div
      className={`gds-markdown ${className} max-w-16 mx-auto relative z-10  `}
    >
      <ReactMarkdown children={children} />
    </div>
  );
}
