import React, { useEffect } from "react";
import { readCookie, deleteCookie } from "@mehmetsefabalik/cookie-helper/dist";
import { Link } from "react-router-dom";

const Success = () => {
  useEffect(() => {
    return () => deleteCookie("score");
  }, []);
  return (
    <div>
      <img
        className="success-img"
        src={`https://miro.medium.com/max/800/1*pdf-LFyD_ZB60ZCoA6E0-Q.png`}
        alt=""
      />
      <div className="success-content">
        Congratulations!
        <h6>Total Score: {readCookie("score")}</h6>
      </div>
      <Link to="/">
        <button className="play-again">PLAY AGAIN</button>
      </Link>
    </div>
  );
};
export default Success;
