import React, { useState, useEffect } from "react";
import Query from "../components/Query";
import { difficulties } from "../constants";
import { readCookie } from "@mehmetsefabalik/cookie-helper/dist";

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const getQuestions = async () => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&difficulty=${readCookie(
        "selectedDifficulty"
      )}&category=${readCookie("selectedCategory")}`
    );
    const data_q = await response.json();
    setQuestions(data_q.results);
    console.log(data_q.results);
  };
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <div>
      {questions.map(query => (
        <Query
          question={query.question}
          correct_answer={query.correct_answer}
          incorrect_answers={query.incorrect_answers}
        />
      ))}
    </div>
  );
};

export default Question;
