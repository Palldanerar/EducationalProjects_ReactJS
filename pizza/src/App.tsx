import React, { FC } from "react";
import "./App.css";
import PizzaForm from "./components/PizzaForm";

const App: FC = () => {
  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Пиццерия</span>
        <PizzaForm />
      </div>
    </div>
  );
};

export default App;
