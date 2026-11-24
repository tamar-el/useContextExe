
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`content ${theme}`}>
      <div className="card">
        <h2>Card One</h2>
        <p>This is the first card.</p>
      </div>

      <div className="card">
        <h2>Card Two</h2>
        <p>This is the second card.</p>
      </div>

      <div className="card">
        <h2>Card Three</h2>
        <p>This is the third card.</p>
      </div>
    </main>
  );
}

export default Content;
