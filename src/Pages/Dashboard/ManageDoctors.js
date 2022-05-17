import React, { useState } from "react";
import { useQuery } from "react-query";
import swal from "sweetalert";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [doctor,setDoctor]=useState(null)
  const {
    isLoading,
    error,
    data: doctors,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    swal({
      title: "Fetsch Error",
      text: "Faild Loading All Doctors",
      icon: "error",
    });
  }
  return (
    <div>
      <div class="overflow-x-auto">
          <h2 className="text-3xl text-center text-accent my-3 font-medium">All Doctor</h2>
        <table class="table w-full">
          <thead>
            <tr >
              <th></th>
              <th>Avater</th>
              <th>Name</th>
              <th>Speacility</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => <DoctorRow refetch={refetch} key={index} doctor={doctor} index={index} setDoctor={setDoctor}/>)}
          </tbody>
        </table>
      </div>
      {doctor && <DeleteConfirmModal refetch={refetch} setDoctor={setDoctor} doctor={doctor} />}
    </div>
  );
};

export default ManageDoctors;
