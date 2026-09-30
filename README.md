# React Hands-On 1–3

A structured React learning project demonstrating fundamental React concepts through three practical hands-on exercises: Student Profile, Student Marks, and Login Form.

## 🚀 Live Demo

🌐 Live Website:
https://abhinayakuchi-source.github.io/React-project/

📂 GitHub Repository:
https://github.com/abhinayakuchi-source/React-project

---

## 📌 Project Overview

This project was developed as part of hands-on React learning and practice.

The application combines three React exercises into a single project. Each exercise focuses on a different fundamental React concept and is organized into a separate component folder for better project structure and maintainability.

### Included Hands-On Exercises

1. Hands-On 1 – Student Profile Using Props
2. Hands-On 2 – Student Marks Using Props + State
3. Hands-On 3 – Login Form Using State

The project demonstrates how React components can receive data through props, manage changing information using state, respond to user interactions, and handle form inputs.

---

## 🛠️ Technologies Used

- React
- JavaScript (ES6)
- Vite
- HTML5
- CSS3
- Git
- GitHub
- GitHub Pages

---

## 📂 Project Structure
```text
latest/
├── public/
├── src/
│   ├── component1/
│   │   └── Student.jsx
│   ├── component2/
│   │   └── StudentMarks.jsx
│   ├── component3/
│   │   └── Login.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md
```
- component1/Student.jsx – Student profile component using props
- component2/StudentMarks.jsx – Student marks component using props and state
- component3/Login.jsx – Login form component using state
- App.jsx – Main application component that renders all three exercises
- App.css – Main application styling
- index.css – Global styling
- main.jsx – React application entry point
- vite.config.js – Vite configuration for the project and GitHub Pages deployment

---

# 🎯 Hands-On 1 – Student Profile Using Props

## Objective

Create a reusable Student component and pass student information from the parent component using props.

## Concepts Demonstrated

- React functional components
- Props
- JSX
- Reusable components
- Passing data from parent to child

## Student Information

The component displays:

- Student Name
- Roll Number
- Course
- College

## Example Output

Student Profile

Name: Rahul
Roll No: 101
Course: BCA
College: ABC College

## How It Works

The Student component receives student information through props.

The parent component passes the following values:

- name
- rollNo
- course
- college

The component displays the received information in a structured student profile card.

---

# 🎯 Hands-On 2 – Student Marks Using Props + State

## Objective

Combine props and state in a React component to create an interactive student marks interface.

## Concepts Demonstrated

- Props
- State
- useState
- Event handling
- Dynamic UI updates
- Functional components

## Features

- Student name received through props
- Subject received through props
- Marks stored using React state
- Increase Marks button
- Decrease Marks button
- Dynamic marks update

## Example Output

Student Marks

Student Name: Rahul
Subject: Java
Marks: 50

[ Increase Marks ] [ Decrease Marks ]

## How It Works

The StudentMarks component receives the student name and subject through props.

The marks value is stored using React state with an initial value of 50.

When the Increase Marks button is clicked, the marks value increases.

When the Decrease Marks button is clicked, the marks value decreases.

The displayed marks are automatically updated whenever the state changes.

---

# 🎯 Hands-On 3 – Login Form Using State

## Objective

Create a login form using React state to store and handle values entered by the user.

## Concepts Demonstrated

- State
- useState
- Controlled inputs
- Form handling
- Event handling
- Conditional logic
- Basic validation

## Features

- Username input field
- Password input field
- Login button
- Username state management
- Password state management
- Basic login validation

## Login Behavior

When the Login button is clicked:

If both username and password are entered:

Login Successful

If either username or password is empty:

Please enter username and password

## How It Works

The Login component uses React state to store the values entered into the username and password fields.

The input fields update their corresponding state values whenever the user enters or changes information.

When the Login button is clicked, the component checks whether both fields contain values and displays the appropriate message.

---

# 🎨 User Interface & Design

The project uses custom CSS to create a modern and visually appealing interface.

### Design Features

- Gradient background
- Modern card-based layout
- Rounded corners
- Soft shadows
- Hover effects
- Styled buttons
- Styled input fields
- Input focus effects
- Responsive layout
- Mobile-friendly spacing

Each hands-on exercise is displayed as a separate card while remaining part of the same React application.

---

# 🧠 React Concepts Practiced

## Components

The application is divided into separate functional components to keep the project organized and reusable.

## Props

Props are used to pass student information from the parent component to child components.

## State

State is used to store values that can change during user interaction.

## useState

The useState Hook is used in the Student Marks and Login exercises to manage dynamic data.

## Event Handling

React event handlers are used to respond to button clicks and input changes.

## Controlled Inputs

The username and password fields are controlled using React state.

## Conditional Logic

The Login component checks the entered values and displays the appropriate message based on the input.

---

# 🔄 Application Flow

The overall application follows a component-based structure:

React Application
        |
        v
     App.jsx
        |
   +----+----+
   |    |    |
   v    v    v
Student  StudentMarks  Login
   |         |           |
   v         v           v
 Props   Props + State  State
              |
              v
       User Interaction

---

# 📚 Learning Outcomes

Through this project, the following React fundamentals were practiced:

- Creating React functional components
- Understanding JSX
- Passing data using props
- Understanding component state
- Using the useState Hook
- Handling button click events
- Handling input change events
- Creating controlled form inputs
- Implementing basic form validation
- Updating the UI dynamically using state
- Organizing components into separate folders
- Building a React project using Vite
- Running a React development server
- Creating a production build
- Deploying a React application using GitHub Pages

---

# ⚙️ How to Run the Project Locally

## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

## 1. Clone the Repository

git clone https://github.com/abhinayakuchi-source/React-project.git

## 2. Navigate to the Project Folder

cd React-project

## 3. Install Dependencies

npm install

## 4. Start the Development Server

npm run dev

## 5. Open the Application

Open the local URL displayed in the terminal by Vite.

---

# 🌐 Deployment

The project is deployed using GitHub Pages.

The Vite base path is configured for the GitHub repository, and the production build is published through the gh-pages branch.

## Deployment Command

npm run deploy

## Live Application

https://abhinayakuchi-source.github.io/React-project/

---

# 📊 Project Status

| Component | Status |
|---|---|
| Hands-On 1 – Student Profile | ✅ Completed |
| Hands-On 2 – Student Marks | ✅ Completed |
| Hands-On 3 – Login Form | ✅ Completed |
| Component Organization | ✅ Completed |
| Responsive Styling | ✅ Completed |
| GitHub Repository | ✅ Available |
| GitHub Pages Deployment | ✅ Live |

---

# 👩‍💻 Author

## Abhinaya Kuchi

B.Tech – Artificial Intelligence & Data Science

GitHub:
https://github.com/abhinayakuchi-source

---

# ⭐ Project Highlights

- Three React hands-on exercises combined into one project
- Practical demonstration of Props and State
- useState Hook implementation
- Interactive student marks management
- State-based login form handling
- Separate component organization
- Responsive and modern user interface
- Built using Vite
- Hosted using GitHub Pages

---

# 📄 Project Status

This project was created for educational purposes to practice and demonstrate fundamental React concepts.

The three hands-on exercises have been completed and deployed successfully.

✅ React Project Completed  
✅ GitHub Repository Available  
✅ Live Demo Available
