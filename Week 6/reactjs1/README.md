# ReactJS Hands-On Lab – Digital Nurture 4.0

This README contains the summary, steps performed, and proof of completion for the ReactJS Hands-on Lab as part of the Deep Skilling – .NET FSE track under Digital Nurture 4.0.

---

## ✅ Objective

> Create a React application and display a message:  
> **"Welcome to the first session of React"**

---

## 🛠️ Environment Setup

### ✅ Installed Tools

| Tool         | Version     |
|--------------|-------------|
| Node.js      | v18.x.x     |
| NPM          | v10.x.x     |
| Visual Studio Code | Latest |
| create-react-app | (via `npx`) |

### 🔍 Verification

```bash
node -v
npm -v
```

![alt text](Outputs\NodeNpmVersion.png)

---

## 🚀 React Project Setup

### 🔹 Created Project

```bash
npx create-react-app reactjs-1
```
![alt text](Outputs\WebpackComplied.png)
---

### 🔹 Navigated into the folder and opened in VS Code

```bash
cd reactjs-1
code .
```

![alt text](Outputs\VsCodeFolder.png)

---

### 🔹 Edited `App.js`

> File: `src/App.js`

```jsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to the first session of React</h1>
    </div>
  );
}

export default App;
```
![alt text](Outputs\AppJsEdited.png)
---

## ▶️ Application Output

### 🔹 Started the development server

```bash
npm start
```

> Opened in browser: `http://localhost:3000`

![alt text](Outputs\Browser.png)

---

## 📌 Summary

* Project Name: `reactjs-1`
* React App created using `create-react-app`
* Successfully displayed heading using JSX
* Lab objectives fully completed

---
