import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <h2>Cohorts Details</h2>

      <CohortDetails
        name="ReactJS Training Cohort"
        status="Ongoing"
        startDate="24th July 2025"
        endDate="15th August 2025"
        instructor="John Doe"
      />

      <CohortDetails
        name=".NET Training Cohort"
        status="Completed"
        startDate="1st May 2025"
        endDate="30th June 2025"
        instructor="Jane Smith"
      />
    </div>
  );
}

export default App;
