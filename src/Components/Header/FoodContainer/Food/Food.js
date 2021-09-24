import React from "react";

const Food = (props) => {
  const { strMeal, strMealThumb, strInstructions } = props.food;

  return (
    <div className="col-4 p-2">
      <div className="border rounded">
        <div className="border-bottom p-2 rounded">
          <img className="img-fluid" src={strMealThumb} alt="" />
        </div>
        <div className="p-2">
          <h4>{strMeal}</h4>
          <p>{strInstructions.slice(0, 90)}</p>
          <button
            className="btn btn-success"
            onClick={() => props.orderedFood(props.food)}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
