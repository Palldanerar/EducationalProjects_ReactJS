import React, { FC, useState } from "react";
import Pizza from "../models/Pizza";
import "./style.css";

const initState = {
  title: "",
  price: "",
  img: "",
};

interface addPizzaProps {
  addPizza: (newPizza: Pizza) => void;
}

const PizzaForm: FC<addPizzaProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPizza({
      ...newPizza,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const { title, price, img } = newPizza;

    if (title && price && img) {
      addPizza({
        title,
        img,
        price: Number(price),
        id: Date.now(),
      });
      setNewPizza(initState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Название"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        type="text"
        name="price"
        placeholder="Цена"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        type="text"
        name="img"
        placeholder="Изображение"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default PizzaForm;
