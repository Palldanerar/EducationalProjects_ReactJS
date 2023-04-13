import React, { FC, useState } from "react";
import "./App.css";
import PizzaForm from "./components/PizzaForm";
import Pizza from "./models/Pizza";
import DisplayPizza from "./components/DisplayPizza";

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Пиццерия</span>
        <PizzaForm addPizza={addPizza} />
        <DisplayPizza pizzasList={pizzasList} />
      </div>
    </div>
  );
};

export default App;
