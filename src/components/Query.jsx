import React from "react";
import { answerType } from "../constants";

const Query = ({ question, correct_answer, incorrect_answers, onSelect }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const getCorrectAnswer = () => ({
    html: (
      <div key={correct_answer}>
        <br />
        <button
          className="btn btn-secondary col-sm-4"
          onClick={() => onSelect(answerType.correct)}
          dangerouslySetInnerHTML={{ __html: correct_answer }}
        ></button>
        <br />
      </div>
    )
  });

  const getIncorrectAnswers = () => {
    return incorrect_answers.map(incorrect_answer => {
      return {
        html: (
          <div key={incorrect_answer}>
            <br />
            <button
              className="btn btn-secondary col-sm-4"
              onClick={() => onSelect(answerType.wrong)}
              dangerouslySetInnerHTML={{ __html: incorrect_answer }}
            ></button>
            <br />
          </div>
        )
      };
    });
  };

  const getAnswers = () => {
    const rand = getRandomInt(3);

    const correctAnswer = getCorrectAnswer();

    const answers = getIncorrectAnswers();
    console.log("rand", rand);
    console.log("correctAnswer", correctAnswer);
    console.log("incorrectAnswers", answers);

    answers.splice(rand, 0, correctAnswer);
    return answers;
  };

  return (
    <div>
      <img
        className="question-img"
        src={`https://appstickers-cdn.appadvice.com/651510680/833372507/0ef2d08540c3ad11c36777eb8b045ed6-9.png`}
        alt=""
      />
      <div className="text-center">
        <div className="form-group">
          <li
            className="form-control"
            dangerouslySetInnerHTML={{ __html: question }}
          ></li>
        </div>
        {Array.isArray(incorrect_answers) &&
          incorrect_answers.length &&
          getAnswers().map(answer => answer.html)}
      </div>
    </div>
  );
};
export default Query;
