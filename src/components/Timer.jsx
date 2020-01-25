import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { readCookie, createCookie } from "@mehmetsefabalik/cookie-helper/dist";

const Timer = props => {
  const [seconds, setSeconds] = useState(15);
  let interval;
  useEffect(() => {
    if (seconds > 0) {
      interval = setInterval(async () => {
        console.log("in interval");
        setSeconds(seconds - 1);
      }, 1000);
      return () => {
        console.log("clearing interval");
        clearInterval(interval);
      };
    }
  }, [seconds]);
  useEffect(() => {
    if (!props.index) return;
    const score = readCookie("score");
    console.log("score", score);
    if (score) {
      console.log("if score", Number(score) + Number(seconds));
      createCookie("score", Number(score) + Number(seconds));
    } else {
      console.log("else", seconds);
      createCookie("score", seconds);
    }
    setSeconds(15);
  }, [props.index]);

  return (
    <div>
      {seconds === 0 ? (
        props.history.push("/timesup")
      ) : (
        <div>
          <h1 className="timer-content">
            {" "}
            Time Remaining :{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        </div>
      )}
    </div>
  );
};

export default withRouter(Timer);
