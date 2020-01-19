import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Question from "./components/Question";
import "./styles/App.css";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/">
            <Welcome />
          </Route>
          <Route path="/question">
            <Question />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;

// const test = () => {
//   useEffect(() => {
//     getQuestions();
//   }, []);
//   const [questions, setQuestions] = useState([]);
//   const getQuestions = async () => {
//     const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${readCookie("selectedCategory")}`);
//     const data = await response.json();
//     setQuestions(data.results);
//     console.log(data);
//   };
//   return (
//     <div className="App">
//       <form>
//         {questions.map(quiz => (
//           <Question
//             category={quiz.category}
//             difficulty={quiz.difficulty}
//             question={quiz.question}
//           />
//         ))}
//       </form>
//     </div>
//   );
// };
