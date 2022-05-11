import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const ApointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{ background: `url(${bg}) cover no-repeat` }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row ">
        <div className="mx-0 lg:mx-20">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
        <img
          src={chair}
          className="mx-0 lg:mx-20  lg:max-w-lg rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default ApointmentBanner;
