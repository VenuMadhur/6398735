# ReactJS Hands-On Lab – Component-Based Student Management Portal

This project is part of the **Digital Nurture 4.0 – Deep Skilling (.NET FSE)** track.  
In this hands-on lab, we demonstrate the use of **React class components** by building a simple Student Management Portal interface.

---

## ✅ Objective

- Create a React project named **reactjs2**
- Build and render 3 class-based components: `Home`, `About`, `Contact`
- Display different messages from each component inside the main app

---

## 🛠️ Prerequisites

| Tool                | Version     |
|---------------------|-------------|
| Node.js             | v18.x.x     |
| NPM                 | v10.x.x     |
| Visual Studio Code  | Latest      |
| create-react-app    | Via `npx`   |

---

## 🚀 Project Setup

### 🔹 1. Create Project

```bash
npx create-react-app reactjs2
cd reactjs2
code .
```

https://github.com/VenuMadhur/6398735/blob/main/Week%206/reactjs2/Outputs/ProjectCreated.png
https://github.com/VenuMadhur/6398735/blob/main/Week%206/reactjs2/Outputs/ProjectCreated1.png


---

### 🔹 2. Create Folder & Component Files

Create a folder:

```
src/Components/
```

Then add the following files:

#### `Home.js`

```jsx
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to the Home page of Student Management Portal</h2>
      </div>
    );
  }
}

export default Home;
```
![Home Component](Outputs\Home.png)

#### `About.js`

```jsx
import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to the About page of the Student Management Portal</h2>
      </div>
    );
  }
}

export default About;
```
![About Component](Outputs\About.png)

#### `Contact.js`

```jsx
import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to the Contact page of the Student Management Portal</h2>
      </div>
    );
  }
}

export default Contact;
```
![About Component](Outputs\Contact.png)

---

### 🔹 3. Update `App.js`

```jsx
import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
```

![App Component](Outputs\App.png)

---

### 🔹 4. Run the App

```bash
npm start
```

The app will launch at:

```
http://localhost:3000
```

## ✅ Output

![Browser Output](Outputs\Browser.png)

---

