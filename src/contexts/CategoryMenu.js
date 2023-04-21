import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categoryChosen, setCategoryChosen] = useState("");

  return (
    <CategoryContext.Provider value={{ categoryChosen, setCategoryChosen }}>
      {children}
    </CategoryContext.Provider>
  );
};
