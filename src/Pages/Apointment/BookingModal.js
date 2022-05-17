import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import swal from "sweetalert";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const number = event.target.number.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patientName: user?.displayName,
      patient: user?.email,
      number: number,
    };
    console.log(booking);
    // event.target.reset();

    fetch("https://floating-castle-51900.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          swal({
            title: `Booking By ${user.displayName}`,
            text: `Succesfully booked An  Apointment On ${formattedDate}  At ${slot}`,
            icon: "success",
          });
        } else {
          swal({
            title: `Apointment Of  ${user.displayName}`,
            text: `Already Have An Apointment  Apointment On ${data.booking?.date}  At ${data.booking?.slot}`,
            icon: "error",
          });
        }
        setTreatment(null);
        refetch();
      });
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
            Booking For : {name}
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
              {slots.map((slot) => (
                <option value={slot} key={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              className="input w-full  input-bordered"
              value={user?.displayName}
              disabled
            />
            <input
              type="email"
              name="email"
              value={user?.email}
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
