import React from "react";
import swal from "sweetalert";

const DoctorRow = ({ doctor, index, refetch,setDoctor }) => {
  
  
  return (
    <tr className={`${index % 2 === 1 ? "active" : ""}`}>
      <th>{index + 1}</th>

      <td>
        <div class="avatar">
          <div class="w-10 rounded-full">
            <img src={doctor.img} alt="doctor img" />
          </div>
        </div>
      </td>
      <td>{doctor.name}</td>
      <td>{doctor.specialty}</td>
      <td>
        <label
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
          onClick={()=>setDoctor(doctor)}
        >
          Delete
        </label>
        
      </td>
    </tr>
  );
};

export default DoctorRow;
