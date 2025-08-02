import React, { useState } from "react";
import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>ReactJS12 – Ticket Booking App</h1>
      
      {/* Conditional Rendering */}
      {isLoggedIn ? <UserPage /> : <GuestPage />}
      
      {/* Toggle Buttons */}
      {isLoggedIn ? (
        <button onClick={handleLogout} style={{ background: "red", color: "white", padding: "10px", marginTop: "10px" }}>
          Logout
        </button>
      ) : (
        <button onClick={handleLogin} style={{ background: "blue", color: "white", padding: "10px", marginTop: "10px" }}>
          Login
        </button>
      )}
    </div>
  );
}

export default App;
