import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { fetchItems, addItem, deleteItem } from "./services/api"; // Import API functions

import AddItemForm from "./components/AddItemForm";
import ItemList from "./components/ItemList";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems()
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAdd = (name) => {
    addItem(name)
      .then((res) => setItems([...items, res.data]))
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    deleteItem(id)
      .then(() => setItems(items.filter((item) => item._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Item Manager</h1>
      <AddItemForm onAdd={handleAdd} />
      <ItemList items={items} onDelete={handleDelete} />
    </div>
  );
};

export default App;
