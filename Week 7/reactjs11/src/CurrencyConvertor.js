import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();  // stops form from refreshing
    alert("Convert button clicked ✅");
    // 1 Euro = 90 INR (example rate)
    const converted = rupees / 90;
    setEuro(converted.toFixed(2));
  };

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc" }}>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount in ₹:
          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
          />
        </label>
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Converted Amount: €{euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
