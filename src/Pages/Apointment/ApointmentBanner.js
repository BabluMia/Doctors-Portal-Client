import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const ApointmentBanner = () => {
    const [date , setDate] = useState(new Date())
  return (
    <div
      style={{ background: `url(${bg}) cover no-repeat` }}
      class="hero min-h-screen"
    >
      <div class="hero-content flex-col lg:flex-row ">
        <div className="mx-0 lg:mx-20">
          <DayPicker
          mode="single"
          selected={date}
          onSelect={setDate}
          />
          <p>You have selected : {format(date , 'PP')}</p>
        </div>
        <img src={chair} class="mx-0 lg:mx-20  lg:max-w-lg rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default ApointmentBanner;
