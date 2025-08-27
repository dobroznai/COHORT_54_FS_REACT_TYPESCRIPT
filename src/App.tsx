import GlobalStyles from "styles/GlobalStyles";

//Lessons
// import Lesson_06 from "lessons/Lesson_06/Lesson_06";
// import Lesson_07 from "lessons/Lesson_07/Lesson_07";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";

//Homeworks
// import Homework_06 from "homeworks/Homework_06/Homework_06";
// import Homework_06 from "lessons/Lesson_07/Homework_06/Homework_06";
// import Homework_07 from "homeworks/Homework_07/Homework_07";
import "./App.css";

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      {/* // lessons */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      <Lesson_08 />
      {/* // homeworks */}
      {/* <Homework_06 /> */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
    </div>
  );
}

export default App;
