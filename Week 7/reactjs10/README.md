# 📄 README – ReactJS HOL (Week 10)

## 📌 Project Name
**ReactJS10 – Office Space Rental App**

---

## 🎯 Objective
This hands-on lab demonstrates ReactJS concepts, including:  
✅ JSX syntax for creating elements & rendering to the DOM  
✅ Using JavaScript expressions in JSX  
✅ Inline CSS styling  
✅ Conditional styling based on rent value  
✅ Looping through arrays with map()

---

## 🏗 Steps Performed

1️⃣ **Created React App**  
```bash
npx create-react-app reactjs10
```
![alt text](Outputs/CreateApp.png)


```bash
cd reactjs10
npm start
```
![alt text](Outputs/NpmStart.png)



2️⃣ **Cleaned up boilerplate**  
- Deleted: `App.css`, `logo.svg`, `App.test.js`, `setupTests.js`, `reportWebVitals.js`  
- Removed unused imports from `App.js` and `index.js`

3️⃣ **Created Components**
- `OfficeList.js` – Uses **JSX** to create headings, images, and office details.  
- Displays **Rent** in **Red** if `< 60,000` and **Green** if `>= 60,000` using **inline CSS**.

4️⃣ **App Integration**
- Imported `OfficeList` into `App.js` to display all office listings.

---

## 📂 Project Structure
```
reactjs10/
 ├── node_modules/
 ├── public/
 ├── src/
 │   ├── App.js
 │   ├── index.js
 │   ├── OfficeList.js
 │   ├── index.css
 ├── package.json
 └── README.md
```

![alt text](Outputs/ProjectFolder.png)

---

## ✅ How to Run
1. Install dependencies:  
```bash
npm install
```
2. Start the app:  
```bash
npm start
```
3. Open browser at **http://localhost:3000**.

---

## 📊 Output Expectations
- Heading: 🏢 Office Space Rental
- List of 3 office spaces:
  - Shows **image**, **name**, **address**, and **rent**
- Rent coloring logic:
  - Rent < 60,000 → **Red**
  - Rent ≥ 60,000 → **Green**


  ![alt text](Outputs/Output.png)
  ![alt text](Outputs/Output1.png)

---
