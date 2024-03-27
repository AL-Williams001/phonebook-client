import { useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import personService from "./services/personService";
import Phonebook from "./pages/Phonebook";

function App() {
  const [persons, setPersons] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedPhonebookUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      personService.setToken(user.token);
    }
  }, [navigate]);

  return (
    <div className="flex flex-col p-4">
      <Routes>
        <Route
          path="/"
          element={
            <Phonebook
              user={user}
              persons={persons}
              setPersons={setPersons}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginForm
              user={user}
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              setUser={setUser}
            />
          }
        />
        <Route path="/register" element={<RegisterForm user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
