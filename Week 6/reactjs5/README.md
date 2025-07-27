
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
<img width="1919" height="1011" alt="image" src="https://github.com/user-attachments/assets/bdff449b-9390-420a-afbe-f13e1c63695f" />


```bash
code .
```
<img width="1918" height="1017" alt="image" src="https://github.com/user-attachments/assets/7679740f-1bfd-4f5b-9caf-928e19ae74de" />


```bash
npm start
```
<img width="1919" height="1008" alt="image" src="https://github.com/user-attachments/assets/9465e724-27e1-4540-a085-a4d6b65ff463" />

---

## 🚀 Components Used

### ✅ `CohortDetails.js`

* Accepts props: `name`, `status`, `startDate`, `endDate`, `instructor`
* Styles the title in **green** if `status="Ongoing"` or **blue** if `"Completed"`
* Renders boxed layout using a CSS module

<img width="1919" height="1017" alt="image" src="https://github.com/user-attachments/assets/4b2cf1a6-ec2f-4bfa-9fff-14224b868b6b" />


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
<img width="1919" height="1022" alt="image" src="https://github.com/user-attachments/assets/4fc44fa2-6b95-44bb-a7e6-faf75292d6bb" />


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
<img width="1919" height="1017" alt="image" src="https://github.com/user-attachments/assets/0ad48eea-3200-4149-99f5-95c2b033318f" />


---

## ✅ Final Output Screenshot


<img width="1919" height="1016" alt="image" src="https://github.com/user-attachments/assets/9a92c9a5-be9a-4683-8f42-f9f1198c1ce9" />


---
