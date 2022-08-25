import React, { useContext, useState, useEffect } from "react";
import "./ChangeTheme.css";

import ThemeContext from "../context/ThemeContext";

const ChangeTheme = () => {
  const [themeButton, setThemeButton] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const root = document.getElementById("root");
    if (theme === "dark") {
      root.style.backgroundColor = "#384047";
    } else {
      root.style.backgroundColor = "#ECF0F3";
    }
  }, [theme])
  

  const buttonHandler = () => {
    setThemeButton(!themeButton);
    themeButton ? setTheme("light") : setTheme("dark");
  };

  const botonDeshabilitado = (
    <div className="form-check form-switch">
      <input
        type="checkbox"
        className="form-check-input"
        role="switch"
        id="flexSwitchCheckDisabled"
        onClick={buttonHandler}
      />
      <label
        id="theme-label"
        className="form-check-label"
        htmlFor="flexSwitchCheckDisabled"
      >
        {theme}
      </label>
    </div>
  );

  const botonHabilitado = (
    <div className="form-check form-switch">
      <input
        type="checkbox"
        className="form-check-input"
        role="switch"
        id="flexSwitchCheckChecked"
        onClick={buttonHandler}
      />
      <label
        id="theme-label"
        className="form-check-label"
        htmlFor="flexSwitchCheckChecked"
      >
        {theme}
      </label>
    </div>
  );

  return <div>{themeButton ? botonHabilitado : botonDeshabilitado}</div>;
};

export default ChangeTheme;
