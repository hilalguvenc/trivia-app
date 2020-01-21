import React, { useState, useEffect } from "react";

const Query = ({ question,correct_answer, incorrect_answers}) => {
  return (
    <div>
      <div >
        <h1>{question}</h1>
        <h1>{correct_answer}</h1>
        <h1>{incorrect_answers}</h1>
      </div>
    </div>
  );
};
export default Query;
