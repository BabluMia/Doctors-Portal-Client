import React from "react";
import swal from "sweetalert";

const DeleteConfirmModal = ({ doctor, refetch, setDoctor }) => {
  const { email } = doctor;
  const handleDelete = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          swal({
            title: "Delete Notification",
            text: "Delete Successfully",
            icon: "success",
          });
        }
        setDoctor(null);
        refetch();
      });
  };
  return (
    <>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are You Sure Want To Delete {doctor.name}
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <button class="btn " onClick={() => handleDelete(email)}>
              Delete
            </button>
            <label for="delete-confirm-modal" class="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmModal;
