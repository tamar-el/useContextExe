
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`themed-button ${theme}`}
      onClick={toggleTheme}
    >
      Change Theme
    </button>
  );
}

export default ThemedButton;
