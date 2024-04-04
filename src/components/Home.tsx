import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">
        Welcome to Car Service Appointment booking system !
      </h2>
      <h3 className="text-xl">
        Please
        <Link to="login" className="underline">{" Login "}</Link> | 
        <Link to="register" className="underline">{" Register "}</Link>
        to book your appointment
      </h3>
    </div>
  );
};

export default Home;
