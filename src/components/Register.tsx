import { FormikErrors, useFormik } from "formik";
import { fieldConfigs } from "./registrationModel";
import FormField from "./FormField";
import Heading from "./Heading";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../API/Register";
import { FormValues } from "../common/formValues";

const Register = () => {
  const validate = (values) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    } else if (!values.email) {
      errors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Provide valid email";
    } else if (!values.password) {
      errors.password = "Required";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(values.password)) {
      errors.password = "Invalid password";
    } else if (!values.phoneNo) {
      errors.phoneNo = "Required";
    } else if (!/^\d{0,10}$/.test(values.phoneNo)) {
      errors.phoneNo = "Invalid Mobile Number";
    } else if (!values.vehicleType) {
      errors.vehicleType = "Required";
    } else if (values.vehicleType != ("Car" || "Bike")) {
      errors.vehicleType = "Enter Car or Bike";
    } else if (!values.manufacturedYear) {
      errors.manufacturedYear = "Required";
    } else if (!/^\d{0,10}$/.test(values.manufacturedYear)) {
      errors.manufacturedYear = "Only Years are allowed";
    }

    return errors;
  };
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
      phoneNo: "",
      vehicleType: "",
      manufacturedYear: "",
      vehicleNum: "",
    },
    validate,
    onSubmit: async (values) => {
      console.log(values, " values ");

      const data = await RegisterUser(values);
      navigate("appointment-logs");

      console.log(data);
    },
  });
  return (
    <>
      <Heading>Registration</Heading>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto flex flex-col w- 1/2 justify-center  border-zinc- 100 border mt-10 p-3"
      >
        {fieldConfigs.map((field) => (
          <FormField
            key={field.id}
            label={field.label}
            id={field.id}
            name={field.name}
            type={field.type}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            maxLen={field.maxLen}
            error={formik.errors[field.name]}
            placeholder={field.placeholder}
          />
        ))}

        <div className="mt-2 justify-end flex mr-12">
          <button
            type="submit"
            className="px-2 py-1 right-0 text-center bg-indigo-600  rounded text-white focus:outline-none"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};
export default Register;
