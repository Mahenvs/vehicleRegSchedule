import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center mb-4 flex-col ">
      <h2 className="text-2xl font-bold">
        Welcome to Car Service Appointment booking system !
      </h2>
      <h3 className="text-xl">
        Please
        <Link to="login" className="border-2 rounded-lg border-black bg-blue-300 mx-8 ">{" Login "}</Link> 
        <Link to="register" className="border-2 rounded-lg border-black bg-blue-300 ">{" Register "}</Link>
        to book your appointment
      </h3>
    </div>
  );
};

export default Home;
