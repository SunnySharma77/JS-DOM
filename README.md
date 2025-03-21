# Project No-01: Number Color Coder Using DOM

## 📝 Project Title:
**Dynamic Number Generator with Color Coding (Even, Odd, Prime)**

---

## 💻 Technology Stack:
- **HTML**
- **CSS** (Internal Styling)
- **JavaScript** (DOM Manipulation)

---

## 🎯 Objective / Purpose:
The goal of this project is to practice **DOM manipulation** and **dynamic content generation** in JavaScript.  
The web app displays numbers from **1 to 100**, with each number color-coded based on these conditions:
- **Prime Numbers** → Red background
- **Even Numbers** → Green background
- **Odd Numbers** → Yellow background

---

## 🛠 Features & Functionalities:
- Dynamically creates **100 number blocks** using JavaScript
- Checks **prime numbers** using a custom function
- Applies **CSS styles dynamically** based on conditions
- Responsive grid layout with **Flexbox**
- Simple and easy-to-understand logic, perfect for beginners learning the **DOM**

---

## 📂 Folder / File Structure:
/number-color-coder/
│
├── index.html   (Main HTML File with embedded CSS and JS)
└── (No external JS or CSS for simplicity)

## 🧠 Core Logic / Flow:
1. A `<div>` container is created in HTML.
2. Using a **for loop** (1 to 100), numbers are dynamically generated.
3. For each number:
   - It is checked if it's a **prime number**.
   - If **prime** → **red background**.
   - Else if **even** → **green background**.
   - Else → **yellow background**.
4. Each number is added to the container using `appendChild`.
5. Styled with **Flexbox** for responsive wrapping.

---

## 📈 Project Status:
✔️ **Completed** — Fully functional with clean and minimal design

---

## 🚀 Future Scope / Improvements:
- Add input fields to generate custom ranges (1 to N)
- Add tooltips showing "Prime", "Even", or "Odd" on hover
- Add click event to highlight primes or perform other actions
- Use **Tailwind** or **Bootstrap** for better design
- Convert it into a **React component**

---

## 🧑‍💻 Key DOM Methods Used:
- `document.getElementById()`
- `document.createElement()`
- `element.classList.add()`
- `element.style.backgroundColor`
- `element.appendChild()`

---

## ✅ Learning Outcome:
- Mastery over basic **DOM manipulation**
- Dynamic HTML element creation
- Conditional styling in JavaScript
- Practical implementation of **prime number logic**
- Basics of **Flexbox layout**

### 📌 **License**
This project is open-source and available under the MIT License. Feel free to contribute!
