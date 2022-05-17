import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import swal from "sweetalert";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { isLoading, error, data:  services} = useQuery('services', () =>
     fetch('http://localhost:5000/services').then(res =>
       res.json()
     )
   )
   const imageStorageKey ='d47b21cd1116812d62ff5566d166b76a'
   /**
     * 3 ways to store images
     * 1. Third party storage //Free open public storage is ok for Practice project 
     * 2. Your own storage in your own server (file system)
     * 3. Database: Mongodb 
     * 
     * YUP: to validate file: Search: Yup file validation for react hook form
    */
//    console.log(services);
  const onSubmit = async (data) => {
    //   console.log(data);
    const image = data?.image[0]
    const formData = new FormData();
    formData.append("image", image);
    const url =`https://api.imgbb.com/1/upload?key=${imageStorageKey}`
    fetch(url,{
        method:'POST',
        body:formData
    }).then(res=>res.json())
    .then(result=>{
        if(result.success){
            const img = result.data.url;
            const doctor ={
                name:data.name,
                email:data.email,
                specialty:data.specialty,
                img:img
            }
            // console.log(doctor);
            //------------ send data to database----------
            fetch('http://localhost:5000/doctor',{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify(doctor)
            }).then(res=>res.json()).then(doc=>{
                if(doc.success){
                    swal({
                        title:'Doctor Info',
                        text:'Successfully Added Doctor',
                        icon:'success'
                    })
                }else{
                    swal({
                        title:'Doctor Info',
                        text:'Failed To Add Doctor',
                        icon:'error'
                    })
                }
                console.log(doctor)
            })
        }
        // console.log('imagebb',result)
        reset()
    })
  };
  if(isLoading){
      return<Loading/>
  }
  if(error){
      swal({
          title:'Loading Error',
          text:'Faild To Load Data',
          icon:'error'
      })
  }
  return (
    <div>
        <h2 className="text-2xl">Add a New Doctor</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })}
                />
                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Specialty</span>
                </label>
                <select {...register('specialty')} class="select input-bordered w-full max-w-xs">
                    {
                        services.map(service => <option
                            key={service._id}
                            value={service.name}
                        >{service.name}</option>)
                    }
                </select>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input
                    type="file"
                    className="input input-bordered w-full max-w-xs"
                    {...register("image", {
                        required: {
                            value: true,
                            message: 'Image is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
            </div>

            <input className='btn w-full max-w-xs text-white my-4' type="submit" value="Add" />
        </form>
    </div>
);
};

export default AddDoctor;
