import React from "react";

const InfoCard = ({ singleCard }) => {
  const { heading, content, img, bg } = singleCard;
  return (
    <div
      className={`card lg:card-side shadow-xl  px-10  py-2 text-white ${bg}`}
    >
      <figure className="lg:pl-5 py-0 py-lg-3">
        <img
          src={img}
          //   src="https://api.lorem.space/image/album?w=400&h=400"
          alt="Album"
        />
      </figure>
      <div className="card-body flex justify-center align-middle">
        <h2 className="card-title mt-3">{heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default InfoCard;
