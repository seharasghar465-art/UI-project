import React from "react";

const CardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col justify-between p-4">
      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl">
        {props.num + 1}
      </div>
      <div>
        <p className="text-md mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos
          adipisci maiores repudiandae ab praesentium, cumque autem?
        </p>
        <div className="flex w-full justify-between items-center">
          <button
            style={{ backgroundColor: props.color }}
            className="bg-blue-600 px-8 text-md font-semibold py-2 rounded-full cursor-pointer "
          >
            {props.button}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className="bg-blue-600 px-4 text-md font-semibold py-2 rounded-full cursor-pointer "
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
