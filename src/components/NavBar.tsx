import Heading from "./Heading";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navList = [
    {
      text: "Schedule",
      link: "book-appointment",
    },
    {
      text: "Appointment Logs",
      link: "appointment-logs",
    },
    {
      text: "Register",
      link: "register",
    },
    {
      text: "Login",
      link: "login",
    },
  ];
  return (
    <div className='bg-red-400 border-b h-16 flex justify-between px-3 items-center mb-4'>
        <Heading className='text-white'>Car Service</Heading>
        <div className='flex gap-6 mx-4'>
        <Link to={"appointment-logs"} className='text-[#171b1e] font-semibold'>
            Appointment Logs
        </Link>
        <Link to={"register"} className='text-[#171b1e] font-semibold'>
            Register
        </Link>
        <Link to={"login"} className='text-[#171b1e] font-semibold'>
            Login
        </Link>
        
        </div>
    </div>
  );
};

export default NavBar;
