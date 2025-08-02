import React from "react";

function GuestPage() {
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", marginBottom: "20px" }}>
      <h2>Welcome Guest ✈️</h2>
      <p>Browse available flights below:</p>
      <ul>
        <li>Indigo – BLR ➡️ DEL – ₹4,500</li>
        <li>Air India – HYD ➡️ BOM – ₹5,200</li>
        <li>SpiceJet – MAA ➡️ BLR – ₹3,800</li>
      </ul>
      <p><i>Please login to book your ticket.</i></p>
    </div>
  );
}

export default GuestPage;
