# ReactJS Hands-On Lab – Student Score Calculator (Function Component)

This project is part of **Digital Nurture 4.0 – Deep Skilling (.NET FSE)**.  
In this hands-on lab, we create a functional component that calculates and displays a student's average score, styled using external CSS.

---

## ✅ Objective

- Create a React project named **reactjs3**
- Build a **function component** named `CalculateScore`
- Accept values through **props**: `name`, `school`, `total`, `goal`
- Calculate **average score** from total
- Style the component using an external CSS file (`mystyle.css`)

---

## 🛠️ Prerequisites

| Tool                | Version     |
|---------------------|-------------|
| Node.js             | v18.x.x     |
| NPM                 | v10.x.x     |
| Visual Studio Code  | Latest      |
| create-react-app    | via `npx`   |

---

## 🚀 Project Setup

### 🔹 1. Create React App

```bash
npx create-react-app reactjs3
cd reactjs3
code .
```

<img width="1484" height="761" alt="image" src="https://github.com/user-attachments/assets/d68032e7-1466-4a6a-946e-3eb0c028b618" />

<img width="1484" height="761" alt="image" src="https://github.com/user-attachments/assets/b85e19c8-f7d8-4443-ab77-7b616d9ff6ce" />


---

### 🔹 2. Create Folders and Files

Inside `src/`, create:

* `Components/CalculateScore.js`
* `Stylesheets/mystyle.css`

<img width="1919" height="1018" alt="image" src="https://github.com/user-attachments/assets/fe8842ff-8cb3-424e-aba4-6e8c9c320da1" />


---

### 🔹 3. `CalculateScore.js` Code

```jsx
import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const average = props.total / 5;

  return (
    <div className="score-card">
      <h2>Student Score Details</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>School:</strong> {props.school}</p>
      <p><strong>Total Marks:</strong> {props.total}</p>
      <p><strong>Goal:</strong> {props.goal}</p>
      <p><strong>Average Score:</strong> {average}</p>
    </div>
  );
}

export default CalculateScore;
```

<img width="1917" height="1018" alt="image" src="https://github.com/user-attachments/assets/7e47317f-8cd0-4142-b09b-a906882c2b95" />


---

### 🔹 4. `mystyle.css` Code

```css
.score-card {
  background-color: #f0f8ff;
  padding: 20px;
  margin: 30px auto;
  width: 60%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.score-card h2 {
  color: #2e8b57;
}

.score-card p {
  font-size: 16px;
  color: #333;
  margin: 8px 0;
}
```

<img width="1919" height="1017" alt="image" src="https://github.com/user-attachments/assets/c51c5a00-1ac6-409b-b71b-cd3225860f63" />

---

### 🔹 5. `App.js` Code

```jsx
import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="Rahul"
        school="Sunrise High School"
        total={450}
        goal="Become a Software Engineer"
      />
    </div>
  );
}

export default App;
```

<img width="1919" height="1018" alt="image" src="https://github.com/user-attachments/assets/c30656b9-ff9b-40c1-8800-1c4fc4fa2e06" />


---

## ▶️ Output

When running the app using:

```bash
npm start
```

Browser opens at:

```
http://localhost:3000
```

✅ Shows:
<img width="1918" height="1015" alt="image" src="https://github.com/user-attachments/assets/b5e1f07b-15d5-4a17-8d50-3dfb715d38d1" />


---
