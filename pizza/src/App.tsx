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

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(
      pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };

  const deletePizza = (id: number) => {
    setPizzasList(pizzasList.filter((pizza) => pizza.id !== id));
  };

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Пиццерия</span>
        <PizzaForm addPizza={addPizza} />
        <DisplayPizza
          pizzasList={pizzasList}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        />
      </div>
    </div>
  );
};

export default App;
