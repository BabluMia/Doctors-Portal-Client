import React from "react";

const Service = ({singleSer}) => {
    const {img,heading , content} = singleSer
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Service;
