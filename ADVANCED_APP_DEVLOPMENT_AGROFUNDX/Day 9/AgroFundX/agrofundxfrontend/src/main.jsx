import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Assets/Styles/index.css";
import { ThemeProvider } from "@material-tailwind/react";
import "./Assets/Styles/font.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
        <App />
    </ThemeProvider>
  </React.StrictMode>
);
