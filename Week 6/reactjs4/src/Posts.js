import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Lifecycle method - runs after component is mounted
  componentDidMount() {
    this.loadPosts();
  }

  // Custom method to fetch data
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

  // Error boundary method
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
      <div>
        <h1>Blog Posts</h1>
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
