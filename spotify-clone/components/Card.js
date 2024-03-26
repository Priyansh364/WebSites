import React from "react";

const Card = (props) => {
  return (
    <div
    className="hover:cursor-pointer "
      onClick={props.onClick}
    >
      <div className="">
        <button className="play">
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="black"
            stroke="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 5v14l11-7z"></path>
          </svg>
        </button>
      </div>
      <img
        className="object-contain  rounded-md mb-2 "
        src={props.link}
        alt="no img"
      />
      <div className="text-xl"> {props.songs} </div>
      <div className="text-sm text-zinc-500">
        {props.songartist}
      </div>
    </div>
  );
};

export default Card;
