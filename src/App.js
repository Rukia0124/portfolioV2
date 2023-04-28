import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Landing from "./pages/Landing";
import Projet from "./pages/Projet";
import React, { createContext, useState } from "react";
import { BulbOutlined } from "@ant-design/icons";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div onClick={toggleTheme}>
          <BulbOutlined
            className="mode"
            style={{ color: theme === "dark" ? "yellow" : "black" }}
          />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/projets/:id" element={<Projet />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
