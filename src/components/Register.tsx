import { FormikErrors, useFormik } from "formik";

interface FormValues {
  name: string;
  userName: string;
  password: string;
  email: string;
  phoneNo: number;
  vehicleType: "car" | "bike";
  manufacturedYear: number;
  vehicleNum: number;
}

const Register = () => {

  const validate = (values) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }
    return errors;
  };
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
    onSubmit: (values) => {
      console.log(values, " values ");
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="   justify-center">
      <h3 className="flex justify-center text-3xl underline">Registration</h3>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto flex flex-col w-1/2 justify-center  border-zinc- 100 border mt-10 p-3"
      >
        <div className="flex flex-row px-12 py-2 gap-2 justify-center">
          <label htmlFor="name" className="flex justify-end">
            Name
          </label>
          <div className="flex flex-col">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </div>
            {/* {formik.errors.name ? (
              <div className="flex flex-col">{formik.errors.name}</div>
            ) : null} */}
          </div>
        </div>
        <div className="flex flex-row px-12 gap-2 py-2 justify-center">
          <label htmlFor="userName" className="flex justify-end">
            User Name
          </label>
          <div className="flex flex-col">
            <div>
              <input
                id="userName"
                name="userName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </div>
            {/* {formik.errors.userName ? (
              <div className="flex ">{formik.errors.userName}</div>
            ) : null} */}
          </div>
        </div>

        <div className="flex flex-row px-12 py-2 gap-2 justify-center">
          <label htmlFor="email" className="flex justify-end ">
            Email Address
          </label>
          <div className="flex flex-col">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </div>
            {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}
          </div>
        </div>

        <div className="flex flex-row px-12 py-2 gap-2 justify-center">
          <label htmlFor="password" className="flex justify-end">
            Password
          </label>
          <div className="flex flex-col">
            <div>
              <input
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </div>
            {/* {formik.errors.password ? (
              <div className="flex flex-col">{formik.errors.password}</div>
            ) : null} */}
          </div>
        </div>
        <div className="flex flex-row px-12 gap-2 py-2 justify-center">
          <label htmlFor="phoneNo" className="flex justify-end">
            Phone No
          </label>
          <div className="flex flex-col">
            <div>
              <input
                id="phoneNo"
                name="phoneNo"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNo}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </div>
            {/* {formik.errors.phoneNo ? (
              <div className="flex ">{formik.errors.phoneNo}</div>
            ) : null} */}
          </div>
        </div>

        <div className="flex flex-row px-12 py-2 gap-2 justify-center">
          <label htmlFor="vehicleType" className="flex justify-end">
            Vehicle Type
          </label>
          <div className="flex flex-col">
            <div>
              <input
                id="vehicleType"
                name="vehicleType"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.vehicleType}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </div>
            {/* {formik.errors.vehicleType ? (
              <div className="flex flex-col">{formik.errors.vehicleType}</div>
            ) : null} */}
          </div>
        </div>
        <div className="flex flex-row px-12 gap-2 py-2 justify-center">
          <label htmlFor="vehNum" className="flex justify-end">
            Vehicle Number
          </label>
          <div className="flex flex-col">
            <div>
              <input
                id="vehNum"
                name="vehicleNum"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.vehicleNum}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </div>
            {formik.errors.vehicleNum ? (
              <div className="flex ">{formik.errors.vehicleNum}</div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-row px-12 py-2 gap-2 justify-center">
          <label htmlFor="year" className="flex justify-end">
            Manufactured Year
          </label>
          <div className="flex flex-col">
            <div>
              <input
                id="year"
                name="manufacturedYear"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.manufacturedYear}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </div>
            {formik.errors.manufacturedYear ? (
              <div className="flex flex-col">
                {formik.errors.manufacturedYear}
              </div>
            ) : null}
          </div>
        </div>

        {/* <div> */}
        <button
          type="submit"
          className="mt-2 px-2 py-1 text-white bg-blue-500 text-whit rounded "
        >
          Submit
        </button>
        {/* </div> */}
      </form>
    </div>
  );
};
export default Register;
