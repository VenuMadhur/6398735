import React from "react";

function CourseDetails() {
  const courses = [
    { id: 1, course: "ReactJS", trainer: "Anita" },
    { id: 2, course: "NodeJS", trainer: "Rahul" }
  ];

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h2>🎓 Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.course} – <i>{course.trainer}</i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
