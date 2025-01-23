import axios from "axios";

const API_URL = "http://localhost:4000/api/items";

export const fetchItems = () => axios.get(API_URL);
export const addItem = (name) => axios.post(API_URL, { name });
export const deleteItem = (id) => axios.delete(`${API_URL}/${id}`);
