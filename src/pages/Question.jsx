import React, { useState, useEffect } from "react";
import Query from "../components/Query";
import { answerType } from "../constants";
import { readCookie } from "@mehmetsefabalik/cookie-helper/dist";
import { withRouter } from "react-router-dom";
import Timer from "../components/Timer";

const Question = props => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState({});
  const [score, setScore] = useState(0);

  const getQuestions = async () => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&type=multiple&difficulty=${readCookie(
        "selectedDifficulty"
      )}&category=${readCookie("selectedCategory")}`
    );
    const data_q = await response.json();
    setQuestions(data_q.results);
    setActiveQuestion(data_q.results[0]);
    console.log(data_q.results);
  };
  useEffect(() => {
    getQuestions();
  }, []);

  const onselectedAnswer = answer => {
    if (answer === answerType.correct) {
      console.log("correct answer");
      if (index === 9) {
        props.history.push("/success");
      }
      setIndex(index + 1);
      setActiveQuestion(questions[index + 1]);
    } else {
      console.log("wrong answer");
      props.history.push("/unsuccessful");
    }
  };
  useEffect(() => {
    if (!index) return;
    const score = readCookie("score");
    if (score) {
      setScore(score);
    }
  }, [index]);
  return (
    <div>
      <Timer index={index} />
      {activeQuestion &&
        Array.isArray(activeQuestion.incorrect_answers) &&
        activeQuestion.incorrect_answers.length && (
          <div className="score">
            Score: {score}
            <br />
            <div className="question-number">Question {index + 1} / 10</div>
            <Query
              onSelect={onselectedAnswer}
              question={activeQuestion.question}
              correct_answer={activeQuestion.correct_answer}
              incorrect_answers={activeQuestion.incorrect_answers}
            />
          </div>
        )}
    </div>
  );
};

export default withRouter(Question);
