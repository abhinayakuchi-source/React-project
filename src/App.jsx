import Student from "./component1/Student";
import StudentMarks from "./component2/StudentMarks";
import Login from "./component3/Login";

function App() {
  return (
    <div>
      <Student
        name="Abhinaya"
        rollNo="101"
        course="Artificial Intelligence and Data Science"
        college="Prathyusha Engineering College"
      />

      <StudentMarks
        name="Abhinaya"
        subject="Java"
      />

      <Login />
    </div>
  );
}

export default App;