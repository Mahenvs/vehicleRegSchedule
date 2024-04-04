import { FormikErrors, useFormik } from "formik";
import { registrationForm } from "./registrationModel";
import Heading from "./Heading";

interface FormValues {
  userName: string;
  password: string;
}

const Login = () => {
  const validate = (values) => {
    const errors: FormikErrors<FormValues> = {};
    console.log("inside ");

    if (!values.userName) {
      errors.userName = "Required";
    } else if (values.userName.length > 10) {
      errors.userName = "Must be 10 characters or less";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(values.password)) {
      errors.password = "Invalid password";
    }
    console.log(errors, " are ");

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
              <div className="flex justify-end text-red-600">
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
              <div className="flex justify-end text-red-600">
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
