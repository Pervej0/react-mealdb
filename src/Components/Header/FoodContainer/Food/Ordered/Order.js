import React from "react";

const Order = (props) => {
  const { strMeal, strMealThumb } = props.order;

  return (
    <div className="my-3 border p-3">
      <div className="row align-items-center">
        <div className="col-4">
          <img className="img-fluid" src={strMealThumb} alt="" />
        </div>
        <div className="col-8">
          <h4>{strMeal}</h4>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.removeFood(props.order);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
