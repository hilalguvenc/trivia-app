import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { readCookie, createCookie } from "@mehmetsefabalik/cookie-helper/dist";

const Timer = props => {
  const [seconds, setSeconds] = useState(15);
  let interval;
  useEffect(() => {
    if (seconds > 0) {
      interval = setInterval(async () => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [seconds]);
  useEffect(() => {
    if (!props.index) return;
    const score = readCookie("score");
    if (score) {
      createCookie("score", Number(score) + Number(seconds));
    } else {
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
