import React from "react";
import CardContent from "./CardContent";

const Card = (props) => {
  return (
    <div className="h-full relative w-[300px] shrink-0 overflow-hidden rounded-2xl">
      <img className="w-full h-full" src={props.img} alt="" />
      <CardContent color={props.color} num={props.num} button={props.button} />
    </div>
  );
};

export default Card;
