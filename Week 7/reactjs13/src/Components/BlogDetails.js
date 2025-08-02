import React from "react";

function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Basics", writer: "John Doe" },
    { id: 2, title: "Advanced JSX", writer: "Jane Smith" }
  ];

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h2>📝 Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            {blog.title} – <i>{blog.writer}</i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
