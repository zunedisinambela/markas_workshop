import React from "react";
import LinkButton from "./components/LinkButton";

function App() {
  const links = [
    { url: "https://github.com/zunedisinambela", text: "GitHub" },
    { url: "https://www.linkedin.com/in/zunedi-suprianto-sinambela-b85b01130/", text: "LinkedIn" },
    { url: "https://twitter.com/arjunsinambela1", text: "Twitter" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white px-96 size-full">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 text-gray-800">
        <div className="text-center mb-6">
          <img
            src="https://loremflickr.com/640/480/animals"
            alt="profile"
            className="rounded-full mx-auto w-24 h-24"
          />
          <h1 className="text-2xl font-bold mt-4">Zunedi</h1>
          <p className="text-gray-500">Your Tagline</p>
        </div>
        <div>
          {links.map((link, index) => (
            <LinkButton key={index} url={link.url} text={link.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
