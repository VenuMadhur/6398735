
# ReactJS4 - Lifecycle Methods Demo (componentDidMount & componentDidCatch)

## 📌 Objective

This project demonstrates usage of class-based components with React lifecycle methods:

- `componentDidMount()` – for fetching blog post data from an API.
- `componentDidCatch()` – for handling rendering errors.
- Displaying dynamic content using React State.

---

## 📁 Project Structure

````

reactjs4/
├── node\_modules/
├── public/
├── src/
│   ├── App.js
│   ├── Posts.js
│   ├── index.js
├── package.json
└── README.md

````

---

## ⚙️ Steps to Run

1. **Create the Project:**

```bash
npx create-react-app reactjs4
cd reactjs4
```
<img width="1915" height="816" alt="image" src="https://github.com/user-attachments/assets/6894acf3-77b5-4f85-80c7-a0cc484c25dd" />

<img width="1919" height="542" alt="image" src="https://github.com/user-attachments/assets/2c9615d1-39e7-4069-b200-8d7d208b9b83" />


2. **Create `Posts.js` in `src/` folder:**

```jsx
import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        this.setState({ hasError: true });
      });
  }

  componentDidCatch(error, info) {
    alert('An error occurred while loading posts.');
    console.error(error, info);
  }

  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <p>Something went wrong.</p>;
    }

    return (
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Blog Posts</h1>
        {posts.slice(0, 6).map((post) => (
          <div key={post.id} style={{ marginBottom: '40px' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
```
<img width="1919" height="1020" alt="image" src="https://github.com/user-attachments/assets/29d66ba0-1411-46bb-b133-773d333c1b85" />


3. **Edit `App.js`:**

```jsx
import React from 'react';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
```
<img width="1918" height="1021" alt="image" src="https://github.com/user-attachments/assets/a29c1540-7466-4f2f-99eb-ac7e8951831e" />


4. **Run the App:**

```bash
npm start
```
<img width="1903" height="983" alt="image" src="https://github.com/user-attachments/assets/8535960e-dc99-423a-82da-9e6e266f3c46" />


---

## 🌐 Output Screenshot

### ✅ Blog Posts Rendered from API

<img width="1919" height="1016" alt="image" src="https://github.com/user-attachments/assets/27d0851f-5043-4f3e-9260-7fcda29e61cc" />

---
