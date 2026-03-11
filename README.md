# 🧠 React Quiz App

A simple and interactive **Quiz Application built with React** that allows users to answer multiple-choice questions and track their score in real time.

The application fetches quiz questions from a local API and manages state using **React's `useReducer` hook**. It also includes a **countdown timer** for the quiz.

---

## 🚀 Features

* 📚 Dynamic quiz questions loaded from an API
* ⏱ Countdown timer for the quiz
* 🧮 Automatic score calculation
* 📊 Progress bar for questions and points
* 🏆 High score tracking
* 🔄 Restart quiz functionality
* ⚡ Efficient state management using ** `useReducer` **
* 🧩 Modular React component structure

---

## 🛠 Technologies Used

* **React**
* **JavaScript (ES6+)**
* **React Hooks**

  * `useReducer`
  * `useEffect`
* **CSS**
* **JSON Server** (for mock API)

---

## 📂 Project Structure

```text
src
│
├── components
│   ├── Header.jsx
│   ├── StartScreen.jsx
│   ├── Loader.jsx
│   ├── Error.jsx
│   ├── Question.jsx
│   ├── Progress.jsx
│   ├── NextButton.jsx
│   ├── Footer.jsx
│   ├── Timer.jsx
│   └── FinishScreen.jsx
│
├── App.jsx
└── main.jsx
```

**Note:**
All UI components are stored inside the **`components` directory**, while **`main.jsx`** is the application entry point.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/MOhmmadMazid/react-quiz-app.git
```

Navigate into the project folder:

```bash
cd react-quiz-app
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Application

Start the React development server:

```bash
npm run dev
```

Start the JSON Server for quiz data:

```bash
npx json-server --watch data/questions.json --port 9000
```

Application runs at:

```
http://localhost:5173
```

API endpoint:

```
http://localhost:9000/questions
```

---

## 🧠 How the Quiz Works

1. The app fetches quiz questions from a **local JSON API**.
2. The user starts the quiz from the **Start Screen**.
3. Each correct answer adds points to the score.
4. A timer counts down during the quiz.
5. The quiz finishes when:

   * All questions are answered, or
   * Time runs out.
6. The final score and **high score** are displayed.

---

## ⏱ Timer Logic

Quiz time is calculated using:

```
Total Time = Number of Questions × Time per Question
```

Example:

```
10 Questions × 30 seconds = 300 seconds
```

---

## 🔄 State Management

The app uses **React `useReducer`** to manage complex state including:

* quiz status (`loading`, `ready`, `active`, `finish`)
* current question index
* selected answer
* score and high score
* remaining time

---

## 🔮 Future Improvements

* Save high score in **localStorage**
* Add quiz categories
* Add difficulty levels
* Improve UI animations
* Deploy the application online

---

## 👨‍💻 Author

Built using **React** for learning and practicing modern React concepts.

---

## 📄 License

This project is licensed under the **MIT License**.

## Created By

Mohmmad Mazid(full stack developer)
