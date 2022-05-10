import React from "react";

const Service = ({ singleSer }) => {
  const { img, heading, content } = singleSer;
  return (
    <div className="card w-90  bg-base-100 shadow-xl">
      <figure className="px-1 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Service;
