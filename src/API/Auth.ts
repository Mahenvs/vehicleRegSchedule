import axios from "axios";
import { FormValues } from "../common/interfaces";

export const RegisterUser = async (body: FormValues) => {
  try {
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
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

export const LoginUser = async (body: FormValues) => {
  try {
    const url = "http://localhost:8080/user/login";
    const response = await axios.post(url, {
      username: body.userName,
      password: body.password,
      role: "user",
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
}
