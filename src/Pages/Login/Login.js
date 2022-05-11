import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import swal from "sweetalert";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("working");
    swal("Good job!", "You clicked the button!", "success");
  };

  const handleGoogle = () => {
    signInWithGoogle();
  };
  if (error) {
    swal({
      title: "Firebase Error",
      text: error.message,
      icon: "error",
    });
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="  card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center mx-auto">LOGIN </h2>
          <form action="" onSubmit={handleLogin}>
            <label className="label ">
              <span className="label-text text-left">Email</span>
            </label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="input input-bordered w-full"
            />

            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="text"
              placeholder="Password"
              className="input input-bordered w-full"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>

            <div className="form-control mt-3">
              <input
                type="submit"
                value={"LogIn"}
                className="btn btn-accent"
              ></input>
            </div>
          </form>
          <p className="text-sm text-center">
            New In Doctor's Portal?{" "}
            <Link to={"/"}>
              <span className="text-secondary">Create an acccount</span>
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="form-control ">
            <button
              onClick={handleGoogle}
              className="btn text-accent hover:text-white bg-transparent border-accent"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
