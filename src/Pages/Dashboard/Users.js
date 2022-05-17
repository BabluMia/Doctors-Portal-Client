import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const [user] = useAuthState(auth)
    const { isLoading, error, data:users ,refetch} = useQuery(['users',user], () =>
     fetch(`https://floating-castle-51900.herokuapp.com/user`,{
        method:"GET",
        headers:{
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`,
        }
      })
     .then(res =>res.json())
   )
   if(isLoading){
    return <Loading/>
   }
   if(error){
    swal({
        title: "Loading Error",
        text: `React Query Says ${error.messege}`,
        icon: "error"
      });
   }
    return (
        <div>
            <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              
              <th>User Email</th>
              <th>Make Admin</th>
              <th>Remove User</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) =><UserRow refetch={refetch} user={user} key={index} index={index} />)}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Users;