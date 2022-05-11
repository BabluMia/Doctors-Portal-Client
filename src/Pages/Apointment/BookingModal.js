import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const Userame = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const data = {
      name: treatment.name,
      slot: slot,
      Userame: Userame,
      email: email,
      number: number,
    };
    console.log(data);
    event.target.reset();
    setTreatment(null);
  };
  return (
    <div className="mx-auto">
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box ">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-center mb-3">
            Booking For : {treatment.name}
          </h3>
          <form
            onSubmit={handleBooking}
            action=""
            className="grid grid-cols-1 gap-y-4"
          >
            <input
              type="text"
              className="input w-full   text-xl input-bordered "
              value={format(date, "PP")}
              disabled
            />
            <select name="slot" className="select select-bordered w-full ">
              {treatment.slots.map((slot) => (
                <option value={slot} key={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input w-full  input-bordered"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input w-full   input-bordered"
            />
            <input
              type="number"
              name="number"
              placeholder="Your Number"
              className="input w-full    input-bordered"
            />
            <input
              type="submit"
              value="Confirm Seat"
              className="btn btn-primary my-3  cursor-pointer rounded-lg  uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
