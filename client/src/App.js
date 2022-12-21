import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>User API's Fetched 🐶</p>

        <div className="user-container">
          {typeof backendData.users === "undefined" ? (
            <p>Loading</p>
          ) : (
            backendData.users.map((user, i) => <p key={i}>{user}</p>)
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
