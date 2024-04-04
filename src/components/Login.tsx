import { useFormik } from "formik";
import Heading from "./Heading";
import { validateLogin } from "../common/validate";
import { LoginUser } from "../API/Auth";
import { useNavigate } from "react-router-dom";
import { loginForm } from "../common/interfaces";

const Login = () => {
  
  const navigate = useNavigate();

  const validate = (values:loginForm) => {
    const errors = validateLogin(values);
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      const data = await LoginUser(values);
      navigate("appointment-logs");
      console.log(data);
      localStorage.setItem("loggedIn",JSON.stringify(true));
      localStorage.setItem("userData",JSON.stringify(data))
    },
  });
  return (
    <>
      <Heading>Login</Heading>
      <form
        onSubmit={formik.handleSubmit}
        className=" mx-auto flex flex-col rounded justify-center  border-zinc-400 border mt-5 p-3 "
      >
        <div className="flex flex-row px-12 py-2 gap-2 justify-center">
          <div className="w-1/2">
            <label htmlFor="userName">User Name</label>
          </div>
          <div className="flex flex-col">
            <div>
              <input
                id="userName"
                name="userName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userName}
                className="border border-gray-300 rounded px-2 py-1 hover:outline-none focus:outline-none focus:border-blue-300"
              />
            </div>
            {formik.errors.userName ? (
              <div className="flex justify-end text-[#AF3C3D]">
                {formik.errors.userName}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-row px-12 py-2 gap-2 justify-center">
          <div className="w-1/2">
            <label htmlFor="password">Password</label>
          </div>
          <div className="flex flex-col">
            <div>
              <input
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="border border-gray-300 rounded px-2 py-1 hover:outline-none focus:outline-none focus:border-blue-300"
              />
            </div>
            {formik.errors.password ? (
              <div className="flex justify-end text-[#AF3C3D]">
                {formik.errors.password}
              </div>
            ) : null}
            <div></div>
          </div>
        </div>
        <div className="fle x justify-en d mt-2 justify-end flex mr-12">
          <button
            type="submit"
            className="px-2 py-1 right-0 text-center bg-indigo-600  rounded text-white focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
