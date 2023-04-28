import React, { createContext } from "react";

export const ThemeContext = createContext(null);

const Mode = () => {
  return (
    <ThemeContext.Provider>
      <div>
        <div>BTN</div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Mode;
