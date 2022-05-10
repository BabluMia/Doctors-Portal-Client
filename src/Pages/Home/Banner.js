import React from "react";
import chair from '../../assets/images/chair.png'

const Banner = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          class=" lg:max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 class=" text-xl lg:text-6xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-3 lg:py-6 w-5/6 lg:w-3/4 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
