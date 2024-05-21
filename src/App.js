import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/nourlivia/"
            target="_blank"
            rel="noreferrer"
          >
            Nour Ghallale
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/nourgm10/nours-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
