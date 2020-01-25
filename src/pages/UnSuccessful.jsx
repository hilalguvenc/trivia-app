import React, { useEffect } from "react";
import { readCookie, deleteCookie } from "@mehmetsefabalik/cookie-helper/dist";
import { Link } from "react-router-dom";

const UnSuccessful = () => {
  useEffect(() => {
    return () => deleteCookie("score");
  }, []);
  return (
    <div>
      <img
        className="unsuccessful-img"
        src={`https://appstickers-cdn.appadvice.com/651510680/833372507/3c5b04f1d6bfbc79c81a22a08bd3b1c2-4.png`}
        alt=""
      />
      <Link to="/">
        <button className="unsuccess-again">PLAY AGAIN</button>
      </Link>

      <div className="unsuccessful-content">
        <h6>GAME OVER</h6>
        <h6>Score {readCookie("score")}</h6>
      </div>
    </div>
  );
};
export default UnSuccessful;
