import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex mt-3 items-center min-h-screen mb-4 flex-col ">
      <h2 className="text-2xl font-bold">
        Welcome to Car Service Appointment booking system !
      </h2>
      <h3 className="text-xl">
        Please
        <Link to="login" className="hover:underline">{" Login "}</Link> | 
        <Link to="register" className="hover:underline ">{" Register "}</Link>
        to book your appointment
      </h3>
    </div>
  );
};

export default Home;
