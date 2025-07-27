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

<img width="1485" height="761" alt="image" src="https://github.com/user-attachments/assets/08bdb7b8-99c3-465a-a98f-e5909931d762" />

<img width="1485" height="763" alt="image" src="https://github.com/user-attachments/assets/180bce5b-8bc6-4bed-b2f6-0357d5568b38" />


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
<img width="1906" height="1021" alt="image" src="https://github.com/user-attachments/assets/eb7b2028-6135-4c49-b046-e1e84198b24e" />


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
<img width="1917" height="1021" alt="image" src="https://github.com/user-attachments/assets/d5bbccc5-b729-498b-a314-cc63f73271e2" />


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
<img width="1915" height="1021" alt="image" src="https://github.com/user-attachments/assets/484137f8-42ba-4755-8213-d289fa2c07d0" />



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

<img width="1911" height="1019" alt="image" src="https://github.com/user-attachments/assets/d6b2510a-eb1f-4b29-b1b0-021896637a5c" />


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

<img width="1919" height="1017" alt="image" src="https://github.com/user-attachments/assets/36c458ce-0950-4742-85ca-15d8b2544fe5" />


---

