import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableApointment = ({ date, setDate }) => {
  const [services, setServices] = useState([]);
  const [treatment , setTreatment] = useState(null)
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-secondary my-4 text-xl">
        You Available Apointments On :{format(date, "PP")}
      </h2>
      <div>
        {/* <p className='text-center'>Data {services.length}</p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Service key={service._id} service={service} setTreatment={setTreatment}></Service>
          ))}
        </div>
      </div>
      {
          treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={treatment}></BookingModal>
      }
    </div>
  );
};

export default AvailableApointment;
