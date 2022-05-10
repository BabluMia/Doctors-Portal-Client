import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className=" lg:max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 className=" text-xl lg:text-6xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p className="py-3 lg:py-6 w-5/6 lg:w-3/4 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
