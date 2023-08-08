import { useState } from "react";
import "./App.css";
import { Login } from "./login";
import { Register } from "./register";
function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const formChange = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={formChange} />
      ) : (
        <Register onFormSwitch={formChange} />
      )}
    </div>
  );
}

export default App;
