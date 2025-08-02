import React from "react";

function UserPage() {
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", marginBottom: "20px" }}>
      <h2>Welcome Back! 🛫</h2>
      <p>You can now book your tickets.</p>
      <button style={{ background: "green", color: "white", padding: "10px", border: "none" }}>
        Book Ticket
      </button>
    </div>
  );
}

export default UserPage;
