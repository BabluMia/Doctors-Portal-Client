import React from "react";
import image4 from '../../assets/images/treatment.png'

const HeroService = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row  ml-2 lg:ml-32 ">
        <img
          src={image4}
          class="w-96 lg:max-w-sm rounded-lg shadow-2xl"
        />
        <div className="mx-2 md:mx-10 lg:mx-28">
          <h1 class="text-xl lg:text-5xl font-bold text-accent">Exceptional Dental Care, <br /> on Your Terms</h1>
          <p class="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroService;
