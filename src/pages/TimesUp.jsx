import React, { useEffect } from "react";
import { readCookie, deleteCookie } from "@mehmetsefabalik/cookie-helper/dist";
import { Link } from "react-router-dom";

export default function() {
  useEffect(() => {
    return () => deleteCookie("score");
  }, []);
  return (
    <div>
      <img
        className="timesup-img"
        src={`https://appstickers-cdn.appadvice.com/651510680/833372507/b20d6bc610f12dcd008b3cd30b8b9cd6-2.png`}
        alt=""
      />
      <div className="timesup">
        <h6>Time's Up!</h6>
        <h6>Score {readCookie("score")}</h6>
      </div>
      <Link to="/">
        <button className="times-again">PLAY AGAIN</button>
      </Link>
    </div>
  );
}
