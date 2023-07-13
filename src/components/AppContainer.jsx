import React, { useContext } from "react";

import Header from "./Header";
import ThemeContext from "../context/ThemeContext";

const AppContainer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme==='dark' ? "dark-theme" : ""}`}>
      <Header />
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          nostrum iste repudiandae, ipsum, voluptatem sequi rerum reiciendis
          vero, sed quidem ratione labore? Similique impedit natus dolor quia
          tempora eum necessitatibus.
        </h1>
      </div>
    </main>
  );
};

export default AppContainer;
