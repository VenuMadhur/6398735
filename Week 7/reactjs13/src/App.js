import React, { useState } from "react";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(false);
  const [showCourses, setShowCourses] = useState(true);

  let bookContent;
  if (showBooks) {
    bookContent = <BookDetails />;
  } else {
    bookContent = <p>📘 No Books Available</p>;
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>ReactJS13 – Blogger App</h1>

      {bookContent}

      {showBlogs ? <BlogDetails /> : <p>📝 Blogs are hidden</p>}

      {showCourses && <CourseDetails />}

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setShowBooks(!showBooks)}>Toggle Books</button>
        <button onClick={() => setShowBlogs(!showBlogs)}>Toggle Blogs</button>
        <button onClick={() => setShowCourses(!showCourses)}>Toggle Courses</button>
      </div>
    </div>
  );
}

export default App;
