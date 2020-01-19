import React from "react";

const Question = ({ category, difficulty, question }) =>  (
    <div>
      <h1>{category}</h1>
      <h1>{difficulty}</h1>
      <p>{question}</p>
    </div>
)

export default Question;
