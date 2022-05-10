import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import apoinment from "../../assets/images/appointment.png";

const MakeApoinment = () => {
  return (
    <section
      style={{
        background: `url(${apoinment}) center no-repeat`,
      }}
      className="flex justify-center items-center mt-20"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px] " src={doctor} alt="" />
      </div>
      <div className="flex-1 p-3">
        <h3 className="text-[#19D3AE] text-xl">Appointment</h3>
        <h2 className="text-4xl text-white">Make An Apoinment Today</h2>
        <p className="my-4 lg:my-6 lg:w-9/12 w-100  text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary  text-left">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default MakeApoinment;
