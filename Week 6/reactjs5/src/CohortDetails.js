import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ name, status, startDate, endDate, instructor }) {
  const headingStyle = {
    color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{name}</h3>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Start Date:</strong> {startDate}</p>
      <p><strong>End Date:</strong> {endDate}</p>
      <p><strong>Instructor:</strong> {instructor}</p>
    </div>
  );
}

export default CohortDetails;
