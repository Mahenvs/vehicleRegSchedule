import { FormikErrors } from "formik";
import { FormValues } from "./interfaces";

export const validateForm = (values) => {
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

  export const validateLogin = (values) => {
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