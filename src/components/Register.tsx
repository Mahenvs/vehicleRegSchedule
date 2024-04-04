import { useFormik } from "formik";
import { fieldConfigs } from "../common/registrationModel";
import FormField from "./FormField";
import Heading from "./Heading";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../API/Auth";
import { validateForm } from "../common/validate";
import { FormValues } from "../common/interfaces";

const Register = () => {
  const validate = (values:FormValues) => {
    const errors = validateForm(values);
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
      manufacturedYear: 2000,
      vehicleNum: "",
    },
    validate,
    onSubmit: async (values) => {
      const data = await RegisterUser(values);
      navigate("appointment-logs");

      localStorage.setItem("userData", data);
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
