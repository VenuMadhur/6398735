import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="Rohit Sharma"
        school="Our Lady of Vailankanni High School"
        total={450}
        goal="Become a Cricketer"
      />
    </div>
  );
}

export default App;
