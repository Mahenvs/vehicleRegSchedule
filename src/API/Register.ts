import axios from "axios";
import { FormValues } from "../common/formValues";


export const RegisterUser = async (body: FormValues) => {

  const url = "http://localhost:8080/user/create";

  const response = await axios.post(url, {
    name: body.name,
    email: body.email,
    password: body.password,
    username: body.userName,
    vehicle: {
      vehicleType: body.vehicleType,
      vehicleNum: body.vehicleNum,
      manufacturedYear: body.manufacturedYear,
    },
    role: "user",
  });
  const result = await response;
  return result;
}