import React, { useEffect, useState } from "react";
import Food from "./Food/Food";
import Order from "./Food/Ordered/Order";
import { getStorage, removeStorge, storage } from "./Sotorage/storage";

const FoodContainer = () => {
  const [foods, setFoods] = useState([]);
  const [itemShow, setItemShow] = useState([]);
  useEffect(
    () =>
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=f")
        .then((res) => res.json())
        .then((data) => {
          setFoods(data.meals);
          const foodsItem = JSON.parse(getStorage());
          if (foodsItem) {
            setItemShow(foodsItem);
          }
        })
        .catch((error) => console.log(error)),
    []
  );

  const orderedFood = (item) => {
    // console.log(item);
    storage(item);
    const foodsItem = JSON.parse(getStorage());
    setItemShow(foodsItem);
    // console.log(foodsItem);
  };

  const removeFood = (item) => {
    const get = removeStorge(item);
    console.log(get);
    setItemShow(get);
  };

  return (
    <>
      <div className="row mx-4">
        <div className="my-3 col-8">
          <div className="row">
            {foods.map((food) => (
              <Food food={food} key={food.idMeal} orderedFood={orderedFood} />
            ))}
          </div>
        </div>
        <div className="col-4">
          <h3 className="text-success text-center my-3">Ordered Item</h3>
          {itemShow.map((item) => (
            <Order order={item} key={item.idMeal} removeFood={removeFood} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodContainer;
