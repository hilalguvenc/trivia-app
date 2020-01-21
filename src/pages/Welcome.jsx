import React, { Fragment, useState, useEffect } from "react";
import { createCookie, readCookie } from "@mehmetsefabalik/cookie-helper";
import { difficulties } from "../constants";
import Dropdown from "../components/Dropdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Welcome = () => {
  const [categories, setCategories] = useState([]);

  const onCategorySelect = categoryId => {
    createCookie("selectedCategory", categoryId);
    console.log("clicked category: id: ", categoryId);
  };

  const onDifficultySelect = difficultyId => {
    console.log("clicked difficulty: id: ", difficultyId);
    createCookie("selectedDifficulty", difficultyId);
  };

  const getCategories = async () => {
    const response = await fetch(`https://opentdb.com/api_category.php`);
    const data = await response.json();
    if (data && Array.isArray(data.trivia_categories)) {
      setCategories(data.trivia_categories);
      console.log(data.trivia_categories);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Fragment>
      <Dropdown items={categories} onSelect={onCategorySelect} />
      <hr />

      <Dropdown items={difficulties} onSelect={onDifficultySelect} />
      <Link to="/question">
        <button className="btn btn-warning btn-lg  font-weight-bold col-12 text-light z-index:1">
          GET STARTED
        </button>
      </Link>
      <img
        className=" img"
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO4au_qTfFmfxlN0R4IXCYP1UjFaW9oI5t6tHUruMlBybdq4ZkQA&s`}
      />
      <img
        className=" img-1"
        src={`https://www.triviacrack2.com/img/chara-pop.png`}
      />
    </Fragment>
  );
};

export default Welcome;
