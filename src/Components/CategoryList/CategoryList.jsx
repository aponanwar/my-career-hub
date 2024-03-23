import { useEffect, useState } from "react";
import Categoryitem from "../Categoryitem/Categoryitem";

const CategoryList = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-center mt-10">Job Category List</h1>
      <p className=" mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future.
      </p>
      <div className="grid grid-cols-4 border-2 gap-4 p-5 mt-10">
        {items.map((item) => (
         <Categoryitem key={item.id} item={item}></Categoryitem>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
