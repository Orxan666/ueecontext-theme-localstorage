import React, { useState, createContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setTheme(storedTheme);
  }, []);


  const toggleTheme = () => {
    const newTheme = theme==="dark" ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    console.log("isledi");
  };



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
