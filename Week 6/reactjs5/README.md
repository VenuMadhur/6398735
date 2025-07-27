
---

````markdown
# ReactJS Hands-on Lab 5 - Cohort Details Component

This ReactJS project demonstrates how to build a **reusable component** for displaying training cohort information using props and CSS modules.

---

## 📁 Project Setup

### 🔨 1. Create a New React App

```bash
npx create-react-app reactjs5
cd reactjs5
````
![Project Created](Outputs\ProjectCreated.png)

```bash
code .
```
![VS Code Folder Structure](Outputs\VsCodeFolder.png)

```bash
npm start
```
![Webpack Compiled](Outputs\WebpackCompiled.png)
---

## 🚀 Components Used

### ✅ `CohortDetails.js`

* Accepts props: `name`, `status`, `startDate`, `endDate`, `instructor`
* Styles the title in **green** if `status="Ongoing"` or **blue** if `"Completed"`
* Renders boxed layout using a CSS module

![CohortDetails.js](Outputs\CohortDetails.png)

### ✅ `CohortDetails.module.css`

```css
.box {
  width: 300px;
  display: inline-block;
  margin: 10px;
  padding: 15px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  font-family: Arial, sans-serif;
}
```
![CSS Module](Outputs\CohortDetails.module.png)

### ✅ `App.js`

```jsx
import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <h2>Cohorts Details</h2>

      <CohortDetails
        name="ReactJS Training Cohort"
        status="Ongoing"
        startDate="24th July 2025"
        endDate="15th August 2025"
        instructor="John Doe"
      />

      <CohortDetails
        name=".NET Training Cohort"
        status="Completed"
        startDate="1st May 2025"
        endDate="30th June 2025"
        instructor="Jane Smith"
      />
    </div>
  );
}

export default App;
```
![App.js](Outputs\App.png)

---

## ✅ Final Output Screenshot


![Browser Output](Outputs\Browser.png)

---
