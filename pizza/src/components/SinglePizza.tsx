import React, { FC, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Pizza from "../models/Pizza";
import EditPizzaForm from "./EditPizzaForm";

interface SinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({
  pizza,
  updatePizza,
  deletePizza,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="pizza">
      <img
        src={`../../public/images/${pizza.img}`}
        alt={`${pizza.title}`}
      />
      <h2>{pizza.title}</h2>
      <span>{pizza.price}$</span>
      <div className="pizza-controls">
        <AiFillEdit onClick={handleToggleEdit} />
        <AiFillDelete onClick={() => deletePizza(pizza.id)} />
      </div>
      {edit ? (
        <EditPizzaForm
          updatePizza={updatePizza}
          data={pizza}
          handleToggleEdit={handleToggleEdit}
        />
      ) : null}
    </div>
  );
};

export default SinglePizza;
