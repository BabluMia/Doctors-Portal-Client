import React from "react";
import swal from "sweetalert";

const UserRow = ({ user, index,refetch }) => {
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${user?.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal({
          title: "Admin Information",
          text: "Succesfully Added Admin",
          icon: "success",
        });
        refetch()
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>

      <td>{user.email}</td>
      <td>
        {user.role !== "admin" && (
          <button class="btn btn-xs" onClick={makeAdmin}>
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
