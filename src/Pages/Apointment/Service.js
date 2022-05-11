import React from "react";

const Service = ({ service , setTreatment }) => {
  const { name, slots } = service;
  return (
    <>
      <div class="card mx-auto  w-96 shadow-lg text-primary-content">
        <div class="card-body items-center text-center">
          <h2 className=" card-title text-secondary">{name}</h2>
          <p className="text-center">
            {slots.length ? (
              <span>{slots[0]}</span>
            ) : (
              <span>No Slot Available</span>
            )}
          </p>
          <p className="text-center">
            {slots.length} {slots.length > 0 ? "Spaces" : "Space"} Available
          </p>
          <div class="card-actions justify-center">
            <label onClick={()=> setTreatment(service)}
              disabled={slots.length === 0} for="booking-modal" class="btn modal-button  btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"> Book Apointment</label>
          </div>
        </div>
      </div>

      {/* modal */}

     

      {/* <!-- Put this part before </body> tag --> */}
    </>
  );
};

export default Service;
