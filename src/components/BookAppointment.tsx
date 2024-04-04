import { useFormik } from "formik";
import Heading from "./Heading";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { scheduleAppointment } from "../API/Appointment";

const BookAppointment = () => {
  const navigate = useNavigate();

  const date = new Date();
  date.setDate(date.getDate() + 1);
  console.log(date);
  const today = new Date().toISOString().split("T")[0];

  const [userDetails, setUserData] = useState({
    username: "",
  });

  useEffect(() => {
    const userData = localStorage.getItem("userData") || "";
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

    if (loggedIn) {
      const data = JSON.parse(userData);

      console.log(data);

      setUserData((prevState) => ({
        ...prevState,
        username: data.username,
        vehicleType: data.vehicle.vehicleType,
      }));
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      vehicleType: "Car",
      username: userDetails.username,
      scheduledDate: today,
      status: "Booked",
    },

    onSubmit: async (values) => {
      // scheduleAppointment
      console.log({...values,username:userDetails.username});

      const data = await scheduleAppointment(values);
      navigate("appointment-logs");
      // console.log(data);
    },
  });

  return (
    <>
      <Heading>Book Appointment</Heading>

      <form
        onSubmit={formik.handleSubmit}
        className=" mx-auto flex flex-col rounded justify-center  border-zinc-400 border mt-5 p-3 align-middle "
      >
        <div className="flex flex-row px-12 py-2 gap-2 justify-center items-center">
          <div className="w-1/2">
            <label htmlFor="username">Name</label>
          </div>
          <div className="flex flex-col">
            <div>
              <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={userDetails.username}
                readOnly
                className="border border-gray-300 rounded px-2 py-1 hover:outline-none focus:outline-none bg-gray-200"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row px-12 py-2 gap-2 justify-center">
          <div id="my-radio-group" className="w-1/2">
            Vehicle Type
          </div>

          <div
            role="group"
            aria-labelledby="my-radio-group"
            onChange={formik.handleChange}
            className="flex flex-col"
          >
            <label>
              <input type="radio" name="vehicleType" value="Car" />
              Car
            </label>
            <label>
              <input type="radio" name="vehicleType" value="Bike" />
              Bike
            </label>
          </div>
        </div>

        <div className="flex flex-row px-12 py-2 gap-2 justify-center">
          <div className="w-1/2">
            <label htmlFor="scheduledDate">Date</label>
          </div>
          <div className="flex flex-col">
            <div>
              <input
                id="scheduledDate"
                name="scheduledDate"
                type="date"
                // defaultValue={today}
                // onChange={(e) => console.log(e.target.value)}
                onChange={formik.handleChange}
                value={formik.values.scheduledDate}
                className="border border-gray-300 rounded px-2 py-1 hover:outline-none focus:outline-none focus:border-blue-300"
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className="fle x justify-en d mt-2 justify-end flex mr-12">
          <button
            type="submit"
            className="px-2 py-1 right-0 text-center bg-blue-500  rounded text-white focus:outline-none"
          >
            Book
          </button>
        </div>
      </form>
    </>
  );
};

export default BookAppointment;
