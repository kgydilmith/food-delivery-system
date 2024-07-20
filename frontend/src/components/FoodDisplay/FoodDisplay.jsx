import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import { food_list } from "../../assets/assets";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { Food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near Your</h2>
      <div className="food-diplay-list">
        {food_list.map((item,index) =>{
          if (category==="All" || category=== item.category){
            return <FoodItem key={index} id={item._id} name={item.name} discription={item.description}
            price={item.price} image={item.image}/>
          }
            
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
