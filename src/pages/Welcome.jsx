import React, { Fragment, useState, useEffect } from "react";
import { createCookie } from "@mehmetsefabalik/cookie-helper";
import { difficulties } from "../constants";
import Dropdown from "../components/Dropdown";
import { Link } from "react-router-dom";
import trivia from "../styles/trivia.png";

const Welcome = () => {
  const [categories, setCategories] = useState([]);

  const onCategorySelect = categoryId => {
    createCookie("selectedCategory", categoryId);
  };

  const onDifficultySelect = difficultyId => {
    createCookie("selectedDifficulty", difficultyId);
  };

  const getCategories = async () => {
    const response = await fetch(`https://opentdb.com/api_category.php`);
    const data = await response.json();
    if (data && Array.isArray(data.trivia_categories)) {
      setCategories(data.trivia_categories);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Fragment>
      <div className="row justify-content-center ">
        <Dropdown items={categories} onSelect={onCategorySelect} />
      </div>
      <hr />
      <div className="row justify-content-center">
        <Dropdown items={difficulties} onSelect={onDifficultySelect} />
      </div>
      <Link to="/question">
        <div className="button">
          <div className="row justify-content-center">
            <button className=" col-lg-3 btn btn-warning btn-lg font-weight-bold text-light ">
              PLAY
            </button>
          </div>
        </div>
      </Link>
      <img className="trivia-img" src={trivia} alt="" />
    </Fragment>
  );
};

export default Welcome;
