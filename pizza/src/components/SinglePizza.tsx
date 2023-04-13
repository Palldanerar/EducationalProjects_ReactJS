import React, { FC } from "react";
import Pizza from "../models/Pizza";

interface SinglePizzaProps {
  pizza: Pizza;
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza }) => {
  return (
    <div className="pizza">
      <img
        src={`/images/${pizza.img}`}
        alt={`${pizza.title}`}
      />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} рублей</span>
      <div className="pizza-controls"></div>
    </div>
  );
};

export default SinglePizza;
