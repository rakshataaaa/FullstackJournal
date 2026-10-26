import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import StudentDetails from "./components/StudentDetails";

function App() {
  const [theme, setTheme] = useState("light");
  const inputRef = useRef();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const focusInput=()=> {
    inputRef.current.focus();
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div
        style={{padding: "30px"}}
      >
        <h1>Student App</h1>

        <StudentDetails />

        <hr/>
        <H2>fOCUS INPUT </H2>
        <input type="text" ref={inputRef} placeholder="Enter somethimg"/>

        <button onclick={focusInput}>focus button</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;