import React, { FC } from "react";
import Pizza from "../models/Pizza";

interface DisplayPizzaProps {
  pizzasList: Pizza[];
}

const DisplayPizza: FC<DisplayPizzaProps> = ({ pizzasList }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return pizza.title;
      })}
    </div>
  );
};

export default DisplayPizza;
