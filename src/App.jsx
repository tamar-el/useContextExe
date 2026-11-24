
import { UserContext } from "./context/UserContext";
import UserProfile from "./components/UserProfile";
import UserGreeting from "./components/UserGreeting";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const userName = "Tamar";

  return (
    <ThemeProvider>
      <UserContext.Provider value={userName}>
        <div className="app">

          {/* User Context */}
          <h1>My App</h1>
          <UserProfile />
          <UserGreeting />

          {/* Theme Context */}
          <Header />
          <Content />
          <Footer />

        </div>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
