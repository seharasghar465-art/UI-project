import React from "react";
import Card from "./Card";

const RightContent = (props) => {
  console.log(props);

  return (
    <div id="scroll" className="flex-1 flex gap-3 overflow-auto">
      {props.data.map((val, idx) => {
        return (
          <Card
            key={idx}
            color={val.color}
            num={idx}
            img={val.img}
            button={val.button}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
