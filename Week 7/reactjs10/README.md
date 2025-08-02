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
<img width="1919" height="1010" alt="image" src="https://github.com/user-attachments/assets/997b42c2-233c-4756-8708-f8bb43f822a3" />



```bash
cd reactjs10
npm start
```
<img width="1919" height="1019" alt="image" src="https://github.com/user-attachments/assets/68c70b58-c82b-4721-aaeb-899a989ec893" />




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

<img width="1918" height="1021" alt="image" src="https://github.com/user-attachments/assets/8824e6d3-129a-4f31-9885-66beda24af87" />


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


  <img width="1919" height="1014" alt="image" src="https://github.com/user-attachments/assets/4169bc2c-645a-4fdf-8c49-eb5ad8088b49" />

  <img width="1919" height="1009" alt="image" src="https://github.com/user-attachments/assets/dfe8dc0d-df31-4cb7-9f38-41d687dd82fc" />


---
