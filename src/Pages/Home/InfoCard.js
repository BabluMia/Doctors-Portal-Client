import React from "react";

const InfoCard = ({singleCard}) => {
    const {heading , content , img ,bg} = singleCard
  return (
    <div className="card lg:card-side shadow-xl bg-accent px-6 text-white">
      <figure>
        <img
          src={img}
        //   src="https://api.lorem.space/image/album?w=400&h=400"
          alt="Album"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default InfoCard;
