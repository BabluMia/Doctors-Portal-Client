import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import swal from "sweetalert";

const AvailableApointment = ({ date, setDate }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");
  // useEffect(() => {
  //   fetch(`https://floating-castle-51900.herokuapp.com/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedDate]);

  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://floating-castle-51900.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    swal({
      title: "Fetech Error",
      text: error.message,
      icon: "error",
    });
  }

  return (
    <div>
      <h2 className="text-center text-secondary my-4 text-xl">
        You Available Apointments On :{format(date, "PP")}
      </h2>
      <div>
        {/* <p className='text-center'>Data {services.length}</p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Service
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            ></Service>
          ))}
        </div>
      </div>
      {treatment && (
        <BookingModal
          refetch={refetch}
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableApointment;
