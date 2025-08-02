import React from "react";

function BookDetails() {
  const books = [
    { id: 1, title: "Learning React", author: "Alex Banks" },
    { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
    { id: 3, title: "JavaScript: The Good Parts", author: "Douglas Crockford" }
  ];

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h2>📘 Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} – <i>{book.author}</i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
