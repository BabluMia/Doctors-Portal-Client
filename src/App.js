import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Apointment from "./Pages/Apointment/Apointment";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./Pages/Login/RequireAuth";
import Signup from "./Pages/Login/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyApointment from "./Pages/Dashboard/MyApointment";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistry from "./Pages/Dashboard/MyHistry";
import Users from "./Pages/Dashboard/Users";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Apointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
           <Route index element={<MyApointment/>}></Route>
          <Route path="review" element={<MyReview/>}></Route>
          <Route path="history" element={<MyHistry/>}></Route>
          <Route path="users" element={<Users/>}></Route>
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
