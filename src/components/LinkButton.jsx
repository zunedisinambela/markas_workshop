import React from "react";

const LinkButton = ({ url, text }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary text-white w-full text-lg py-3 mb-4 transform transition-transform hover:scale-105"
    >
      {text}
    </a>
  );
};

export default LinkButton;
