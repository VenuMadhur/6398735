import React from "react";

function OfficeList() {
  // ✅ Step A: Create array of office objects
const offices = [
  { 
    name: "WeWork", 
    rent: 55000, 
    address: "Bangalore, India", 
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" 
  },
  { 
    name: "Regus", 
    rent: 65000, 
    address: "Hyderabad, India", 
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36" 
  },
  { 
    name: "SmartWorks", 
    rent: 45000, 
    address: "Pune, India", 
    img: "https://d14ooopotgqw8y.cloudfront.net/uploads/3_3461bff2bf.webp" 
  }
];

  // ✅ Step B: Loop using map() and apply inline style
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>🏢 Office Space Rental</h1>
      {offices.map((office, index) => (
        <div 
          key={index} 
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          <h2>{office.name}</h2>
          <img src={office.img} alt={office.name} width="200" />
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default OfficeList;
