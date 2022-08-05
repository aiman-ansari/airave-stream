import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const CategoryContext = createContext();
const useCategory = () => useContext(CategoryContext);
const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    const res = await axios.get("/api/categories");
    setCategories(res.data.categories);
  };
  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};
export { CategoryProvider, useCategory };
