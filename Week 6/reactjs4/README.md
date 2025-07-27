
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
![Project Created](Outputs\ProjectCreated.png)
![Project Created CLI](Outputs\ProjectCreated1.png)

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
![Posts View](Outputs\Posts.png)

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
![App View](Outputs\App.png)

4. **Run the App:**

```bash
npm start
```
![Webpack Compiled](Outputs\WebpackComplied.png)

---

## 🌐 Output Screenshot

### ✅ Blog Posts Rendered from API

![Browser Output](Outputs\Browser.png)
---
