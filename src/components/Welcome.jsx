import React, { Fragment, useState, useEffect } from "react";
import {createCookie, readCookie} from "@mehmetsefabalik/cookie-helper";
import CategoryBox from "./CategoryBox";

const Welcome = ({ }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

  const getCategories = async () => {
    const response = await fetch(`https://opentdb.com/api_category.php`);
    const data = await response.json();
    if (data && Array.isArray(data.trivia_categories)) {
        createCookie("selectedCategory", data.trivia_categories[0].id)
        setCategories(data.trivia_categories);
        console.log(data.trivia_categories);
        console.log("selected category cookıe " ,readCookie("selectedCategory"));
    }
  };

    return <Fragment>
        {
            categories.map((category) => {
                return <CategoryBox key={category.id} id={category.id} name={category.name} />
            })
        }
    </Fragment>
}

export default Welcome;
